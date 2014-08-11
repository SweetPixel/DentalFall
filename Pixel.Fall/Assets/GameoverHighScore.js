#pragma strict
import UnityEngine;
import GooglePlayGames;


var HighScore : GUIText;
var explosion : AudioClip;

function Start () {


	// Set label's text to the player's screen
	HighScore.text = "(NEW) " + PlayerPrefs.GetInt("PlayerScore") + " / " + PlayerPrefs.GetInt("HighScore")+ " (HIGH) " ;
	
	audio.clip= explosion;
	audio.Play();
	
	

	
	#if UNITY_ANDROID
		Social.ReportScore(PlayerPrefs.GetInt("HighScore"), "CgkIutDH9N0BEAIQAA",null);
	#endif
			
	#if UNITY_IPHONE
		Social.ReportScore(PlayerPrefs.GetInt("HighScore"), "pfsandbox", null);
	#endif
}

function Update () {

}
