#pragma strict

var score : int;
var speed : float;
var addfactor :float = 1;
var base : float = 18.2;//base is 18
function Start () {
rigidbody.AddForce(Vector3.down * 0.1);
Debug.Log(Vector3.down);
}

function Update () {
score =  PlayerPrefs.GetInt("PlayerScore");
if((score>0)&&(score<=100)){
 //main speed = score / 1.4; 
speed = (score/10) / 0.5 + 1;
Debug.Log(Vector3.down*speed);
//Debug.Log(speed + " speed at  score = " + score);
rigidbody.AddForce(Vector3.down * speed);
}
if(score>100){
Debug.Log(Vector3.down*speed);
rigidbody.AddForce(Vector3.down * speed);
}
/*if((score>0) && (score<30)){
speed = score / 1.6; 
//speed = score / 2;
Debug.Log(speed + " speed at  score = " + score);
rigidbody.AddForce(Vector3.down * speed);
}
if((score>=30) && (score<40)){
speed = base+ addfactor;
Debug.Log(speed + " speed at  score = " + score);
rigidbody.AddForce(Vector3.down * speed);
}
if((score>=40) && (score<50)){
speed = base + addfactor*2;
Debug.Log(speed + " speed at  score = " + score);
//Debug.Log(score + "speed = " + Vector3.down * 18.125);
rigidbody.AddForce(Vector3.down * speed);
}
if((score>=50) && (score<60)){
speed = base+ addfactor*3;
Debug.Log(speed + " speed at  score = " + score);
//Debug.Log(score + "speed = " + Vector3.down * 18.125);
rigidbody.AddForce(Vector3.down * speed);
}
if((score>=60) && (score<70)){
speed = base+ addfactor*4;
Debug.Log(speed + " speed at  score = " + score);
//Debug.Log(score + "speed = " + Vector3.down * 18.125);
rigidbody.AddForce(Vector3.down * speed);
}
if((score>=70) && (score<80)){
speed = base+ addfactor*5;
Debug.Log(speed + " speed at  score = " + score);
//Debug.Log(score + "speed = " + Vector3.down * 18.125);
rigidbody.AddForce(Vector3.down * speed);
}if((score>=80) && (score<90)){
speed = base+ addfactor*6;
Debug.Log(speed + " speed at  score = " + score);
//Debug.Log(score + "speed = " + Vector3.down * 18.125);
rigidbody.AddForce(Vector3.down * speed);
}
if((score>=90) && (score<100)){
speed = base+ addfactor*7;
Debug.Log(speed + " speed at  score = " + score);
//Debug.Log(score + "speed = " + Vector3.down * 18.125);
rigidbody.AddForce(Vector3.down * speed);
}
if(score >=100){
speed = base+ addfactor*8;
Debug.Log(speed + " speed at  score = " + score);
//Debug.Log(score + "speed = " + Vector3.down * 18.125);
rigidbody.AddForce(Vector3.down * speed);
}*/
}