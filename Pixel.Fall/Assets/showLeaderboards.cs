using UnityEngine;
using System.Collections;

public class showLeaderboards : MonoBehaviour {
	public string decidelabel, closelabel;


	void OnMouseDown()
	{
		
		#if UNITY_IPHONE
		Social.ShowLeaderboardUI ();
		#endif
		#if UNITY_ANDROID
		DialogManager.Instance.SetLabel(decidelabel,null,closelabel);
		if (Application.internetReachability != NetworkReachability.NotReachable) 
		{
			Social.ShowAchievementsUI();
		} 
		else 
		{
			DialogManager.Instance.ShowSelectDialog("No Internet Connection",(bool result) =>{});	
		}
		#endif
	}
}
