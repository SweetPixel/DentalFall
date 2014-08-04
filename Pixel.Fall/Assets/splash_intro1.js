#pragma strict



function Start () {

	
	//PlayerPrefs.SetInt("counter", 0);
	var counter : int;
	counter = PlayerPrefs.GetInt("counter");
	Debug.Log(counter);
	yield WaitForSeconds(3.5);
	Application.LoadLevel("splash2");
}


function Update () {

}
