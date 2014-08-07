using UnityEngine;
using System.Collections;

public class share_scoreScene : MonoBehaviour {

	public GUIText currentScore;

	// Use this for initialization
	void Start () {
		int score=PlayerPrefs.GetInt("PlayerScore");
		currentScore.text=score.ToString();
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
