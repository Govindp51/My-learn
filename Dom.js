// function getTree() {
//   const col = document.getElementById("tree").innerText = "Govind";
//   col.style.backgroundColor = "green";
// }


// const change = document.getElementById("myButton");
// const paragraph = document.getElementById("myPara");

// change.addEventListener("click", () => {
//   // para.style.display="none"
//   paragraph.style.classList.toggles =("hide");
// });

//Insert the Elememt using Dom

const foods = document.getElementById("text-content");

const li = document.createElement("li");
li.textContent="Chilli";
li.className="food-item";

foods.append(li);
foods.prepend(li)
