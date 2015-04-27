#pragma strict

function OnMouseDown()
{
if(this.gameObject.name=="Restart")
{
Application.LoadLevel("gameplay");
}
else if(this.gameObject.name=="link")
{
Application.OpenURL("https://www.youtube.com/watch?v=hDZXSMU2lAk");
}
else if(this.gameObject.name=="start")
	{
		Application.LoadLevel("gameplay");
	}
}