const userInput = document.querySelector(".input");
const addButton = document.querySelector(".add");
const notesArea = document.querySelector(".taskList");

addButton.addEventListener("click", () => {
  if (userInput.value === "") {
    alert("please enter valid note");
  } else {
    const notesOuter = document.createElement("div");
    notesOuter.setAttribute("class", "notesOuter");
    notesArea.appendChild(notesOuter);

    const checkBtn = document.createElement("div");
    checkBtn.setAttribute("class", "checked");
    notesOuter.appendChild(checkBtn);

    const notes = document.createElement("p");
    notes.setAttribute("class", "actnote");
    notes.innerText = userInput.value;
    notesOuter.appendChild(notes);

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "deletebtn");
    deleteBtn.innerText = "Delete";
    notesOuter.appendChild(deleteBtn);

    checkBtn.addEventListener("click", () => {
      checkBtn.style.backgroundColor = "#FF8225";
      checkBtn.style.border = "none";
      notes.style.textDecoration = "line-through";
    });

    deleteBtn.addEventListener("click", () => {
      notesOuter.remove();
    });
  }
  userInput.value = "";
});
