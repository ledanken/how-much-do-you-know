
let userFeedback =  document.getElementById('myFeedback');
userFeedback.addEventListener('submit', theFeedback);

function theFeedback(event) {
    event.preventDefault();

    let username = myFeedback.elements['givenName'].value;
    let usersurname = myFeedback.elements['surname'].value;
    let usermessage = myFeedback.elements['feedbackMessage'].value;

    let html = `
            <h3>Thank you for your Suggestions and/or Feedback, ${username} ${usersurname}!</h3>
            <p>--- Here's the copy of what you just filled out ---</p>
            <p>Name: ${username}</p>
            <p>Surname: ${usersurname}</p>
            <p>Message: ${usermessage}</p>
            `;

    let replyTotheSentFeedback = document.getElementById('theSentFeedback');
    replyTotheSentFeedback.innerHTML = html;
}