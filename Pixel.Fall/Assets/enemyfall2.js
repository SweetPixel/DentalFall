#pragma strict

var enemy1 : Transform;	
var enemy2 : Transform;	
var enemy3 : Transform;
var enemy4 : Transform;	
var timer: float=0.0;
var width : float;
var hero: GameObject;
var i :int = 0;



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
	Spawn();
}

function Update () {

}

function Spawn(){
for (i=0; i<1000; i++){

var randomPick : int = Mathf.Abs(Random.Range(0,5));
var pos:Vector3 = new Vector3(Random.Range(-(width),width),7.7095830F,-3.021553F);
timer=0;
;
if(randomPick == 1){

//var forward=transform.TransformDirection(Vector3.down);
				Instantiate(enemy1,pos,Quaternion.identity);
}
else if(randomPick == 2){
//var forward=transform.TransformDirection(Vector3.down);

								Instantiate(enemy2,pos,Quaternion.identity);
}
else if(randomPick == 3){
//var forward=transform.TransformDirection(Vector3.down);
				Instantiate(enemy3,pos,Quaternion.identity);
}								
else if(randomPick == 4){
//var forward=transform.TransformDirection(Vector3.down);
				Instantiate(enemy4,pos,Quaternion.identity);
}					
yield WaitForSeconds(Random.Range(0.2,0.6))	;	
}
}