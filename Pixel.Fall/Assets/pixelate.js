#pragma strict

function Start () {

}

function Update () {

}
function OnCollisionEnter(col : Collision)
{
if(col.gameObject.name=="enemy(Clone)")
{
Destroy(col.gameObject);
}