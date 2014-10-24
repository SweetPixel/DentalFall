#pragma strict
var Pixel_Arcade_Below50 : Material ; 
var Pixel_Arcade_Bronze : Material ;
var Pixel_Arcade_Gold : Material ;
var Pixel_Arcade_Infinity_King : Material ;
var Pixel_Arcade_Ninja_Agility : Material ;
var Pixel_Arcade_Platinum : Material ;
var Pixel_Arcade_Silver : Material ;
var cubeandroid : GameObject;
var cubeiOs : GameObject;

function Start () {
#if UNITY_ANDROID
cubeiOs.active = false;

if((PlayerPrefs.GetInt("PlayerScore")>=0) && (PlayerPrefs.GetInt("PlayerScore")<50))
cubeandroid.renderer.material= Pixel_Arcade_Below50;

else if((PlayerPrefs.GetInt("PlayerScore")>=50) && (PlayerPrefs.GetInt("PlayerScore")<75))
cubeandroid.renderer.material= Pixel_Arcade_Bronze;

else if((PlayerPrefs.GetInt("PlayerScore")>=75) && (PlayerPrefs.GetInt("PlayerScore")<100))
cubeandroid.renderer.material= Pixel_Arcade_Silver;

else if((PlayerPrefs.GetInt("PlayerScore")>=100) && (PlayerPrefs.GetInt("PlayerScore")<200))
cubeandroid.renderer.material= Pixel_Arcade_Gold;

else if((PlayerPrefs.GetInt("PlayerScore")>=200) && (PlayerPrefs.GetInt("PlayerScore")<500))
cubeandroid.renderer.material= Pixel_Arcade_Platinum;

else if((PlayerPrefs.GetInt("PlayerScore")>=500) && (PlayerPrefs.GetInt("PlayerScore")<1000))
cubeandroid.renderer.material= Pixel_Arcade_Ninja_Agility;

else  if((PlayerPrefs.GetInt("PlayerScore")>1000) )
cubeandroid.renderer.material= Pixel_Arcade_Infinity_King;
#endif


#if UNITY_IPHONE

if((PlayerPrefs.GetInt("PlayerScore")>=0) && (PlayerPrefs.GetInt("PlayerScore")<50))
cubeandroid.renderer.material= Pixel_Arcade_Below50;

else if((PlayerPrefs.GetInt("PlayerScore")>=50) && (PlayerPrefs.GetInt("PlayerScore")<75))
cubeandroid.renderer.material= Pixel_Arcade_Bronze;

else if((PlayerPrefs.GetInt("PlayerScore")>=75) && (PlayerPrefs.GetInt("PlayerScore")<100))
cubeandroid.renderer.material= Pixel_Arcade_Silver;

else if((PlayerPrefs.GetInt("PlayerScore")>=100) && (PlayerPrefs.GetInt("PlayerScore")<200))
cubeandroid.renderer.material= Pixel_Arcade_Gold;

else if((PlayerPrefs.GetInt("PlayerScore")>=200) && (PlayerPrefs.GetInt("PlayerScore")<500))
cubeandroid.renderer.material= Pixel_Arcade_Platinum;

else if((PlayerPrefs.GetInt("PlayerScore")>=500) && (PlayerPrefs.GetInt("PlayerScore")<1000))
cubeandroid.renderer.material= Pixel_Arcade_Ninja_Agility;

else  if((PlayerPrefs.GetInt("PlayerScore")>1000) )
cubeandroid.renderer.material= Pixel_Arcade_Infinity_King;
#endif
}