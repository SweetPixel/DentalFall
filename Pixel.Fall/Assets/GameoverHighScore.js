﻿#pragma strict
import UnityEngine;
import GooglePlayGames;


var HighScore : GUIText;
var nowScore : GUIText;
var explosion : AudioClip;
var count : int = 0;
var skin : GUISkin;


function Start () {
 
		
if(PlayerPrefs.GetInt("LastScene") > 0){
PlayerPrefs.SetInt("LastScene",0);
audio.clip = explosion;
audio.Play();
audio.volume=1.0;
}
nowScore.fontSize=40;
if(PlayerPrefs.GetInt("PlayerScore")<10 && PlayerPrefs.GetInt("HighScore")<10)
{
nowScore.text="    "+PlayerPrefs.GetInt("PlayerScore")+ " / "+ PlayerPrefs.GetInt("HighScore");
//HighScore.text = "     (NEW)                            (HIGH) " ;
}


else if((PlayerPrefs.GetInt("PlayerScore")<10) && (PlayerPrefs.GetInt("HighScore")>9) && (PlayerPrefs.GetInt("HighScore")<100))
{
nowScore.text="   " + PlayerPrefs.GetInt("PlayerScore")+ " / "+ PlayerPrefs.GetInt("HighScore");
//HighScore.text = "     (NEW)                            (HIGH) " ;
}

else if((PlayerPrefs.GetInt("PlayerScore")<10)  && (PlayerPrefs.GetInt("HighScore")>99) && (PlayerPrefs.GetInt("HighScore")<1000))
{
nowScore.text="  "+PlayerPrefs.GetInt("PlayerScore")+ " / "+ PlayerPrefs.GetInt("HighScore");
//HighScore.text = "    (NEW)                              (HIGH) " ;
}

else if((PlayerPrefs.GetInt("PlayerScore")<100) && (PlayerPrefs.GetInt("PlayerScore")>9) && (PlayerPrefs.GetInt("HighScore")>9) && (PlayerPrefs.GetInt("HighScore")<100))
{
nowScore.text="  "+PlayerPrefs.GetInt("PlayerScore")+ " / "+ PlayerPrefs.GetInt("HighScore");
//HighScore.text = "    (NEW)                              (HIGH) " ;
}

else if((PlayerPrefs.GetInt("PlayerScore")<100) && (PlayerPrefs.GetInt("PlayerScore")>9) && (PlayerPrefs.GetInt("HighScore")>99) && (PlayerPrefs.GetInt("HighScore")<1000))
{
nowScore.text=" "+PlayerPrefs.GetInt("PlayerScore")+ " / "+ PlayerPrefs.GetInt("HighScore");
//HighScore.text = " (NEW)                                   (HIGH) " ;
}
else if((PlayerPrefs.GetInt("PlayerScore")>99) && (PlayerPrefs.GetInt("PlayerScore")<1000) && (PlayerPrefs.GetInt("HighScore")>99) && (PlayerPrefs.GetInt("HighScore")<1000))
{
nowScore.text=PlayerPrefs.GetInt("PlayerScore")+ " / "+ PlayerPrefs.GetInt("HighScore");
//HighScore.text = "(NEW)                                      (HIGH) " ;
}
//audio.clip= explosion;
//audio.Play();

	#if UNITY_ANDROID
		Social.ReportScore(PlayerPrefs.GetInt("HighScore"), "CgkIutDH9N0BEAIQAA",null);
		if(PlayerPrefs.GetInt("PlayerScore")>49)
		Social.ReportProgress("CgkIutDH9N0BEAIQAw", 100.0f,null);
		if(PlayerPrefs.GetInt("PlayerScore")>74)
		Social.ReportProgress("CgkIutDH9N0BEAIQBA", 100.0f,null);
		if(PlayerPrefs.GetInt("PlayerScore")>99)
		Social.ReportProgress("CgkIutDH9N0BEAIQBQ", 100.0f,null);
		if(PlayerPrefs.GetInt("PlayerScore")>149)
		Social.ReportProgress("CgkIutDH9N0BEAIQBg", 100.0f,null);
		if(PlayerPrefs.GetInt("PlayerScore")>199)
		Social.ReportProgress("CgkIutDH9N0BEAIQCA", 100.0f,null);
		if(PlayerPrefs.GetInt("Deaths")>99)
		Social.ReportProgress("CgkIutDH9N0BEAIQAg", 100.0f,null);
	#endif

	#if UNITY_IPHONE
		Social.ReportScore(PlayerPrefs.GetInt("HighScore"), "pfsandbox", null);
		if(PlayerPrefs.GetInt("PlayerScore")>49)
		Social.ReportProgress("pfbronze", 100.0f,null);
		if(PlayerPrefs.GetInt("PlayerScore")>74)
		Social.ReportProgress("pfsilver", 100.0f,null);
		if(PlayerPrefs.GetInt("PlayerScore")>99)
		Social.ReportProgress("pfgold", 100.0f,null);
		if(PlayerPrefs.GetInt("PlayerScore")>149)
		Social.ReportProgress("pfplatinum", 100.0f,null);
		if(PlayerPrefs.GetInt("PlayerScore")>199)
		Social.ReportProgress("pfinfinity", 100.0f,null);
		if(PlayerPrefs.GetInt("Deaths")>99)
		Social.ReportProgress("pfdeaths", 100.0f,null);
	#endif
	
	
	
	
}

function Update () {
}


