

function Start () {
var x : int= Mathf.Abs(Random.Range(1,4));

yield WaitForSeconds(x);
Application.LoadLevel("mainScene");
}

function Update () {

}