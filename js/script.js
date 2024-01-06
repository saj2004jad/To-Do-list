
const themeSwitcherBtn = document.getElementById("theme-switcher");
const bodyTag = document.querySelector("body");
const addBtn = document.getElementById("add-btn");
const todoInput = document.getElementById("addt");
const ul = document.querySelector(".todos");




function main() {
    //them_switcher
    themeSwitcherBtn.addEventListener("click", () => {
        bodyTag.classList.toggle("light");
        const themeImg = themeSwitcherBtn.children[0];
        themeImg.setAttribute("src",

            themeImg.getAttribute("src") === "assets/images/icon-sun.svg"
                ? "assets/images/icon-moon.svg"
                : "assets/images/icon-sun.svg"
        );
    });


    makeTodoElelment(JSON.parse(localStorage.getItem("todos")));
    ul.addEventListener("dragover", (e) => {
        e.preventDefault();
        if (e.target.classList.contains("card") &&
            !e.target.classList.contains("dragging")) {
            const draggingCard = document.querySelector(".dragging");
            const cards = ul.querySelectorAll(".card");

        }

    });








    //Add Todo In LocalStorage
    addBtn.addEventListener("click", () => {
        const item = todoInput.value.trim();
        if (item) {

            todoInput.value = "";
            const todos = !localStorage.getItem("todos")
                ? []
                : JSON.parse(localStorage.getItem("todos",));
            const currentTodo = {
                item: item,
                iscompleted: false
            }

            todos.push(currentTodo);
            localStorage.setItem("todos", JSON.stringify(todos));
        }
    });
}


function makeTodoElelment(todoArray) {
    if (!todoArray) {
        return null;
    }
    todoArray.forEach((todoObject) => {
        //create Html Elements of Todo
        const card = document.createElement("li");
        const cbContainer = document.createElement("div");
        const cbInput = document.createElement("input");
        const checkSpan = document.createElement("span");
        const item = document.createElement("p");
        const clearBtn = document.createElement("button");
        const img = document.createElement("img");


        //َAdd classes
        card.classList.add("card");
        cbContainer.classList.add("cb-container");
        cbInput.classList.add("cb-input");
        checkSpan.classList.add("check");
        item.classList.add("item");
        clearBtn.classList.add("clear");

        //Add Attributes
        card.setAttribute("draggable", true);
        cbInput.setAttribute("type", "checkbox");
        img.setAttribute("src", "assets/images/icon-cross.svg");
        img.setAttribute("alt", "Clear it");
        item.textContent = todoObject.item;
        //َAdd Eventlistener
        card.addEventListener("dragstart", () => {
            card.classList.add("dragging");

        });
        card.addEventListener("dragend", () => {
            card.classList.remove("dragging");
        });


        //Set Element by Parent child
        clearBtn.appendChild(img);
        cbContainer.appendChild(cbInput);
        cbContainer.appendChild(checkSpan);
        card.appendChild(cbContainer);
        card.appendChild(item);
        card.appendChild(clearBtn);


        document.querySelector(".todos").appendChild(card);





    });
}
document.addEventListener('DOMContentLoaded', main);