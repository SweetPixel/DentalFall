#pragma strict

var rotSpeed: float = 60; // degrees per second
 
function Update(){
  transform.Rotate(0, 0, rotSpeed * Time.deltaTime, Space.World);
}