using UnityEngine;
using System.Collections;
//[RequireComponent(typeof(MeshCollider))]

public class move : MonoBehaviour {
	private Vector3 screenpoint;
	 int i=7;
	private Vector3 offset;

	float height;
	float width;


	// Use this for initialization
	void Start () {
		GetComponent<Rigidbody>().velocity=Vector3.down*i;
		height = Camera.main.GetComponent<Camera>().orthographicSize;
		width = height * Screen.width / Screen.height;
	}
	

	void OnMouseDown()
	{
		screenpoint = Camera.main.WorldToScreenPoint(gameObject.transform.position);
		
		offset = gameObject.transform.position - Camera.main.ScreenToWorldPoint(
			new Vector3(Input.mousePosition.x, Input.mousePosition.y, screenpoint.z));
			

	}
	
	
	void OnMouseDrag()
	{
		if(Input.touchCount<2){
		if(Input.mousePosition.x > width || Input.mousePosition.x < (-width)){
		Vector3 curScreenPoint = new Vector3(Input.mousePosition.x, Input.mousePosition.y, screenpoint.z);
		
		Vector3 curPosition = Camera.main.ScreenToWorldPoint(curScreenPoint) + offset;
		transform.position = curPosition;
			}}
	}
}
