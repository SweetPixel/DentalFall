#pragma strict

var score : int;
var speed : float;
function Start () {
rigidbody.AddForce(Vector3.down * 0.1);
}

function Update () {
score =  PlayerPrefs.GetInt("PlayerScore");
if((score>0) && (score<30)){
speed = score / 1.6;
Debug.Log(speed + "speed at  sscore = " + score);
rigidbody.AddForce(Vector3.down * speed);

}
if(score > 30){
Debug.Log(score + "speed = " + Vector3.down * 18.125);
rigidbody.AddForce(Vector3.down * 18.125);
}
}