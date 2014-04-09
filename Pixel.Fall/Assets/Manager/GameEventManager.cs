using UnityEngine;
using System.Collections;

public class GameEventManager {

	public delegate void GameEvent();

	public static event GameEvent GameOver, GameStart;

	public static void TriggerGameStart()
	{
		if(GameStart != null)
		{
			GameStart();
		}
	}

	public static void TriggerGameOver()
	{
		if(GameOver != null)
		{
			GameOver();
		}
	}

}
