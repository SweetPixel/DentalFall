#pragma strict

import UnityEngine;
#if UNITY_Android
	import GooglePlayGames;
#end if


function Start () {

}

function Update () {

}

function OnMouseDown () {
	Social.ShowLeaderboardUI ();
}