using UnityEngine;
using System.Collections.Generic;

public class EnemiesDrop : MonoBehaviour {

	public Transform prefab;
	public int numberOfObjects;
	public float recycleOffset;
	public Vector3 startPosition;

	private Vector3 nextPosition;

	private Queue<Transform> objectQueue;

	public Vector3 minSize, maxSize, minGap, maxGap;
	public float minX, maxX;

	// Use this for initialization
	void Start () {
		GameEventManager.GameStart += GameStart;
		GameEventManager.GameOver += GameOver;

		objectQueue = new Queue<Transform>(numberOfObjects);
		for (int i = 0; i < numberOfObjects; i++) {
			objectQueue.Enqueue((Transform)Instantiate(prefab));
		}
		nextPosition = startPosition;
		for (int i = 0; i < numberOfObjects; i++) {
			Recycle();
		}
	}

	// Update is called once per frame
	void Update () {
		if (objectQueue.Peek().localPosition.y + recycleOffset < Padmove.distanceTraveled) {
			Recycle();
		}
	}

	private void Recycle()
	{
		Vector3 scale = new Vector3(
			Random.Range(minSize.x, maxSize.x),
			Random.Range(minSize.y, maxSize.y),
			Random.Range(minSize.z, maxSize.z));

		Vector3 position = nextPosition;
		position.x += scale.x * 0.5f;
		position.y += scale.y * 0.5f;

		Transform o = objectQueue.Dequeue();
		o.localPosition = position;
		objectQueue.Enqueue(o);
		//nextPosition.x += o.localScale.x;
		//nextPosition.y += o.localScale.y;

		nextPosition += new Vector3(
			Random.Range(minGap.x, maxGap.x)+ scale.x,
			Random.Range(minGap.y, maxGap.y) ,
			Random.Range(minGap.z, maxGap.z));
		
		if(nextPosition.x < minX){
			nextPosition.x = minX + maxGap.x;
		}
		else if(nextPosition.x > maxX){
			nextPosition.x = maxX - maxGap.x;
		}

	}

	private void GameStart () {
		enabled = true;
	}
	
	private void GameOver () {
		enabled = false;
	}

}
