#pragma strict
var PixelFallLogo : AudioClip;
function Start () {
var counter : int;
counter = PlayerPrefs.GetInt("counter");
yield WaitForSeconds(2);
if(counter <1)
Application.LoadLevel("intro");
if(counter>0)
Application.LoadLevel("readyScene");
}



