﻿using UnityEngine;
using System.Collections;
using GooglePlayGames;
using UnityEngine.SocialPlatforms;

public class PFGooglePlay : MonoBehaviour {

	// Use this for initialization
	void Start () {

		if (GoogleAnalytics.instance) {
			GoogleAnalytics.instance.LogScreen("1st Splash Screen");		
		}
		#if UNITY_ANDROID
			PlayGamesPlatform.DebugLogEnabled = true;
			PlayGamesPlatform.Activate();
		#endif

//		Social.localUser.Authenticate (ProcessAuthentication);
		Social.Active.localUser.Authenticate (ProcessAuthentication);
	}
	void ProcessAuthentication (bool success) {
		if (success) {

			UnityEngine.SocialPlatforms.GameCenter.GameCenterPlatform.ShowDefaultAchievementCompletionBanner(true);
			GoogleAnalytics.instance.LogScreen("Authenticated!");	
			Debug.Log ("Authenticated, checking achievements");
		}
		else
			Debug.Log ("Failed to authenticate");
	}
	// Update is called once per frame
	void Update () {
	
	}
}
