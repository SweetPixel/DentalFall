using UnityEngine;
using System.Collections;

public class gameovershare : MonoBehaviour
{
		public string decidelabel, closelabel;
	 
		void Start ()
		{}

		void OnMouseDown ()
		{
				
		DialogManager.Instance.SetLabel(decidelabel,null,closelabel);
				if (Application.internetReachability != NetworkReachability.NotReachable) 
					{
						Application.LoadLevel ("share_ScoreFB");
					} 
				else 
					{
						#if UNITY_IPHONE
							IOSMessage msg = IOSMessage.Create("Error", "No Internet Connection");
						#endif
						#if UNITY_ANDROID
							DialogManager.Instance.ShowSelectDialog("No Internet Connection",(bool result) =>{});	
						#endif

					}
					
		}
}
