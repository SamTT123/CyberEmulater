const emails = [
  {
    subject: "URGENT: Password Expired",
    content: "Your email password expired. Click here to reset it immediately: http://fake-reset.com",
    isPhishing: true,
    explanation: "Phishing emails often use urgency and fake links to trick users into revealing credentials."
  },
  {
    subject: "Team Lunch Reminder",
    content: "Friendly reminder that the team lunch is on Friday at 12:30 PM in Meeting Room B.",
    isPhishing: false,
    explanation: "This is a normal internal message with no suspicious content or links."
  },
  {
    subject: "Unusual Login Attempt Detected",
    content: "We've detected an unusual login from Russia. If this wasn't you, click here to secure your account.",
    isPhishing: true,
    explanation: "Fake security alerts are common phishing tricks. Check link authenticity before clicking."
  },
  {
    subject: "Invoice for Your Recent Purchase",
    content: "Thank you for your payment. Your invoice is attached.",
    isPhishing: true,
    explanation: "Unexpected attachments are often malware. Always verify the sender."
  },
  {
    subject: "Weekly Project Update",
    content: "All teams have submitted their weekly status reports. Great work everyone!",
    isPhishing: false,
    explanation: "No urgent action or links — just an internal update."
  },
  {
    subject: "Win a Free Phone!",
    content: "You've been selected to win a brand new phone. Click here to claim your prize.",
    isPhishing: true,
    explanation: "Too good to be true? It usually is. This is classic phishing bait."
  }
];

let currentIndex = 0;
let total = 0;
let correct = 0;

const subject = document.getElementById("email-subject");
const content = document.getElementById("email-content");
const feedback = document.getElementById("feedback");
const scoreDisplay = document.getElementById("score");
const modal = document.getElementById("modal");
const learnMoreText = document.getElementById("learn-more-text");
const closeModal = document.getElementById("close-modal");
const nextBtn = document.getElementById("next-btn");

function startSimulation() {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("email-screen").style.display = "block";
  loadEmail();
}

function loadEmail() {
  const email = emails[currentIndex];
  subject.textContent = email.subject;
  content.textContent = email.content;
  feedback.textContent = "";
  nextBtn.style.display = "none";
}

function checkAnswer(userChoice) {
  const email = emails[currentIndex];
  const correctAnswer = email.isPhishing;

  total++;
  if (userChoice === correctAnswer) {
    correct++;
    feedback.textContent = "✅ Correct!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "❌ Incorrect.";
    feedback.style.color = "red";
  }

  scoreDisplay.textContent = `Score: ${correct} correct out of ${total}`;
  learnMoreText.textContent = email.explanation;
  modal.style.display = "block";

  nextBtn.style.display = currentIndex < emails.length - 1 ? "inline-block" : "none";
}

function nextEmail() {
  currentIndex++;
  if (currentIndex < emails.length) {
    loadEmail();
  } else {
    subject.textContent = "Simulation complete!";
    content.textContent = "";
    feedback.textContent = "Well done!";
    document.querySelector(".button-group").style.display = "none";
    nextBtn.style.display = "none";
  }
  modal.style.display = "none";
}

closeModal.onclick = () => {
  modal.style.display = "none";
};
window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
