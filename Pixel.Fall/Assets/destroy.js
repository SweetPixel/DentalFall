#pragma strict

function Start () {

}

function Update () {

}
function OnCollisionEnter(col : Collision)
{
if(col.gameObject.name=="boundry" || col.gameObject.name=="enemy"||col.gameObject.name=="enemy(Clone)"||col.gameObject.name=="floor" )
{
Application.LoadLevel("gameover");
}
}