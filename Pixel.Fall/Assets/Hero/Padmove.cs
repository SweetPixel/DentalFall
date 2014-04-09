using UnityEngine;
using System.Collections;

public class Padmove : MonoBehaviour {
	public int speed = 10;

	public float acceleration;
	
	private bool touchingPlatform;

	public static float distanceTraveled;

	public Vector3 MovementVelocity;

	// Use this for initialization
	void Start () {
		touchingPlatform = true;
	}
	
	// Update is called once per frame
	void Update () {
	//Vector3 movement = new Vector3(Input.GetAxis("Horizontal")*speed,0,0);
	//this.transform.Translate(movement * Time.deltaTime);
		transform.Translate(0f, 5f * Time.deltaTime, 0f);
		if(touchingPlatform && Input.GetButtonDown("Horizontal")){
			rigidbody.AddForce(MovementVelocity, ForceMode.VelocityChange);
			touchingPlatform = false;
		}
		distanceTraveled = transform.localPosition.y;
		GUIManager.SetDistance(distanceTraveled);
		onKeyDown();
	}

	void onKeyDown()
	{
		if(Input.GetKeyDown(KeyCode.RightArrow))
		{
			float h = Input.GetAxis( "Horizontal" );
			transform.position += Vector3.right * h * Time.deltaTime * speed;
		}
		else{
			float h = Input.GetAxis( "Horizontal" );
			transform.position += Vector3.left * h * Time.deltaTime * speed;
		}
	}

	void FixedUpdate () {
		if(touchingPlatform){
			rigidbody.AddForce(0f, acceleration, 0f, ForceMode.Acceleration);
		}
	}

	void OnCollisionEnter () {
		touchingPlatform = true;
		GameEventManager.TriggerGameOver();
		enabled = false;
	}
	
	void OnCollisionExit () {
		touchingPlatform = false;
	}

}
