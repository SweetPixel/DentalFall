using UnityEngine;
using System.Collections;
using System;
[RequireComponent(typeof(MeshCollider))]


public class catch_save2 : MonoBehaviour {
	private Vector3 screenpoint;
	int i=7;
	private Vector3 offset;
	bool status = false;
	private float screenx = Screen.width -20;
	
	float height;
	float width;
	DateTime dt = DateTime.Now ;	
	
	// Use this for initialization
	void Start () {
		rigidbody.velocity=Vector3.down*i;
		height = Camera.main.camera.orthographicSize;
		width = height * Screen.width / Screen.height;
	}
	
	// Update is called once per frame
	void Update () {
		if(status)
		if(DateTime.Now > dt){
			
			Application.LoadLevel("awesome");
		}
	}
	void OnMouseDown()
	{
		//status = true;
		screenpoint = Camera.main.WorldToScreenPoint(gameObject.transform.position);
		
		offset = gameObject.transform.position - Camera.main.ScreenToWorldPoint(
			new Vector3(Input.mousePosition.x, Input.mousePosition.y, screenpoint.z));
		if(status){}
		dt = DateTime.Now + TimeSpan.FromSeconds(5);
		//MyDelay(3);
	}
	
	
	void OnMouseDrag()
	{
		if(Input.mousePosition.x < width || Input.mousePosition.x > (-width)){
			Vector3 curScreenPoint = new Vector3(Input.mousePosition.x, Input.mousePosition.y, screenpoint.z);
			
			Vector3 curPosition = Camera.main.ScreenToWorldPoint(curScreenPoint) + offset;
			transform.position = curPosition;
		}
	}
	
	//public static void MyDelay(int seconds)
	
	//{
	
	//DateTime dt = DateTime.Now + TimeSpan.FromSeconds(seconds);
	
	
	//	int i = 0;
	
	//	do { 
	//		Debug.Log(++i);
	//	} while (DateTime.Now < dt);
	//Application.LoadLevel("SaveIt");
	
	//}
}
