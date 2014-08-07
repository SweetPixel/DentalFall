#pragma strict
var HighScore : GUIText;
var nowScore : GUIText;
var explosion : AudioClip;
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

audio.clip= explosion;
audio.Play();

}

function Update () {

}