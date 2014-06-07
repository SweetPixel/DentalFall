#pragma strict

var score:int=0;
var scoretext: GUIText;
var guiscore: TextMesh;
var coin : AudioClip;
function Start () {

guiscore.active=true;
	var height = Camera.main.camera.orthographicSize;
	var width = height * Screen.width / Screen.height;
	
	var gameW = width / 3.2;
	var gameH = height / 95;
	scoretext.fontSize = 100;
//	scoretext.transform.localPosition = new Vector3(gameH, gameW+0.1, 0);
	
}

function Update () {
var temp1 : int;
var temp2 : int;
guiscore.text= score.ToString();
PlayerPrefs.SetInt("PlayerScore",score);
scoretext.text= " "+ score;
temp2 = PlayerPrefs.GetInt("HighScore");
if(score > temp2)
PlayerPrefs.SetInt("HighScore",score);


}
function OnCollisionEnter(col : Collision)
{
audio.clip = coin;
audio.Play();
audio.volume = 1.0;
if(col.gameObject.name=="ishape(Clone)")
{
Destroy(col.gameObject);
score++;

}
if(col.gameObject.name=="ishape")
{
Destroy(col.gameObject);
}

if(col.gameObject.name=="squareshape(Clone)")
{
Destroy(col.gameObject);
score++;
}

if(col.gameObject.name=="Rectangleshape(Clone)")
{
Destroy(col.gameObject);
score++;
}
if(col.gameObject.name=="deadshape(Clone)")
{
Destroy(col.gameObject);
score++;
}
if(col.gameObject.name=="deadshape")
{
Destroy(col.gameObject);
}

}