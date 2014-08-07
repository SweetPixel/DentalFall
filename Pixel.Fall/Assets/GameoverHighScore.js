#pragma strict
import UnityEngine;
#if UNITY_Android
	import GooglePlayGames;
#endif

var HighScore : GUIText;
var explosion : AudioClip;

function Start () {

	// Authenticate and register a ProcessAuthentication callback
    // This call needs to be made before we can proceed to other calls in the Social API
    
    #if UNITY_Android
    	// recommended for debugging:
    	try {
    	
    		PlayGamesPlatform.DebugLogEnabled = true;
    		// Activate the Google Play Games platform
    		PlayGamesPlatform.Activate();
    		LumosAnalytics.RecordEvent("GPLAy-Initialized");
    	}
    	catch(UnityException e)
    	{
    		Debug.Log(e);
    	}
    #endif
    
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

		#if UNITY_Android
			Social.ReportScore(PlayerPrefs.GetInt("HighScore"), "CgkIutDH9N0BEAIQAA",null);
		#endif
		
		#if UNITY_IPHONE
			Social.ReportScore (PlayerPrefs.GetInt("HighScore"), "pfsandbox", null) ;
		#endif
        	
    }
    else
        Debug.Log ("Failed to authenticate");
}