#pragma strict
var HighScore : GUIText;
var explosion : AudioClip;

function Start () {
HighScore.text = "(NEW) " + PlayerPrefs.GetInt("PlayerScore") + " / " + PlayerPrefs.GetInt("HighScore")+ " (HIGH) " ;
audio.clip= explosion;
audio.Play();

}

function Update () {

}