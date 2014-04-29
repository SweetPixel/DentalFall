#pragma strict

var score : int;
var speed : float;
function Start () {

}

function Update () {
score =  PlayerPrefs.GetInt("Player Score");
if(score>10){
speed = score / 2;
rigidbody.AddForce(Vector3.down * speed);

}

}