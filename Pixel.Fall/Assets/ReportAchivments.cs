using UnityEngine;
using System.Collections;
using GooglePlayGames;

public class ReportAchivments : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		#if UNITY_ANDROID
		if(PlayerPrefs.GetInt("PlayerScore")>49)
			Social.ReportProgress("CgkIutDH9N0BEAIQAw", 100.0f,null);
		if(PlayerPrefs.GetInt("PlayerScore")>74)
			Social.ReportProgress("CgkIutDH9N0BEAIQBA", 100.0f,null);
		if(PlayerPrefs.GetInt("PlayerScore")>99)
			Social.ReportProgress("CgkIutDH9N0BEAIQBQ", 100.0f,null);
		if(PlayerPrefs.GetInt("PlayerScore")>149)
			Social.ReportProgress("CgkIutDH9N0BEAIQBg", 100.0f,null);
		if(PlayerPrefs.GetInt("PlayerScore")>199)
			Social.ReportProgress("CgkIutDH9N0BEAIQCA", 100.0f,null);
		if(PlayerPrefs.GetInt("Deaths")>99)
			Social.ReportProgress("CgkIutDH9N0BEAIQAg", 100.0f,null);
		#endif
		
		#if UNITY_IPHONE
		if(PlayerPrefs.GetInt("PlayerScore")>49)
			Social.ReportProgress("pfbronze", 100.0f,null);
		if(PlayerPrefs.GetInt("PlayerScore")>74)
			Social.ReportProgress("pfsilver", 100.0f,null);
		if(PlayerPrefs.GetInt("PlayerScore")>99)
			Social.ReportProgress("pfgold", 100.0f,null);
		if(PlayerPrefs.GetInt("PlayerScore")>149)
			Social.ReportProgress("pfplatinum", 100.0f,null);
		if(PlayerPrefs.GetInt("PlayerScore")>199)
			Social.ReportProgress("pfinfinity", 100.0f,null);
		if(PlayerPrefs.GetInt("Deaths")>99)
			Social.ReportProgress("pfdeaths", 100.0f,null);
		#endif

	}
}
