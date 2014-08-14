using UnityEngine;
using System.Collections;

public class gameovershare : MonoBehaviour {
	public string decidelabel,closelabel;
	void Start(){



	}
	void OnMouseDown () {
		DialogManager.Instance.SetLabel(decidelabel,null,closelabel);
		if(Application.internetReachability!= NetworkReachability.NotReachable)
			Application.LoadLevel("share_ScoreFB");
		else
			DialogManager.Instance.ShowSelectDialog("No Internet Connection",(bool result) =>{

			});	
	}
}
