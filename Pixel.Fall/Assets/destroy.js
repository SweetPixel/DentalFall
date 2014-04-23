#pragma strict

function Start () {

}

function Update () {

}
function OnCollisionEnter(col : Collision)
{
<<<<<<< HEAD
if(col.gameObject.name=="ishape"||col.gameObject.name=="ishape(Clone)"||col.gameObject.name=="squareshape(Clone)"||col.gameObject.name=="squareshape" ||col.gameObject.name=="Lshape(Clone)"||col.gameObject.name=="Lshape"||col.gameObject.name=="deadshape(Clone)"||col.gameObject.name=="deadshape"||col.gameObject.name=="floor" )
=======
if(col.gameObject.name=="boundry" || col.gameObject.name=="ishape"||col.gameObject.name=="ishape(Clone)"||col.gameObject.name=="squareshape(Clone)"||col.gameObject.name=="squareshape" ||col.gameObject.name=="Lshape(Clone)"||col.gameObject.name=="Lshape"||col.gameObject.name=="deadshape(Clone)"||col.gameObject.name=="deadshape"||col.gameObject.name=="floor" )
>>>>>>> 01469f933bf6684d32f3eb087c746061d51785f5
{
Application.LoadLevel("gameover");
}
}