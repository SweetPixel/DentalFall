using UnityEngine;
using System.Collections;

public class gameovershare : MonoBehaviour {
	public string decidelabel,closelabel;
	 
	void Start(){
		#if UNITY_ANDROID
			DialogManager.Instance.SetLabel(decidelabel,null,closelabel);
		#endif
	}
	void OnMouseDown () {
		if (Application.internetReachability != NetworkReachability.NotReachable) {
				
						Application.LoadLevel ("share_ScoreFB");
		} 
		else {
						Debug.Log ("ABC");
		}
//			DialogManager.Instance.ShowSelectDialog("No Internet Connection",(bool result) =>{
//
//			});	
	}
}
