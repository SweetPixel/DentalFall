#pragma strict

function Start () {

}

function Update () {
// choose the margin randomly
			var margin = Random.Range (0.0, 0.3);
			// setup the rectangle
			camera.rect = Rect (margin, 0, 1 - margin * 2, 1);

}