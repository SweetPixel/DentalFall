#pragma strict
import UnityEngine;
import GooglePlayGames;


var HighScore : GUIText;
var nowScore : GUIText;
var explosion : AudioClip;
var count : int = 0;
var skin : GUISkin;
function Start () {
nowScore.fontSize=40;
if(PlayerPrefs.GetInt("PlayerScore")<10 && PlayerPrefs.GetInt("HighScore")<10)
{
nowScore.text="    "+PlayerPrefs.GetInt("PlayerScore")+ " / "+ PlayerPrefs.GetInt("HighScore");
HighScore.text = "     (NEW)                            (HIGH) " ;
}


else if((PlayerPrefs.GetInt("PlayerScore")<10) && (PlayerPrefs.GetInt("HighScore")>9) && (PlayerPrefs.GetInt("HighScore")<100))
{
nowScore.text="   " + PlayerPrefs.GetInt("PlayerScore")+ " / "+ PlayerPrefs.GetInt("HighScore");
HighScore.text = "     (NEW)                            (HIGH) " ;
}

else if((PlayerPrefs.GetInt("PlayerScore")<10)  && (PlayerPrefs.GetInt("HighScore")>99) && (PlayerPrefs.GetInt("HighScore")<1000))
{
nowScore.text="  "+PlayerPrefs.GetInt("PlayerScore")+ " / "+ PlayerPrefs.GetInt("HighScore");
HighScore.text = "    (NEW)                              (HIGH) " ;
}

else if((PlayerPrefs.GetInt("PlayerScore")<100) && (PlayerPrefs.GetInt("PlayerScore")>9) && (PlayerPrefs.GetInt("HighScore")>9) && (PlayerPrefs.GetInt("HighScore")<100))
{
nowScore.text="  "+PlayerPrefs.GetInt("PlayerScore")+ " / "+ PlayerPrefs.GetInt("HighScore");
HighScore.text = "    (NEW)                              (HIGH) " ;
}

else if((PlayerPrefs.GetInt("PlayerScore")<100) && (PlayerPrefs.GetInt("PlayerScore")>9) && (PlayerPrefs.GetInt("HighScore")>99) && (PlayerPrefs.GetInt("HighScore")<1000))
{
nowScore.text=" "+PlayerPrefs.GetInt("PlayerScore")+ " / "+ PlayerPrefs.GetInt("HighScore");
HighScore.text = " (NEW)                                   (HIGH) " ;
}
else if((PlayerPrefs.GetInt("PlayerScore")>99) && (PlayerPrefs.GetInt("PlayerScore")<1000) && (PlayerPrefs.GetInt("HighScore")>99) && (PlayerPrefs.GetInt("HighScore")<1000))
{
nowScore.text=PlayerPrefs.GetInt("PlayerScore")+ " / "+ PlayerPrefs.GetInt("HighScore");
HighScore.text = "(NEW)                                      (HIGH) " ;
}
//audio.clip= explosion;
//audio.Play();

	#if UNITY_ANDROID
		Social.ReportScore(PlayerPrefs.GetInt("HighScore"), "CgkIutDH9N0BEAIQAA",null);
	#endif

	#if UNITY_IPHONE
		Social.ReportScore(PlayerPrefs.GetInt("HighScore"), "pfsandbox", null);
	#endif
}

function Update () {
if (Input.GetKeyDown(KeyCode.Escape)) {
			count=1;
	}
}
function OnGUI(){
if(count == 1){
GUI.skin = skin;


   GUI.Box(new Rect(0,0,Screen.width,Screen.height),"Exit");
   GUI.Label(new Rect(Screen.width*1/4,Screen.height*2/6,Screen.width*2/4,Screen.height*1/6), "Are you sure you want to exit the game?");
if(GUI.Button(Rect(Screen.width/4,Screen.height*3/8,Screen.width/2,Screen.height/8),"Yes"))
          {

         Application.Quit();
          }
          if(GUI.Button(Rect(Screen.width/4,Screen.height*4/8,Screen.width/2,Screen.height/8),"Keep Playing"))
          {
          count = 0;
          Application.LoadLevel("gameover");
}}}
