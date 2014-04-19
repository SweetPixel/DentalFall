#pragma strict

	// Array of enemy prefabs.
	
var prefab : Transform;	
var timer: float=0.0;
function Start () {

}

function Update () {
timer+=Time.deltaTime;
if (timer > 1){
Spawn();}
}
function Spawn(){
var pos:Vector3 = new Vector3(Random.Range(-10.0F,10.0F),7.709583,-3.021553F);
timer=0;
								var forward=transform.TransformDirection(Vector3.down);
				Instantiate(prefab,pos,Quaternion.identity);
				
}
