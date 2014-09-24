#pragma strict

function Start () {
PlayerPrefs.SetInt("Deaths",0);
yield WaitForSeconds(6);
Application.LoadLevel("begin");
}