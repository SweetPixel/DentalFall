#pragma strict

function Start () {

}
var score:int=0;
var scoretext: GUIText;
function Update () {
scoretext.text= "SCORE: "+ score;
}
function OnCollisionEnter(col : Collision)
{
if(col.gameObject.name=="enemy(Clone)")
{
Destroy(col.gameObject);
score++;
}
}