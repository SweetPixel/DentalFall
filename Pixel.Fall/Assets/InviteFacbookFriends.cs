using UnityEngine;
using System;
using System.IO;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading;

public class InviteFacbookFriends : MonoBehaviour {
	private bool isInit = false;
	public string AccessToken;
	private Texture2D lastResponseTexture;
	private string lastResponse = "";
	public string ApiQuery = "";
	public string decidelabel,closelabel;
	public string FriendSelectorTitle = "";
	public string FriendSelectorMessage = "Derp";
	public string FriendSelectorFilters = "[\"all\",\"app_users\",\"app_non_users\"]";
	public string FriendSelectorData = "{}";
	public string FriendSelectorExcludeIds = "";
	public string FriendSelectorMax = "";
	private string status = "Ready";
	
	void Start ()

	{	
	}
	void OnMouseDown(){
		#if UNITY_ANDROID
		DialogManager.Instance.SetLabel(decidelabel,null,closelabel);
		#endif
		if (Application.internetReachability != NetworkReachability.NotReachable) {
					#if UNITY_ANDROID
						if (FB.IsLoggedIn && !string.IsNullOrEmpty (FB.AccessToken)) {
								OnLogin (new FBResult ("0"));
						} else {
								if (!isInit) {
										FB.Init (OnInit, OnHideUnity);
										Debug.Log ("fb not inited");
								} else {
										FB.Login ("public_profile,user_friends,email,publish_actions", OnLogin);
								}
						}
					#endif
					#if UNITY_IPHONE
						IOSSocialManager.instance.FacebookPost("I am playing Pixel.Fall. How many pixels can you dodge? http://pixelfallgame.com");
					#endif
			
				} else 
		{

			#if UNITY_IPHONE
			IOSMessage msg = IOSMessage.Create("Error", "No Internet Connection");
			#endif
			#if UNITY_ANDROID
			DialogManager.Instance.ShowSelectDialog("No Internet Connection",(bool result) =>{});	
			#endif


		}
						



	}
	private void OnLogin (FBResult result)
	{
		AccessToken = FB.AccessToken;
		Debug.Log ("Login: " + result.Text + result.Error);
		Debug.Log ("call login: " + FB.UserId);
		
		if (result.Error != null) {   
			Debug.LogError (result.Error);
			return;
		}           
		CallAppRequestAsFriendSelector();
	}
	
	private void OnHideUnity (bool isUnityShown)
	{
		
	}
	
	private void OnInit ()
	{
		Debug.Log ("Fb inited");
		isInit = true;
		FB.Login ("email,publish_actions", OnLogin);
	}
	

	

	private void CallAppRequestAsFriendSelector()
	{
		// If there's a Max Recipients specified, include it
		int? maxRecipients = null;
		if (FriendSelectorMax != "")
		{
			try
			{
				maxRecipients = Int32.Parse(FriendSelectorMax);
			}
			catch (Exception e)
			{
				status = e.Message;
			}
		}
		
		// include the exclude ids
		string[] excludeIds = (FriendSelectorExcludeIds == "") ? null : FriendSelectorExcludeIds.Split(',');
		
		FB.AppRequest(
			FriendSelectorMessage,
			null,
			FriendSelectorFilters,
			excludeIds,
			maxRecipients,
			FriendSelectorData,
			FriendSelectorTitle,
			Callback
			);
	}	
	void Callback(FBResult result)
	{
		lastResponseTexture = null;
		// Some platforms return the empty string instead of null.
		if (!String.IsNullOrEmpty(result.Error))
			lastResponse = "Error Response:\n" + result.Error;
		else if (!ApiQuery.Contains("/picture"))
			lastResponse = "Success Response:\n" + result.Text;
		else
		{
			lastResponseTexture = result.Texture;
			lastResponse = "Success Response:\n";
		}
	}
}
