using UnityEngine;
using System;
using System.IO;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
public sealed class FacbookScoreShare : MonoBehaviour
{
		public GUIText backText;
		public GUIText scoreText;
		public GameObject back;
		public GameObject scoreShared;
		private bool isInit = false;
		public GUIText currentScore;
		public string AccessToken;
		private Texture2D lastResponseTexture;
		private string lastResponse = "";
		public string ApiQuery = "";
		public int x = 0;


		void Update ()
		{
				if (Input.GetKeyDown (KeyCode.Escape)) {

						Application.LoadLevel ("gameover"); 
				}
				if (x > 0) {
						back.renderer.enabled = true;
						scoreShared.renderer.enabled = true;
						backText.enabled = true;
						scoreText.enabled = true;
						x = 0;
				}
		}

		IEnumerator UploadOnIoS()
		{
			yield return new WaitForEndOfFrame();
			currentScore.alignment = TextAlignment.Center;
			back.renderer.enabled = false;
			scoreShared.renderer.enabled = false;
			backText.enabled = false;
			scoreText.enabled = false;
			int score= PlayerPrefs.GetInt("PlayerScore");
			currentScore.text=score.ToString();
			
			try {
				
				// Create a texture the size of the screen, RGB24 format
				int width = Screen.width;
				int height = Screen.height;
				Texture2D tex = new Texture2D( width, height, TextureFormat.RGB24, false );
				// Read screen contents into the texture
				tex.ReadPixels( new Rect(0, 0, width, height), 0, 0 );
				tex.Apply();
				IOSSocialManager.instance.FacebookPost("I just scored " + score.ToString() + " in  #pixelfallgame", tex);
			}
			catch(UnityException e)
			{
				Debug.Log(e.Message);
			}
	}
	
	void Start ()
	{	
		
		#if UNITY_IPHONE
			StartCoroutine (UploadOnIoS());
		#endif

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
				StartCoroutine (TakeScreenshot ());
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

		private IEnumerator TakeScreenshot ()
		{
		String postmessage = "I just scored " + PlayerPrefs.GetInt("PlayerScore") + " in  #pixelfallgame";
				yield return new WaitForEndOfFrame ();
		
				var width = Screen.width;
				var height = Screen.height;
				var tex = new Texture2D (width, height, TextureFormat.RGB24, false);
				// Read screen contents into the texture
				tex.ReadPixels (new Rect (0, 0, width, height), 0, 0);
				tex.Apply ();
				byte[] screenshot = tex.EncodeToPNG ();
				var wwwForm = new WWWForm ();
				wwwForm.AddBinaryData ("image", screenshot, "InteractiveConsole.png");
		wwwForm.AddField ("message",postmessage);
				FB.API ("me/photos", Facebook.HttpMethod.POST, Callback, wwwForm);
				x = 1;
		}

		void Callback (FBResult result)
		{
				lastResponseTexture = null;
				// Some platforms return the empty string instead of null.
				if (!String.IsNullOrEmpty (result.Error)) {
						lastResponse = "Error Response:\n" + result.Error;
						Debug.Log (lastResponse);
				} else if (!ApiQuery.Contains ("/picture")) {
						lastResponse = "Success Response:\n" + result.Text;
						Debug.Log (lastResponse);
				} else {
						lastResponseTexture = result.Texture;
						lastResponse = "Success Response:\n";
						Debug.Log (lastResponse);
				}
		}

}
