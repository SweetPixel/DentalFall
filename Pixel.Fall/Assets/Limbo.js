#pragma strict
var coin : AudioClip;


function Start () {

}

function Update () {

}
function OnCollisionEnter(col : Collision)
{
audio.clip = coin;
audio.Play();
audio.volume = 1.0;
if(col.gameObject.name=="ishape"||col.gameObject.name=="ishape(Clone)"||col.gameObject.name=="squareshape(Clone)"||col.gameObject.name=="squareshape" ||col.gameObject.name=="Lshape(Clone)"||col.gameObject.name=="Lshape"||col.gameObject.name=="deadshape(Clone)"||col.gameObject.name=="deadshape"||col.gameObject.name=="floor" )
{
Application.LoadLevel("SaveIt");
}
}