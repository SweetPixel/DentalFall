#pragma strict

var Heading : GUIText;
var Heading2 : GUIText;
var Heading3 : GUIText;
var enemy1 : Transform;	
var width : float;
var hero: GameObject;
var i :int = 0;
var timer: float=0.0;
function Start () {

Heading.text = "Catch It!"; 
Heading2.text = "Tap and hold on to the green pixel";
Heading3.text = "to catch it.";
var height = Camera.main.camera.orthographicSize;
	width = height * Screen.width / Screen.height;
	var gameW = width / 4;
	hero.transform.localScale = new Vector3(gameW, gameW, 0);
	enemy1.transform.localScale = new Vector3(gameW, gameW, 0);
	
	
}

function Update () {

}
function OnMouseDown(){
Heading.text = "Save It!";
Heading2.text = "Now save the green pixel from";
Heading3.text = "falling pixels without letting it go.";
Spawn();




} 
function Spawn(){
var count : int = 0;
for (i=0; i<1000; i++){
var pos:Vector3 = new Vector3(Random.Range(-(width-0.7),width-0.6),7.0F,-3.021553F);
timer=0;
if(count<4){
Instantiate(enemy1,pos,Quaternion.identity);
yield WaitForSeconds(Random.Range(0.4,0.7))	;
count++;
}	
}
}