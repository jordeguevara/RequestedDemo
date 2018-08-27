  // Initialize Firebase
  var config = {
    //Firebase config here
  };
  firebase.initializeApp(config);

var messageTitle = document.querySelector('.titleArea');

var db = firebase.firestore();
var docRef = db.collection('userInput').doc('title');

{
  docRef.get().then(function(doc){
    if(doc && doc.exists){
      const myData = doc.data();
      console.log(doc.data());
      messageTitle.innerText = myData.tag;
    }
  })
}

function changeTitleArea() {
	let userInput= getUserInput();
	var updatedTitle = messageTitle.innerText =userInput;


  docRef.set({
  tag: updatedTitle
  }).then(function(){
    console.log("Title update saved");
  }).catch(function(err){
    console("Got an error: ",error);
  });

	console.log("title Changed");
 }

function getUserInput(){ // retrive input from field 
	let input = document.getElementById("userInput").value;
	return input;
}

