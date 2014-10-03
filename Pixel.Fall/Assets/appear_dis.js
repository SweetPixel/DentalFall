#pragma strict
var powerup: Transform ;
var pow : GameObject;
var displayLabel : boolean;
var current_time : float;
function Start() {
current_time=Time.deltaTime+5.0f;
Debug.Log(current_time);
}
function Update(){
Debug.Log(Time.deltaTime);
if(Time.deltaTime >= current_time)
{
	var left= transform.TransformDirection(Vector3.left);
	Instantiate(pow, left, Quaternion.identity);
	current_time=Time.deltaTime+5.0f;
	
}
//Invoke("throwpowerup",5.0f);
//  var position = Vector3(Random.Range(-2, 3), Random.Range(-5.8, 4.2),0 );
 //Instantiate(powerup , position , Quaternion.identity);
 //if (displayLabel == true)/
//{
//powerup.renderer.enabled=true;
//}/
 //else
// {`
// powerup.renderer.enabled=false;
 //}/
}
function throwpowerup()
{
 //yield WaitForSeconds(2);
var left= transform.TransformDirection(Vector3.left);
Instantiate(powerup, left, Quaternion.identity);
} 
function appear() {
// Fancy pants flash of label on and off    

while (1) {

 displayLabel = true;

 yield WaitForSeconds(Mathf.Abs(Random.Range(1,7)));

 displayLabel = false;

  yield WaitForSeconds(Mathf.Abs(Random.Range(10,15)));

}

 

}
