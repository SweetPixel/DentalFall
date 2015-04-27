#pragma strict

 
function OnCollisionEnter(col : Collision)
{

if(col.gameObject.name=="Donut_2(Clone)"||col.gameObject.name=="Donut_1(Clone)"||col.gameObject.name=="IceCream(Clone)"||col.gameObject.name=="Chocolate(Clone)")
{
Application.LoadLevel("gameOver");
}
}