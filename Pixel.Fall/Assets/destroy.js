#pragma strict
var explosion : AudioClip;


function Start () {
PlayerPrefs.SetInt("LastScene",1);
}


function Update () {}
 
function OnCollisionEnter(col : Collision)
{

if(col.gameObject.name=="ishape(Clone)"||col.gameObject.name=="Donut_2(Clone)"||col.gameObject.name=="Donut_1(Clone)"||col.gameObject.name=="IceCream(Clone)"||col.gameObject.name=="floor"||col.gameObject.name=="Chocolate(Clone)")
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