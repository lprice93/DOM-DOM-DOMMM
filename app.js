let btn = document.createElement('button');
let btnText = document.createTextNode('Add Square');
btn.append(btnText);
document.body.append(btn);
btn.style.display = 'block';

let container = document.createElement('container');
document.body.append(container);
let counter = 0;

// add new div to page when button is clicked
btn.addEventListener('click', function () {
    let myDiv = document.createElement('div');
    let hoverText = document.createTextNode(counter);
    container.append(myDiv);

    myDiv.id = counter;
    myDiv.className = 'myDiv';
    myDiv.style.cssFloat = 'left';
    myDiv.style.lineHeight = '100px';
    myDiv.style.margin = '5px';
    myDiv.style.textAlign = 'center';

    counter++;

    myDiv.addEventListener('mouseover', function () {
        myDiv.append(hoverText);
        myDiv.style.color = 'peachpuff';
    });

    // id should disappear when mouse is no longer hovering over square
    myDiv.addEventListener('mouseout', function () {
        hoverText.remove(); // keep what you want to remove on the left bc .remove removes anything to the left of the dot. has to be an element or text node.
    });

    // square should change to random color when clicked
    myDiv.addEventListener('click', function () {
        function getRandomColor() {
            let colors = ['red', 'lightblue', 'lightgreen', 'salmon', 'olive', 'darkcyan', 'pink', 'plum'];
            let randomIndex = Math.floor(Math.random() * colors.length);
            return colors[randomIndex];
        } myDiv.style.backgroundColor = getRandomColor();
    });

    // when double clicked, even square should remove square after it and odd squares should remove squares before it. if none; alert
    myDiv.addEventListener('dblclick', function () {
        if (myDiv.id % 2 === 0) {
            if (myDiv.nextSibling === null) {
                alert('Nothing is there!');
            } else {
                myDiv.nextSibling.remove();
            };
        } else {
            if (myDiv.previousSibling === null) {
                alert('Nothing is there!');
            } else {
                myDiv.previousSibling.remove();
            };
        };
    });
});