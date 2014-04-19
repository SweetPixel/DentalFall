#pragma strict

function Start () {

}
var score:int=0;
var scoretext: GUIText;
function Update () {
scoretext.text= " "+ score;
}
function OnCollisionEnter(col : Collision)
{
if(col.gameObject.name=="ishape(Clone)")
{
Destroy(col.gameObject);
score++;
}

if(col.gameObject.name=="squareshape(Clone)")
{
Destroy(col.gameObject);
score++;
}

if(col.gameObject.name=="Lshape(Clone)")
{
Destroy(col.gameObject);
score++;
}
if(col.gameObject.name=="deadshape(Clone)")
{
Destroy(col.gameObject);
score++;
}

}