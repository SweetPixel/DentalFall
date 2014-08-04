#pragma strict
import UnityEngine;


var HighScore : GUIText;
var explosion : AudioClip;

function Start () {

	// Authenticate and register a ProcessAuthentication callback
    // This call needs to be made before we can proceed to other calls in the Social API
	Social.localUser.Authenticate (ProcessAuthentication);


	HighScore.text = "(NEW) " + PlayerPrefs.GetInt("PlayerScore") + " / " + PlayerPrefs.GetInt("HighScore")+ " (HIGH) " ;
	audio.clip= explosion;
	audio.Play();
	
	
//	ILeaderboard leaderboard = UnityEngine.Social.CreateLeaderboard();
//	leaderboard.id = "pfsandbox";
	
//	Social.ReportScore (PlayerPrefs.GetInt("HighScore"), leaderboard.id, success => {
//			Debug.Log(success ? "Reported score successfully" : "Failed to report score");
//	});
}

function Update () {

}

function ProcessAuthentication (success: boolean) {
    if (success) {
        Debug.Log ("Authenticated, checking achievements");

        Social.ReportScore (PlayerPrefs.GetInt("HighScore"), "pfsandbox", null) ;
    }
    else
        Debug.Log ("Failed to authenticate");
}