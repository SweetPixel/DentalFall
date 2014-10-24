#pragma strict

function Start () {
	var height = Camera.main.camera.orthographicSize;
	var width = height * Screen.width / Screen.height;
	Debug.Log(height + " " + width);
}

function Update () {

}