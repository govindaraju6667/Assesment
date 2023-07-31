let crateNew = document.getElementById("createNew");
let textArea = document.getElementById("text-area");
let saveBtn = document.getElementById("savebtn");
let showOutput = document.getElementById("output");

let array = [],
  temp = 0;

saveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  showOutput.innerHTML = "";
  console.log(saveBtn);
  if (crateNew.value === "" && textArea.value === "") {
    alert("enter some text");
  } else {
    if (saveBtn.innerText === "Save") {
      let objData = { title: crateNew.value, content: textArea.value };
      array.push(objData);
      console.log(array);
    } else {
      array[temp] = { title: crateNew.value, content: textArea.value };
      saveBtn.innerText = "Save";
    }

    for (let val in array) {
      let div = document.createElement("div");
      let para = document.createElement("p");
      para.innerText = array[val].title;
      let editBtn = document.createElement("button");
      editBtn.innerHTML = "Edit";
      let deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = "Delete";

      div.appendChild(para);
      div.appendChild(editBtn);
      div.appendChild(deleteBtn);
      showOutput.appendChild(div);

      crateNew.value = "";
      textArea.value = "";

      editBtn.addEventListener("click", (event) => {
        event.preventDefault();
        crateNew.value = array[val].title;
        textArea.value = array[val].content;
        temp = val;
        saveBtn.innerText = "update";
        showOutput.removeChild(div);
      });

      deleteBtn.addEventListener("click", (event) => {
        event.preventDefault();
        showOutput.removeChild(div);
        delete array[val];
        console.log(array);
      });
    }
  }
});
