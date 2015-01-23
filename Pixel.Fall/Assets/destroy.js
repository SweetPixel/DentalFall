#pragma strict
var explosion : AudioClip;


function Start () {
PlayerPrefs.SetInt("LastScene",1);
}


function Update () {}
 
function OnCollisionEnter(col : Collision)
{

if(col.gameObject.name=="ishape(Clone)"||col.gameObject.name=="squareshape(Clone)"||col.gameObject.name=="Rectangleshape(Clone)"||col.gameObject.name=="deadshape(Clone)"||col.gameObject.name=="floor"||col.gameObject.name=="chocolate")
{
var deaths : int = PlayerPrefs.GetInt("Deaths");
var ducks : int = PlayerPrefs.GetInt("Ducks");
deaths++;
PlayerPrefs.SetInt("Deaths",deaths);

		if(PlayerPrefs.GetInt("PlayerScore")==0)
			{
			ducks++;
			PlayerPrefs.SetInt("Ducks",ducks);
			}



Application.LoadLevel("gameOver");
}
}