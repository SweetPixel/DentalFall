private var displayLabel = false;
var game: GUIText;
var over: GUIText;
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

 game.text="GAME";
 over.text="OVER";
}
 else
 {
 game.text = " ";
 over.text=" ";
 }}
 
function FlashLabel() {

    

// Fancy pants flash of label on and off    

while (1) {

 displayLabel = true;

 yield WaitForSeconds(.5);

 displayLabel = false;

 yield WaitForSeconds(.5);  

}

 

}

 
