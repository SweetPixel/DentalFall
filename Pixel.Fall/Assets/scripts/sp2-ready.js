#pragma strict
var counter : int;
counter = PlayerPrefs.GetInt("counter");

function OnMouseDown() 
{
if(counter <1)
Application.LoadLevel("intro");
if(counter>0)
Application.LoadLevel("readyScene");
}
