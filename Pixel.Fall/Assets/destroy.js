#pragma strict

function Start () {

}

function Update () {

}
function OnCollisionEnter(col : Collision)
{
if(col.gameObject.name=="boundry" || col.gameObject.name=="enemy"||col.gameObject.name=="enemy2"||col.gameObject.name=="enemy3"||col.gameObject.name=="enemy(Clone)" ||col.gameObject.name=="enemy2(Clone)"||col.gameObject.name=="enemy3(Clone)"||col.gameObject.name=="floor" )
{
Application.LoadLevel("gameover");
}
}