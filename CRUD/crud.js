let input = document.querySelector(".typeOfWork"); //input tag
let btn = document.querySelector(".btn");
let ul = document.querySelector("#CRUD > ul");

function del(e) {
    let current = e.currentTarget;
    let parent = current.parentNode;
    parent.parentNode.remove();
}

function EdittingFunc(e) {
    let parent = e.currentTarget.parentNode.parentNode;
    let oldElement = parent.querySelector("p");
    //button and input
    let divForEdit = document.createElement("div");
    divForEdit.innerHTML = `<input type="text" placeholder="Enter name "></input> <button class="Remove">Enter</button> <button class="Remove" id="close">Close</button>`
    let btn = divForEdit.querySelector("button");
    
    //replacing div with name    
    parent.replaceChild(divForEdit, oldElement);
    let closeBtn = divForEdit.querySelector("#close");
    console.log(closeBtn);
    closeBtn.addEventListener('click', () => {
        parent.replaceChild(oldElement, divForEdit);
    })
    btn.style.marginLeft = "15px";
    btn.addEventListener("click", editName => {
        let oldElement = parent.querySelector("div");
        let input = oldElement.querySelector("input");

        let pTag = document.createElement("p");
        pTag.textContent = input.value;
        let test=parent.querySelector(".edit");

        if (input.value == "") {
            alert("Please Enter value");
        }
        else {
            parent.replaceChild(pTag, oldElement);
           
        }
    })
}
function add() {

    let text = input.value;
    
    if (input.value == undefined || input.value == "") {
        alert("Please Enter a value");
    }
    else {
        //buttons in li's
        let remove = document.createElement("button");
        let edit = document.createElement("button");
        remove.textContent = "Remove";
        edit.textContent = "Edit";
        remove.setAttribute("class", "Remove");
        edit.setAttribute("class", "Remove");
        edit.classList.add(".edit")
        edit.style.backgroundColor = "blue";




        //EventListeners
        remove.addEventListener('click', del);
        edit.addEventListener("click", EdittingFunc);

        //adding li
        let li = document.createElement("li");
        let liSpan = document.createElement("p");
        liSpan.textContent = text;





        //appending part
        let btnSpan = document.createElement("span");
        btnSpan.appendChild(remove);
        btnSpan.appendChild(edit);
        li.appendChild(liSpan);
        ul.appendChild(li);
        li.appendChild(btnSpan);

        input.value = "";
    }
}
btn.addEventListener("click", add);













