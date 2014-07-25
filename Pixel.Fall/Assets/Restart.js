#pragma strict

function Start () {

}

function Update () {

}
function OnMouseDown(){
LumosAnalytics.RecordEvent("Restart");
Application.LoadLevel("mainScene");


}