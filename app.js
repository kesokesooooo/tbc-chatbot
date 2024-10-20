
const qaPairs = [
  { question: "გამარჯობა", answer: "გამარჯობა! რით შემიძლია დაგეხმაროთ?" },
  { question: "სალამი", answer: "გამარჯობა! რით შემიძლია დაგეხმაროთ?" },

  {
    question: " შემიძლია პირდაპირი დეპოზიტის დაყენება?  ",
    answer:
      "დიახ, შეგიძლიათ დააყენოთ პირდაპირი დეპოზიტი დამსაქმებელს მიაწოდოთ თქვენი ანგარიშის ნომერი და მარშრუტირების ნომერი, რომლებიც ნაპოვნია აპში ანგარიშის ინფორმაციაში. ",
  },
  {
    question: "რა არის საპროცენტო განაკვეთები ჩემს ანგარიშზე? ",
    answer:
      "შეგიძლიათ ნახოთ თქვენი  ანგარიშის მიმდინარე საპროცენტო განაკვეთები ანგარიშის დეტალებში ან აპლიკაციის დაზოგვის განყოფილებაში.",
  },
  {
    question: "როგორ შემიძლია ჩავრიცხო ფული ჩემს ანგარიშზე? ",
    answer:
      "იმისათვის რომ მობლურზე სჰეავსოტ ანგარისი,  უნდა დააჭიროთ ტელეფონის პატარა სურათ რომელიზ ბარათის ქვეშ ხატია . შემდგომ აკრიფოთ თქვენი ნომერი და სასურველი რაოდენობის ფული მითითოთ, არჩევის შემდეგ დააწვებიტ დასრულებას დარამოდენიმე წუთში გაგიქატიურდებათ 🙂 ",
  },
  {
    question: "როგორ შევცვალო ჩემი ანგარიშის პარამეტრები?  ",
    answer:
      "თქვენი ანგარიშის პარამეტრების შესაცვლელად გადადით აპში „პარამეტრები“, სადაც შეგიძლიათ განაახლოთ თქვენი პირადი ინფორმაცია, შეტყობინებები და პრეფერენციები. ",
  },

  { question: "ნახვამდის", answer: "ნახვამდის 🙂" },
  { question: "კარგად", answer: "შეხვედრამდე 🙂" },
];

function toggleChat() {
  const chatContainer = document.getElementById("chatContainer");
  chatContainer.style.display =
    chatContainer.style.display === "none" || chatContainer.style.display === ""
      ? "flex"
      : "none";
}

function getResponse(userMessage) {
  const normalizedMessage = userMessage.trim().toLowerCase();
  for (let pair of qaPairs) {
    if (normalizedMessage.includes(pair.question.trim().toLowerCase())) {
      return pair.answer;
    }
  }
  return "კითხვა გაიმეორეთ, რობოტმა ვერ წაიკითხა თქვენი მოთხოვნილება";
}

function appendMessage(sender, message) {
  const chatbox = document.getElementById("chatbox");
  const messageElement = document.createElement("div");
  messageElement.className = sender === "user" ? "user-message" : "bot-message";
  messageElement.textContent = message;
  chatbox.appendChild(messageElement);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function sendMessage() {
  const userInput = document.getElementById("userInput");
  const userMessage = userInput.value.trim();

  if (userMessage) {
    appendMessage("user", userMessage);
    const botResponse = getResponse(userMessage);
    appendMessage("bot", botResponse);
    userInput.value = "";
  }
}