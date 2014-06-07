#pragma strict
@script RequireComponent(AudioSource)
var count : int = 0;
var coin : AudioClip;
function Start () {
	var height = Camera.main.camera.orthographicSize;
	var width = height * Screen.width / Screen.height;
	
	var gameW = width / 3.2;
	var gameH = height / 95;
	
}

function Update () {
if(count>3){
Application.LoadLevel("begin");

}
}
function OnCollisionEnter(col : Collision)
{
audio.clip = coin;
audio.Play();
audio.volume = 1.0;

++count;
if(col.gameObject.name=="ishape")
{
Destroy(col.gameObject);

}



}