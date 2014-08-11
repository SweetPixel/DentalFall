#pragma strict

import UnityEngine.SocialPlatforms;

var enemy1 : Transform;	
var enemy2 : Transform;	
var enemy3 : Transform;
var enemy4 : Transform;
var Enemy1 : GameObject;
	
var timer: float=0.0;
var width : float;
var hero: GameObject;
var i :int = 0;
var guiscore:TextMesh;
var score : int;
var count_tut : int =0;

function Start () {


// Authenticate and register a ProcessAuthentication callback
    // This call needs to be made before we can proceed to other calls in the Social API
//	Social.localUser.Authenticate (ProcessAuthentication);
	

PlayerPrefs.SetInt("tutorial",count_tut);
	var height = Camera.main.camera.orthographicSize;
	width = height * Screen.width / Screen.height;
	var gameW = width / 4;
	hero.transform.localScale = new Vector3(gameW, gameW, 0);
	enemy1.transform.localScale = new Vector3(gameW, gameW, 0);
	enemy2.transform.localScale = new Vector3(gameW, gameW, 0);
	enemy3.transform.localScale = new Vector3(gameW, gameW, 0);
	enemy4.transform.localScale = new Vector3(gameW, gameW, 0);
	
	Spawn();
	
	
	
}

function ProcessAuthentication (success: boolean) {
    if (success) {
        Debug.Log ("Authenticated, checking achievements");

        // Request loaded achievements, and register a callback for processing them
        Social.LoadAchievements (ProcessLoadedAchievements);
    }
    else
        Debug.Log ("Failed to authenticate");
}

// This function gets called when the LoadAchievement call completes
function ProcessLoadedAchievements (achievements: IAchievement[]) {
    if (achievements.Length == 0)
        Debug.Log ("Error: no achievements found");
    else
        Debug.Log ("Got " + achievements.Length + " achievements");
    
    // You can also call into the functions like this
    Social.ReportProgress ("Achievement01", 100.0, function(result) {
        if (result)
            Debug.Log ("Successfully reported achievement progress");
        else
            Debug.Log ("Failed to report achievement");
    });

}
function Awake(){
	Input.multiTouchEnabled = false;
	if(Application.platform== RuntimePlatform.IPhonePlayer)
	{	
		Application.targetFrameRate = 60;
		QualitySettings.vSyncCount = 2;
	}
}
function Update () {
score = PlayerPrefs.GetInt("PlayerScore");
}

function Spawn(){
var randomPick : int;
	for (i=0; i<1000; i++){
		if((score>=0)&&(score<=10))
		Debug.Log(score);
		 randomPick = 1;
		 if((score>10)&&(score<=25))
		 randomPick = Mathf.Abs(Random.Range(0,3));
		 if((score>25)&&(score<=50))
		 randomPick = Mathf.Abs(Random.Range(0,4));
		 if(score>50)
		 randomPick = Mathf.Abs(Random.Range(0,5));
		var pos:Vector3 = new Vector3(Random.Range(-(width-0.2),width-0.2),7.0F,-3.021553F);
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
					
yield WaitForSeconds(Random.Range(0.2,0.4))	;	
}
}