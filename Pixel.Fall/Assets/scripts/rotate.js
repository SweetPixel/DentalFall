#pragma strict

var rotSpeed: float = 60; // degrees per second
 
function Update(){
  transform.Rotate(rotSpeed * Time.deltaTime, rotSpeed * Time.deltaTime, rotSpeed * Time.deltaTime, Space.World);
}