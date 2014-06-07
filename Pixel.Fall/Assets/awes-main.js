#pragma strict

function Start () {
wait();
}

function Update () {

}
function wait()
{
yield WaitForSeconds(3);
Application.LoadLevel("begin"); 

}