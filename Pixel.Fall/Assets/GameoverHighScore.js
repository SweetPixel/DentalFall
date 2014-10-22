#pragma strict
import GooglePlayGames;

//var scoreshare : GUIText;
//var invitefriends : GUIText;
var newcube : Transform;	
var highcube : Transform;
var HighScore : GUIText;
var nowScore : GUIText;
var explosion : AudioClip;
var count : int = 0;
var skin : GUISkin;
var width : float;
var offset : Vector2;
var ratio : int;
var finalSize : int;

function Start () 
{
		if (GoogleAnalytics.instance) {
			GoogleAnalytics.instance.LogScreen("Game Over Scene");		
		}
finalSize = Screen.width/ratio;
if(PlayerPrefs.GetInt("LastScene") > 0)
{
PlayerPrefs.SetInt("LastScene",0);
audio.clip = explosion;
audio.Play();
audio.volume=1.0;
}

var height = Camera.main.camera.orthographicSize;
	width = height * Screen.width / Screen.height;
	var gameW = width /2;
	
	/*if(width<3.7)
	{
	//Debug.Log("ipad1");
	scoreshare.fontSize = finalSize;
	invitefriends.fontSize = finalSize;
	scoreshare.pixelOffset = new Vector2( offset.x * Screen.width, offset.y * Screen.height);
	invitefriends.pixelOffset = new Vector2( offset.x * Screen.width, offset.y * Screen.height);
	}*/
	#if UNITY_IPHONE
	if((iPhone.generation == iPhoneGeneration.iPad3Gen) || (iPhone.generation == iPhoneGeneration.iPad4Gen)|| (iPhone.generation == iPhoneGeneration.iPad2Gen ))//if(width > 3.7)
	{
	//Debug.Log("ipad2");
	newcube.transform.localScale = new Vector3(gameW, width/4, 0);
	highcube.transform.localScale = new Vector3(gameW, width/4, 0);
	/*scoreshare.fontSize = 25;
	invitefriends.fontSize = 25;
	scoreshare.transform.localPosition = new Vector3(0.075,4.91,0);
	invitefriends.transform.localPosition = new Vector3(0.072,5.975,0);*/
	}
	#endif
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

if("PlayerScore" >= 100)
{
hatrick_achievement++;
PlayerPrefs.SetInt("hatrick_achievement",hatrick_achievement);
if(PlayerPrefs.GetInt("hatrick_achievement")>=3)
Debug.Log("warkahatrick");
Debug.Log(hatrick_achievement);
}
else if(score<100)
{
hatrick_achievement=0;
PlayerPrefs.SetInt("hatrick_achievement",hatrick_achievement);

}


	#if UNITY_ANDROID
		
		// Report Score to Leaderboard
		//Social.ReportScore(PlayerPrefs.GetInt("HighScore"), "CgkIutDH9N0BEAIQAA",null);
		
//		if(PlayerPrefs.GetInt("PlayerScore")>49)
//		Social.ReportProgress("CgkIutDH9N0BEAIQAw", 100.0f,null);
//		if(PlayerPrefs.GetInt("PlayerScore")>74)
//		Social.ReportProgress("CgkIutDH9N0BEAIQBA", 100.0f,null);
//		if(PlayerPrefs.GetInt("PlayerScore")>99)
//		Social.ReportProgress("CgkIutDH9N0BEAIQBQ", 100.0f,null);
//		if(PlayerPrefs.GetInt("PlayerScore")>149)
//		Social.ReportProgress("CgkIutDH9N0BEAIQBg", 100.0f,null);
//		if(PlayerPrefs.GetInt("PlayerScore")>199)
//		Social.ReportProgress("CgkIutDH9N0BEAIQCA", 100.0f,null);
//		if(PlayerPrefs.GetInt("Deaths")>99)
//		Social.ReportProgress("CgkIutDH9N0BEAIQAg", 100.0f,null);
//	#endif
//
//	#if UNITY_IPHONE
//	
//		// Report Score to Leaderboard
//		Social.ReportScore(PlayerPrefs.GetInt("HighScore"), "pfall_leaderboard", null);
//		
//		if(PlayerPrefs.GetInt("PlayerScore")>49)
//		Social.ReportProgress("pfbronze", 100.0f,null);
//		if(PlayerPrefs.GetInt("PlayerScore")>74)
//		Social.ReportProgress("pfsilver", 100.0f,null);
//		if(PlayerPrefs.GetInt("PlayerScore")>99)
//		Social.ReportProgress("pfgold", 100.0f,null);
//		if(PlayerPrefs.GetInt("PlayerScore")>149)
//		Social.ReportProgress("pfplatinum", 100.0f,null);
//		if(PlayerPrefs.GetInt("PlayerScore")>199)
//		Social.ReportProgress("pfinfinity", 100.0f,null);
//		if(PlayerPrefs.GetInt("Deaths")>99)
//		Social.ReportProgress("pfdeaths", 100.0f,null);
//	#endif
	}