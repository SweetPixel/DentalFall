#pragma strict

function Start () {

}

function FixedUpdate () {
rigidbody.velocity= rigidbody.velocity.normalized*7;
}
