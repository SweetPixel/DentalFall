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

function wait () {
//yield WaitForSeconds(2);
//audio.clip = SPSLogoSound;
//audio.Play();
}
