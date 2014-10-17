
var text1: GUIText;
var text2: GUIText; 
var text3: GUIText; 
var text4: GUIText;
var width : float;
var count_tut : int ;
function Start()
{
PlayerPrefs.SetInt("counter",1);
var counter : int;
counter = PlayerPrefs.GetInt("counter");

	count_tut= PlayerPrefs.GetInt("tutorial");
	if(count_tut>0)
	{
	Application.LoadLevel("mainScene");
	}
}
function OnMouseDown()
{
Application.LoadLevel("Saveit");
}