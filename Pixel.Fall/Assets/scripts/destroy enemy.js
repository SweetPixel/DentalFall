#pragma strict

var score:int=0;
var guiscore: TextMesh;
var coin : AudioClip;
var start : AudioClip;
function Start () {
guiscore.active=true;
	var height = Camera.main.camera.orthographicSize;
	var width = height * Screen.width / Screen.height;
	
	var gameW = width / 3.2;
	var gameH = height / 95;
//	scoretext.transform.localPosition = new Vector3(gameH, gameW+0.1, 0);
	      //RESET HIGHSCORE
	//PlayerPrefs.SetInt("HighScore",0);
}

function Update () {

guiscore.text= score.ToString();
var temp2 : int;
PlayerPrefs.SetInt("PlayerScore",score);
temp2 = PlayerPrefs.GetInt("HighScore");
if(score > temp2)
PlayerPrefs.SetInt("HighScore",score);

if(score>99)
guiscore.fontSize = 180;

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
if(col.gameObject.name=="rotating_i(Clone)")
{
Destroy(col.gameObject);
score++;
}

}