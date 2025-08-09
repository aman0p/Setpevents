function addTodo(){
    const inputEl = document.querySelector("input");
    const value = inputEl.value;

    const newDivEl= document.createElementr("div");
    newDivEl.innerHTML = value;

    document.querySelector("body").appendChild(newDivEl);
}
