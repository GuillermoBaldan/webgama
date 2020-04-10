const messagesRef = firebase.database().ref("messages");

//CRUD
function addMessage (data){
  return  messagesRef.push(data)
}

function deleteMessage (id){
  return  messagesRef.child(id).remove()
}

function getMessagesDetails (id){
    //Shows details of the Movie
    messagesRef.child(id).on("value",data => {
        console.log("get messages details:", data.val())
    })
}

function getMessage () {
    messagesRef.on("value",data => {
        console.log("get all messages info:", data.val())
    //It shows all movies
					})
}

function sendMissionaryForm(){
	var missionaryName =  document.getElementById("missionary-name");
	var missionarySurname = document.getElementById("missionary-surname");
	var missionarySkill = document.getElementById("missionary-skill");
	addMessage({type: "candidate", name: missionaryName.value, surname: missionarySurname.value, skill: missionarySkill.value});
	missionaryName.value = "";
	missionarySurname.value = "";
	missionarySkill.value = "";

}



function sendPetition() {
	var petitionRequest =  document.getElementById("petition-text");
	addMessage({type: "petition", message: petitionRequest.value});
	petitionRequest.value = "";
}

function sendTourCompetitor(){
	var formEmail =  document.getElementById("form-email");
	var formPhone = document.getElementById("form-phone");
	addMessage({type: "tour", phone: formPhone.value, email: formEmail.value});
	formPhone.value = "";
	formEmail.value = "";

}

function sendContact(){
	var contactSubject =  document.getElementById("contact-subject");
	var contactEmail = document.getElementById("contact-email");
	addMessage({type: "contact", subject: contactSubject.value, email: contactEmail.value});
	contactEmail.value = "";
	contactSubject.value = "";
}


$(function(){
	$('[data-toggle="tooltip"]').tooltip()
})

