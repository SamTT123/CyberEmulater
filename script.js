const emails = [
  {
    subject: "Your bank account has been suspended",
    content: "Click this link to verify your credentials and avoid account closure: http://fakebank-login.com",
    isPhishing: true
  },
  {
    subject: "Company Newsletter - April Edition",
    content: "Here's your monthly update on company events and employee highlights.",
    isPhishing: false
  },
  {
    subject: "You've won a $500 gift card!",
    content: "Claim your prize now by entering your details here: http://getfreecash.biz",
    isPhishing: true
  }
];

const emailList = document.getElementById("email-list");
const subject = document.getElementById("email-subject");
const content = document.getElementById("email-content");
const buttons = document.getElementById("buttons");
const feedback = document.getElementById("feedback");

let currentEmailIndex = null;

emails.forEach((email, index) => {
  const li = document.createElement("li");
  li.textContent = email.subject;
  li.onclick = () => {
    currentEmailIndex = index;
    subject.textContent = email.subject;
    content.textContent = email.content;
    feedback.textContent = "";
    buttons.style.display = "block";
  };
  emailList.appendChild(li);
});

function checkAnswer(userSaysPhishing) {
  if (currentEmailIndex === null) return;
  const actual = emails[currentEmailIndex].isPhishing;
  if (userSaysPhishing === actual) {
    feedback.textContent = "✅ Correct! Good eye.";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "❌ Incorrect. Stay alert!";
    feedback.style.color = "red";
  }
}
