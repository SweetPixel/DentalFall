using UnityEngine;
using System.Collections;

public class GUIManager : MonoBehaviour {

	public GUIText totalMissed, gameOverText;
	private static GUIManager instance;
	// Use this for initialization
	void Start () {
		instance = this;
		GameEventManager.GameStart += GameStart;
		GameEventManager.GameOver += GameOver;
		gameOverText.enabled = false;
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	public static void SetDistance(float distance){
		instance.totalMissed.text = distance.ToString("f0");
	}

	private void GameStart () {
		gameOverText.enabled = false;
		enabled = false;
	}

	private void GameOver () {
		gameOverText.enabled = true;
		enabled = true;
	}

}
