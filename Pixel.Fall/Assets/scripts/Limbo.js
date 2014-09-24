
var text1: GUIText;
var text2: GUIText;

function Start () 
{
text1.text ="HOLD";
text2.text = " ";
yield WaitForSeconds(2.5);
text1.text=" ";
text2.text="DO NOT COLLIDE";

}