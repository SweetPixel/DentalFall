#pragma strict

var SPSLogoSound : AudioClip;
function Start () {
//wait();

//PlayerPrefs.SetInt("counter", 0);
var counter : int;
counter = PlayerPrefs.GetInt("counter");
yield WaitForSeconds(3.5);
Application.LoadLevel("splash2");

}
