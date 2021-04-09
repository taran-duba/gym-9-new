//<body onload> function
function openPage() {
    //console.log(firebase.database());
    document.getElementById("date").innerHTML = new Date().toDateString();
    document.body.style = "background-color: black";
}
//Auto closing navbar
function closeNav() {
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
}
//Submitting Quote
function submitQuote(error, success) {
    var person = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var comments = document.getElementById("comments").value;
    var submission = {
        name: person,
        email: email,
        phone_number: phone,
        comments: comments
    };
    console.log(submission);
    localStorage.setItem("name", person);
    localStorage.setItem("email", email);
    localStorage.setItem("phone-number", phone);
    localStorage.setItem("comments", comments);
    localStorage.setItem("submission-data", submission);
    var templateParams = {
        name: person,
        email: email,
        owner_email: "tyagiprashant91@gmail.com",
        owner_name: "Prashant Tyagi",
        phone_number: phone,
        comments: comments,
        notes: 'New Quote!'
    };
    emailjs.send('service_ny5vh8w', 'template_8vlwfep', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           alert("Thank you for requesting a quote! We will reach out to you soon.");
        }, function(error) {
           console.log('FAILED...', error);
        });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("comments").value = "";
}
//Submitting review
function submitReview() {
    var reviewer = document.getElementById("reviewer").value;
    var stars = document.getElementById("stars-num").value;
    var review = document.getElementById("review-comment").value;
    var email = document.getElementById("reviewer-email").value;
    var phone_number = document.getElementById("reviewer-number").value;
    var templateParams = {
        name: reviewer,
        email: email,
        phone_number: phone_number,
        stars: stars,
        comments: review,
        owner_email: "tyagiprashant91@gmail.com",
        owner_name: "Prashant Tyagi"
    };
    emailjs.send('service_ny5vh8w', 'template_osujag8', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
           alert("Thank you for submitting a review! We will reach out to you soon.");
        }, function(error) {
           console.log('FAILED...', error);
        });
}
//Speaking Methods
function speakSuccess() {
    var synth = window.speechSynthesis;
    var alert = "The quote has successfully been submitted.";
    var utterThis = new SpeechSynthesisUtterance(alert);
    synth.speak(utterThis);
    console.log("Submitted");
}
function speakFail() {
    var synth = window.speechSynthesis;
    var alert = "There was an error in submitting the quote.";
    var utterThis = new SpeechSynthesisUtterance(alert);
    synth.speak(utterThis);
    console.log("Fail");
}
function speakRedo() {
    var synth = window.speechSynthesis;
    var alert = "Try again.";
    var utterThis = new SpeechSynthesisUtterance(alert);
    synth.speak(utterThis);
    console.log("Retry");
}
//Opening Maps
function openMap1() {
    open('https://g.page/gym9-nehru-nagar?share');
}
function openMap2() {
    open('https://g.page/gym9-lohia-nagar?share');
}
function openMap3() {
    open('https://g.page/gym9gzb?share');
}
//Checking screen width for styling certain components
if (screen.width < 480) {
    document.getElementById("business-hours").style = "text-align: center; float: left; margin-left: 50px;";
    document.getElementById("contact-info").style = "margin-left: 50px;";
} else {
    console.log("Extra style not required");
}