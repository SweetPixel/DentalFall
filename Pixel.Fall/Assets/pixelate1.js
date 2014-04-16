#pragma strict
var enemyPrefab:Transform;
function Start () {

}

function Update () {
var forward= transform.TransformDirection(Vector3.forward);
var enemy=Instantiate(enemyPrefab,GameObject.Find("Cube").transform.position,Quaternion.identity);

}