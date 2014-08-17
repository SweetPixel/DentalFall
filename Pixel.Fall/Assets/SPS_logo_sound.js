#pragma strict

var  SPSLogoSound : AudioClip;
function Start () {
playsound();
}

function Update () {
}
function playsound(){
yield WaitForSeconds(0.3); 
audio.clip = SPSLogoSound;
audio.Play();
audio.volume = 1.0;
}