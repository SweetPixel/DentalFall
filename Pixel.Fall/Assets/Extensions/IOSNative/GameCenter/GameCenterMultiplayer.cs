////////////////////////////////////////////////////////////////////////////////
//  
// @module IOS Native Plugin for Unity3D 
// @author Osipov Stanislav (Stan's Assets) 
// @support stans.assets@gmail.com 
//
////////////////////////////////////////////////////////////////////////////////



using UnityEngine;
using System.Collections;
using System.Collections.Generic;
#if (UNITY_IPHONE && !UNITY_EDITOR) || SA_DEBUG_MODE
using System.Runtime.InteropServices;
#endif

public class GameCenterMultiplayer : EventDispatcher {

	public const string PLAYER_CONNECTED = "player_connected";
	public const string PLAYER_DISCONNECTED = "player_disconnected";


	public const string MATCH_STARTED = "match_started";


	public const string DATA_RECEIVED = "data_received";
	
	#if (UNITY_IPHONE && !UNITY_EDITOR) || SA_DEBUG_MODE
	[DllImport ("__Internal")]
	private static extern void _findMatch(int minPlayers, int maxPlayers);

	[DllImport ("__Internal")]
	private static extern void _sendDataToAll(string data, int sendType);

	[DllImport ("__Internal")]
	private static extern void _sendDataToPlayers(string data, string players, int sendType);
	

	[DllImport ("__Internal")]
	private static extern void _disconnect();
	#endif



	private static GameCenterMultiplayer _instance;

	private GameCenterMatchData _match;

	//--------------------------------------
	// INITIALIZE
	//--------------------------------------

	public static GameCenterMultiplayer instance {

			get {



			if (_instance == null) {
				_instance = GameObject.FindObjectOfType(typeof(GameCenterMultiplayer)) as GameCenterMultiplayer;
				if (_instance == null) {
					_instance = new GameObject ("GameCenterMultiplayer").AddComponent<GameCenterMultiplayer> ();
				}
			}

			return _instance;

		}

	}

	//--------------------------------------
	//  Pear - To - Pear
	//--------------------------------------


	public void FindMatch(int minPlayers, int maxPlayers) {
		#if (UNITY_IPHONE && !UNITY_EDITOR) || SA_DEBUG_MODE
			_findMatch(minPlayers, maxPlayers);
		#endif
	}

	public void SendDataToAll(byte[] buffer, int sendType) {
		#if (UNITY_IPHONE && !UNITY_EDITOR) || SA_DEBUG_MODE

			string b = "";
			int len = buffer.Length;
			for(int i = 0; i < len; i++) {
				if(i != 0) {
					b += ",";
				}

				b += buffer[i].ToString();
			}

			_sendDataToAll (b, sendType);
		#endif
	}

	public void sendDataToPlayers(byte[] buffer, int sendType, params object[] players) {
		#if (UNITY_IPHONE && !UNITY_EDITOR) || SA_DEBUG_MODE
			string ids = "";
			int len = players.Length;
			for(int i = 0; i < len; i++) {
				if(i != 0) {
					ids += ",";
				}

				ids += players[i];
			}

			string b = "";
			len = buffer.Length;
			for(int i = 0; i < len; i++) {
				if(i != 0) {
					b += ",";
				}

				b += buffer[i].ToString();
			}

			_sendDataToPlayers (b, ids, sendType);
		#endif
	}





	public void disconnect() {
		#if (UNITY_IPHONE && !UNITY_EDITOR) || SA_DEBUG_MODE
			_disconnect();
		#endif
	}


	//--------------------------------------
	// Trun Based
	//--------------------------------------


	/*public void FindTurnBasedMatch(int minPlayers, int maxPlayers) {
		if(Application.platform == RuntimePlatform.IPhonePlayer) {
			_findTBMatch(minPlayers, maxPlayers);
		}
	} */

	//--------------------------------------
	//  GET/SET
	//--------------------------------------


	public GameCenterMatchData match {
		get {
			return _match;
		}
	}


	//--------------------------------------
	//  EVENTS
	//--------------------------------------
	


	private void OnGameCenterPlayerConnected(string playerID) {
		dispatch (PLAYER_CONNECTED, playerID);
	}

	private void OnGameCenterPlayerDisconnected(string playerID) {
		dispatch (PLAYER_DISCONNECTED, playerID);
	}

	private void OnGameCenterMatchStarted(string array) {
		string[] data;
		data = array.Split(IOSNative.DATA_SEPARATOR [0]);


		List<string> ids = new List<string> ();

		foreach(string id in data) {
			if (id != IOSNative.END_OF_LINE) {
				ids.Add (id);
			}
		}

		_match = new GameCenterMatchData (ids);

		dispatch (MATCH_STARTED, _match);
	}

	private void OnMatchDataReceived(string array) {
		string[] data;
		data = array.Split("|" [0]);

		GameCenterDataPackage package = new GameCenterDataPackage (data[0], data [1]);

		dispatch (DATA_RECEIVED, package);
	}

	//--------------------------------------
	//  PRIVATE METHODS
	//--------------------------------------
	
	//--------------------------------------
	//  DESTROY
	//--------------------------------------

}
