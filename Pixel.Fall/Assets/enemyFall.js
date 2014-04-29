#pragma strict

	// Array of enemy prefabs.
	
var enemy1 : Transform;	
var enemy2 : Transform;	
var enemy3 : Transform;
var enemy4 : Transform;	
var timer: float=0.0;
var width : float;
var hero: GameObject;



function Start () {
	var height = Camera.main.camera.orthographicSize;
	width = height * Screen.width / Screen.height;
	
	Debug.Log(" " + width);
	
	var gameW = width / 3;
	
	hero.transform.localScale = new Vector3(gameW, gameW, 0);
	
	enemy1.transform.localScale = new Vector3(gameW, gameW, 0);
	enemy2.transform.localScale = new Vector3(gameW, gameW, 0);
	enemy3.transform.localScale = new Vector3(gameW, gameW, 0);
	enemy4.transform.localScale = new Vector3(gameW, gameW, 0);	

}

function Update () {
var r : Rect = camera.pixelRect;
Debug.Log("Camera displays from " + r.xMin + " to " + r.xMax + " pixel");
timer+=Time.deltaTime;

var move = Input.GetAxis("Horizontal");

if (timer > 0.5 - move){

Spawn();}
}

function Spawn(){

var r : Rect = camera.pixelRect;
Debug.Log("Camera displays from " + r.xMin + " to " + r.xMax + " pixel");
var randomPick : int = Mathf.Abs(Random.Range(0,5));
var pos:Vector2 = new Vector2(Random.Range(-(width),width),7.7095830F);

var lastRandom: int = 0;

timer=0;
if(randomPick == 1 && lastRandom != 1){

//var forward=transform.TransformDirection(Vector3.down);
				Instantiate(enemy1,pos,Quaternion.identity);
				lastRandom = 1;
}
else if(randomPick == 2 && lastRandom != 2){
//var forward=transform.TransformDirection(Vector3.down);
				Instantiate(enemy2,pos,Quaternion.identity);
				lastRandom = 2;
}
else if(randomPick == 3 && lastRandom != 3){
//var forward=transform.TransformDirection(Vector3.down);
				Instantiate(enemy3,pos,Quaternion.identity);
				lastRandom = 3;
}								
else if(randomPick == 4 && lastRandom != 4){
//var forward=transform.TransformDirection(Vector3.down);
				Instantiate(enemy4,pos,Quaternion.identity);
				lastRandom = 4;
}							
}
