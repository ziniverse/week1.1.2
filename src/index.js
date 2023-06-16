if (document.readyState !== "loading") {
  console.log("Document is ready!");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready after waiting!");
    initializeCode();
  });
}

function initializeCode() {
  const addNoteButton = document.getElementById("add-data");
  const button = document.getElementById("my-button");
  const heading = document.querySelector("h1");
  const notes = document.getElementById("notes");
  const ul = document.createElement("ul");

  button.addEventListener("click", function () {
    console.log("hello world");
    heading.textContent = "My notebook";
  });

  addNoteButton.addEventListener("click", function () {
    const input = document.getElementById("message");
    const inputValue = input.value.trim();

    if (inputValue !== "") {
      const li = document.createElement("li");
      li.innerText = inputValue;
      ul.appendChild(li);
      input.value = "";
    }
  });

  notes.appendChild(ul);
}
