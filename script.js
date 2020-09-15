let doList = document.querySelector('.whatToDo__items'),
    doneList = document.querySelector('.done__items'),
    btn = document.querySelector('.sub');


function deleteItem(item) {
    let doppel = item;
    item.remove();

    doppel.className = 'done__item';
    doneList.appendChild(doppel);
}
function addDoItem(text) {
    let doItem = document.createElement('div');
    doItem.className = "whatToDo__item";
    doItem.textContent = text;
    doList.appendChild(doItem);
    doItem.addEventListener('click', () => deleteItem(doItem), { once: true });
}
btn.addEventListener('click', function (event) {
    event.preventDefault();
    let inp = document.querySelector('.input');
    addDoItem(inp.value);
    inp.value = '';

});



