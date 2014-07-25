#pragma strict
var explosion : AudioClip;
function Start () {

}

function Update () {

}
function OnCollisionEnter(col : Collision)
{

if(col.gameObject.name=="ishape(Clone)"||col.gameObject.name=="squareshape(Clone)"||col.gameObject.name=="Rectangleshape(Clone)"||col.gameObject.name=="deadshape(Clone)"||col.gameObject.name=="floor")
{

Application.LoadLevel("gameOver");
}
}