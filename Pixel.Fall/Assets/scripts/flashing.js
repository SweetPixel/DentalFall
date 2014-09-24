private var displayLabel = false;
var gameover: GameObject;

function Start() {
FlashLabel();
//FlashCrash();



}

function Update(){
 if (displayLabel == true)
{

gameover.renderer.enabled=true;
}
 else
 {
 gameover.renderer.enabled=false;
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

 
