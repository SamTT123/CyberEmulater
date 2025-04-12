const emails = [
  {
    subject: "Your bank account has been suspended",
    content: "Click this link to verify your credentials and avoid account closure: http://fakebank-login.com",
    isPhishing: true,
    explanation: "Legitimate banks will never ask you to verify personal details via a link. This is classic phishing."
  },
  {
    subject: "Company Newsletter - April Edition",
    content: "Here's your monthly update on company events and employee highlights.",
    isPhishing: false,
    explanation: "This is a typical internal company communication with no suspicious links or requests."
  },
  {
    subject: "You've won a $500 gift card!",
    content: "Claim your prize now by entering your details here: http://getfreecash.biz",
    isPhishing: true,
    explanation: "Unexpected prizes and urgent call-to-action links are strong phishing signals."
  }
];

let currentEmailIndex = null;
let totalAnswers = 0;
let correctAnswers = 0;

const emailList = document.getElementById("email-list");
const subject = document.getElementById("email-subject");
const content = document.getElementById("email-content");
const buttons = document.getElementById("buttons");
const feedback = document.getElementById("feedback");
const scoreDisplay = document.getElementById("score");
const modal = document.getElementById("modal");
const learnMoreText = document.getElementById("learn-more-text");
const closeModal = document.getElementById("close-modal");

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
  const email = emails[currentEmailIndex];
  const actual = email.isPhishing;

  totalAnswers++;
  if (userSaysPhishing === actual) {
    correctAnswers++;
    feedback.textContent = "✅ Correct! Good eye.";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "❌ Incorrect. Stay alert!";
    feedback.style.color = "red";
  }

  scoreDisplay.textContent = `Score: ${correctAnswers} correct out of ${totalAnswers}`;

  // Show learn more modal
  learnMoreText.textContent = email.explanation;
  modal.style.display = "block";
}

// Close modal
closeModal.onclick = () => {
  modal.style.display = "none";
};
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
