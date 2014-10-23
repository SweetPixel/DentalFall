using UnityEngine;
using System.Collections;
using GooglePlayGames;

public class ReportAchivments : MonoBehaviour {
	int totalgamesplayed;
		// Use this for initialization
	void Start () {
		totalgamesplayed = PlayerPrefs.GetInt("TotalgamesPlayed");
		totalgamesplayed++;
		PlayerPrefs.SetInt("TotalgamesPlayed", totalgamesplayed);
		if (PlayerPrefs.GetInt("TotalgamesPlayed") >499)
		{
	#if UNITY_ANDROID
			Social.ReportProgress("CgkIutDH9N0BEAIQEQ", 100.0f,null);
	#endif
	#if UNITY_IPHONE
			Social.ReportProgress("pf500games", 100.0f,null);
	#endif
		}
	}

	// Update is called once per frame
	void Update () {


		#if UNITY_ANDROID
		// Report Score to Leaderboard
		Social.ReportScore(PlayerPrefs.GetInt("HighScore"), "CgkIutDH9N0BEAIQAA",null);
		if(PlayerPrefs.GetInt("PlayerScore")>49)
			Social.ReportProgress("CgkIutDH9N0BEAIQAw", 100.0f,null);
		if(PlayerPrefs.GetInt("PlayerScore")>99)
			Social.ReportProgress("CgkIutDH9N0BEAIQBA", 100.0f,null);
		if(PlayerPrefs.GetInt("PlayerScore")>150)
			Social.ReportProgress("CgkIutDH9N0BEAIQBQ", 100.0f,null);
		if(PlayerPrefs.GetInt("PlayerScore")>200)
			Social.ReportProgress("CgkIutDH9N0BEAIQBg", 100.0f,null);
	if(PlayerPrefs.GetInt("PlayerScore")>500)
			Social.ReportProgress("CgkIutDH9N0BEAIQDw", 100.0f,null);
	if(PlayerPrefs.GetInt("PlayerScore")>999)
			Social.ReportProgress("CgkIutDH9N0BEAIQCA", 100.0f,null);
	if(PlayerPrefs.GetInt("Deaths")>99)
			Social.ReportProgress("CgkIutDH9N0BEAIQAg", 100.0f,null);
	if (PlayerPrefs.GetInt("Deaths")>999)
			Social.ReportProgress("CgkIutDH9N0BEAIQEA", 100.0f, null);
		if (PlayerPrefs.GetInt("Ducks")>9)
			Social.ReportProgress("CgkIutDH9N0BEAIQCg", 100.0f, null);
		if (PlayerPrefs.GetInt("Ducks")>99)
			Social.ReportProgress("CgkIutDH9N0BEAIQCw", 100.0f, null);


	

		#endif
		
		#if UNITY_IPHONE
		Social.ReportScore(PlayerPrefs.GetInt("HighScore"), "pfall_leaderboard", null);
		if(PlayerPrefs.GetInt("PlayerScore")>49)
			Social.ReportProgress("pfbronze", 100.0f,null);
		if(PlayerPrefs.GetInt("PlayerScore")>99)
			Social.ReportProgress("pfsilver", 100.0f,null);
		if(PlayerPrefs.GetInt("PlayerScore")>150)
			Social.ReportProgress("pfgold", 100.0f,null);
		if(PlayerPrefs.GetInt("PlayerScore")>200)
			Social.ReportProgress("pfplatinum", 100.0f,null);
		if(PlayerPrefs.GetInt("PlayerScore")>500)
			Social.ReportProgress("pfninjaagility", 100.0f,null);
		if(PlayerPrefs.GetInt("PlayerScore")>999)
			Social.ReportProgress("pfinfinity", 100.0f,null);
		if(PlayerPrefs.GetInt("Deaths")>99)
			Social.ReportProgress("pfdeaths", 100.0f,null);
		if (PlayerPrefs.GetInt("Deaths")>999)
			Social.ReportProgress("pfmilleniumdeaths", 100.0f, null);
		if (PlayerPrefs.GetInt("Ducks")>9)
			Social.ReportProgress("pf10ducks", 100.0f, null);
		if (PlayerPrefs.GetInt("Ducks")>99)
			Social.ReportProgress("pf100ducks", 100.0f, null);
		#endif

	}
}
