const quotes = [
  { text: "She opened the door and the world changed.", book: "book1.jpg" },
  { text: "The stars whispered secrets only she could hear.", book: "book2.jpg" },
  { text: "He never expected the map to lead to himself.", book: "book3.jpg" },
  { text: "In the silence, she found her voice.", book: "book4.jpg" }
];

let currentRound = 0;

function startRound() {
  document.getElementById("book-cover").classList.add("hidden");
  const quote = quotes[currentRound];
  document.getElementById("quote-display").textContent = quote.text;
}

function revealAnswer() {
  const quote = quotes[currentRound];
  document.getElementById("cover-img").src = quote.book;
  document.getElementById("book-cover").classList.remove("hidden");
}

function nextQuote() {
  currentRound++;
  if (currentRound >= quotes.length) {
    document.getElementById("quote-display").textContent = "Competition Complete!";
    document.getElementById("book-cover").classList.add("hidden");
  } else {
    document.getElementById("round-number").textContent = currentRound + 1;
    startRound();
  }
}