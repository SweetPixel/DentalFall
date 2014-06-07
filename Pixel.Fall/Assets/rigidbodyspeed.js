#pragma strict

var score : int;
var speed : float;
function Start () {
rigidbody.AddForce(Vector3.down * 0.2);
}

function Update () {
score =  PlayerPrefs.GetInt("PlayerScore");
if(score>0){
speed = score / 1.4;
rigidbody.AddForce(Vector3.down * speed);

}

}