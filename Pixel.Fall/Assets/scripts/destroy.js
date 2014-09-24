#pragma strict
var explosion : AudioClip;
function Start () {
PlayerPrefs.SetInt("LastScene",1);
}

function Update () {

}
function OnCollisionEnter(col : Collision)
{

if(col.gameObject.name=="ishape(Clone)"||col.gameObject.name=="squareshape(Clone)"||col.gameObject.name=="Rectangleshape(Clone)"||col.gameObject.name=="deadshape(Clone)"||col.gameObject.name=="floor")
{
var deaths : int = PlayerPrefs.GetInt("Deaths");
deaths++;
PlayerPrefs.SetInt("Deaths",deaths);
Application.LoadLevel("gameOver");
}
}