let selectedBook = null;

function selectBook(bookName) {
  selectedBook = bookName;
  document.querySelectorAll('.book').forEach(div => div.classList.remove('selected'));
  const selectedDiv = Array.from(document.querySelectorAll('.book')).find(div =>
    div.innerHTML.includes(bookName)
  );
  if (selectedDiv) selectedDiv.classList.add('selected');
}

function submitAnswer() {
  if (!selectedBook) {
    document.getElementById('feedback').textContent = "Please select a book first.";
    return;
  }
  document.getElementById('feedback').textContent = `Answer submitted: ${selectedBook}`;
  console.log("Submitted:", selectedBook);
}