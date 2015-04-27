#pragma strict

import UnityEngine.SocialPlatforms;

var enemy1 : Transform;	
var enemy2 : Transform;	
var enemy3 : Transform;
var enemy4 : Transform;	


//var hero: GameObject;
private var i :int = 0;


function Start () {
	//var height = Camera.main.GetComponent.<Camera>().orthographicSize;
	//width = height * Screen.width / Screen.height;
	//var gameW = width / 4;
//	hero.transform.localScale = new Vector3(gameW, gameW, 0);
//	enemy1.transform.localScale = new Vector3(gameW, gameW, 0);
//	enemy2.transform.localScale = new Vector3(gameW, gameW*2, 0);
//	enemy3.transform.localScale = new Vector3(gameW*2, gameW*2, 0);
//	enemy4.transform.localScale = new Vector3(gameW*2, gameW*3, 0);
	Spawn();
	
	
	
}

/*function Awake(){
	Input.multiTouchEnabled = false;
	if(Application.platform== RuntimePlatform.IPhonePlayer)
	{	
		Application.targetFrameRate = 60;
		QualitySettings.vSyncCount = 2;
	}
}
*/

function Spawn(){
var randomPick : int;
var instance : Transform;
var rb : Rigidbody;
var fallSpeed : float;
fallSpeed=30f;
	while(1){
	
		 randomPick = Mathf.Abs(Random.Range(1,5));
		 
		 var pos:Vector3 = new Vector3(Random.Range(-3,3.1),10f,0f);

if(randomPick == 1){
				instance=Instantiate(enemy1,pos,Quaternion.identity);
				instance.GetComponent.<Rigidbody>().AddForce(Vector3.down*fallSpeed);
				instance.transform.Rotate(0,180,0);

				}
else if(randomPick == 2){
			instance=Instantiate(enemy2,pos,Quaternion.identity);
			instance.GetComponent.<Rigidbody>().AddForce(Vector3.down*fallSpeed);
			instance.transform.Rotate(0,180,0);
}
else if(randomPick == 3){
				instance=Instantiate(enemy3,pos,Quaternion.identity);
				instance.GetComponent.<Rigidbody>().AddForce(Vector3.down*fallSpeed);
				instance.transform.Rotate(90,0,0);
}								
else if(randomPick == 4){
				instance=Instantiate(enemy4,pos,Quaternion.identity);
				instance.GetComponent.<Rigidbody>().AddForce(Vector3.down*fallSpeed);
				instance.transform.Rotate(0,180,0);
}
					
yield WaitForSeconds(.5)	;	
}
}