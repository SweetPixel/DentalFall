#pragma strict

import UnityEngine;
#if UNITY_Android
	import GooglePlayGames;
#endif


function Start () {

}

function Update () {

}

function OnMouseDown () {
	Social.ShowLeaderboardUI ();
}