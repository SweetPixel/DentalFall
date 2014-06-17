private var displayLabel = false;
var gameover: GUIText;

var goscore: GUIText; 

function Start() {
FlashLabel();
//FlashCrash();



}

/* function FlashCrash(){
 while(countdown>=1){
gamecrashtext.text = "CRASHING IN  " + countdown; 
 countdown--;
 yield WaitForSeconds(1);
 }
 Application.Quit();
 
 
 }*/
function Update(){
 if (displayLabel == true)
{
gameover.fontSize=50;
 gameover.text="GAME\n OVER";
}
 else
 gameover.text = " ";
 }
 
function FlashLabel() {

    

// Fancy pants flash of label on and off    

while (1) {

 displayLabel = true;

 yield WaitForSeconds(.5);

 displayLabel = false;

 yield WaitForSeconds(.5);  

}

 

}

 

function OnGUI() {

 

 if (displayLabel == true)
{
gameover.fontSize=50;
 gameover.text="GAME\n OVER";
}
 else
 gameover.text = " ";
}