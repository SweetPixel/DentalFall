#pragma strict

function Start () {

}

function Update () {

}
function OnCollisionEnter(col : Collision)
{
if(col.gameObject.name=="ishape"||col.gameObject.name=="ishape(Clone)"||col.gameObject.name=="squareshape(Clone)"||col.gameObject.name=="squareshape" ||col.gameObject.name=="Lshape(Clone)"||col.gameObject.name=="Lshape"||col.gameObject.name=="deadshape(Clone)"||col.gameObject.name=="deadshape"||col.gameObject.name=="floor" )
{
Application.LoadLevel("gameover");
}
}