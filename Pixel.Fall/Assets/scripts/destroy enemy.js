#pragma strict

function Start () {

	var height = Camera.main.GetComponent.<Camera>().orthographicSize;
	var width = height * Screen.width / Screen.height;
	var gameW = width / 3.2;
	var gameH = height / 95;
}

function OnTriggerEnter (col:Collider) {

if(col.gameObject.name=="Donut_1(Clone)")
{
Destroy(col.gameObject);

}
else if(col.gameObject.name=="Chocolate(Clone)")
{
Destroy(col.gameObject);

}

else if(col.gameObject.name=="Donut_2(Clone)")
{
Destroy(col.gameObject);

}

else if(col.gameObject.name=="IceCream(Clone)")
{
Destroy(col.gameObject);
}

else if(col.gameObject.name=="Teeth")
{
Destroy(col.gameObject);
Application.LoadLevel("gameOver");
}

}