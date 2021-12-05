const table = document.querySelector('.elements').children[0];
let idCount = 0;

function addElement() {
    let element = document.createElement('tr');
    element.id = ++idCount;
    element.innerHTML = `
    <td><input type="text" class="text"></td>
    <td><input type="number" class="number"></td>
    <td><button onclick="moveUp(this)">&#8593;</button></td>
    <td><button onclick="moveDown(this)">&#8595;</button></td>
    <td><button onclick="removeElement(this)">&#10005;</button></td>
  `;
    table.appendChild(element);
}

function moveUp(e) {
    e = e.parentNode.parentNode;
    const prev = e.previousSibling;
    if (prev) {
        table.removeChild(e);
        table.insertBefore(e, prev);
    }
}

function moveDown(e) {
    e = e.parentNode.parentNode;
    table.removeChild(e);
    table.insertBefore(e, e.nextSibling.nextSibling);
}

function removeElement(e) {
    table.removeChild(e.parentNode.parentNode);
}

function saveElements() {
    let elements = {};
    let resultBox = document.querySelector(".result");
    let text;
    let number;

    for (let e of table.children) {
        text = e.querySelector(".text").value;
        number = e.querySelector(".number").value;
        if (text && number) {
            elements[text] = number;
        }
    }
    console.log(elements);
    resultBox.textContent = JSON.stringify(elements);
}