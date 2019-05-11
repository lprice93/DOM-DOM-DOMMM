let btn = document.createElement('button');
let btnText = document.createTextNode('Add Square');
btn.append(btnText);
document.body.append(btn);
btn.style.display = 'block';

// let container = 0;
let counter = 0;

btn.addEventListener('click', function () {
    let myDiv = document.createElement('div');

    document.body.append(myDiv);
    myDiv.className = 'myDiv';
    myDiv.style.cssFloat = 'left';
    myDiv.style.lineHeight = '100px';
    myDiv.style.margin = '5px';
    myDiv.id = counter;
    let hoverText = document.createTextNode(counter)
    counter++;
    myDiv.style.textAlign = 'center';
    myDiv.addEventListener('mouseover', function () {
        myDiv.append(hoverText);
        myDiv.style.color = 'peachpuff';
    });

    myDiv.addEventListener('mouseout', function () {
        hoverText.remove(); // keep what you want to remove on the left bc .remove removes anything to the left of the dot. has to be an element or text node.
        // myDiv.style.color = 'black';
    });

    myDiv.addEventListener('click', function () {
        function getRandomColor() {
            let colors = ['red', 'lightblue', 'lightgreen', 'salmon', 'olive', 'darkcyan', 'pink', 'plum'];
            let randomIndex = Math.floor(Math.random() * colors.length);
            return colors[randomIndex];
        }
        myDiv.style.backgroundColor = getRandomColor();
        // console.log(getRandomColor());
    });

    myDiv.addEventListener('dblclick', function () {
        // console.log(myDiv.id % 2 === 0);
        if (myDiv.id % 2 === 0) {
            if (myDiv.nextSibling === null) {
               alert('Nothing is there!');
                // if there isn't a sibling, alert there is none
            } else {
                // if there is a sibling, remove it.
                myDiv.nextSibling.remove();
            };
            // console.log(myDiv.nextSibling);
        } else {
            if (myDiv.previousSibling === null) {
                alert('Nothing is there!');
             } else {
                 myDiv.previousSibling.remove();
             };
        };
    });
});

// remember to check developer tools > elements tab to make sure it is working.