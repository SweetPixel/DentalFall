using UnityEngine;
using System.Collections;
[RequireComponent(typeof(MeshCollider))]

public class move : MonoBehaviour {
	private Vector3 screenpoint;
	 int i=7;
	private Vector3 offset;
	private float screenx = Screen.width -20;
	// Use this for initialization
	void Start () {
		rigidbody.velocity=Vector3.down*i;
	}
	
	// Update is called once per frame
	void Update () {
	
	}
	void OnMouseDown()
	{
		screenpoint = Camera.main.WorldToScreenPoint(gameObject.transform.position);
		
		offset = gameObject.transform.position - Camera.main.ScreenToWorldPoint(
			new Vector3(Input.mousePosition.x, Input.mousePosition.y, screenpoint.z));
	}
	
	
	void OnMouseDrag()
	{
		Vector3 curScreenPoint = new Vector3(Input.mousePosition.x, Input.mousePosition.y, screenpoint.z);
		
		Vector3 curPosition = Camera.main.ScreenToWorldPoint(curScreenPoint) + offset;
		transform.position = curPosition;
	}
}
