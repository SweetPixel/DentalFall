#pragma strict

	// Array of enemy prefabs.
	
var enemy1 : Transform;	
var enemy2 : Transform;	
var enemy3 : Transform;
var enemy4 : Transform;	
var timer: float=0.0;

function Start () {

}

function Update () {
timer+=Time.deltaTime;
if (timer > 0.09){
Spawn();}
}
function Spawn(){
var randomPick : int = Mathf.Abs(Random.Range(0,5));
var pos:Vector3 = new Vector3(Random.Range(-10.0F,10.0F),7.709583,-3.021553F);
timer=0;
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
}
