window.onload = function() {

    let selectedColor = 'red';
    let color = false;

    let cpicker = this.document.getElementById("colorpicker")

    let colorChoices = ['red', 'orange', 'yellow', 'green', 'cyan'];
    for(let color of colorChoices) {
        let box = document.createElement('span');
        box.style.border = '1px solid black';
        box.style.backgroundColor = color;
        cpicker.appendChild(box);
    }

    let box = document.createElement('input');
    box.id = 'picker';
    box.type = 'color';
    box.value = '#e66466';
    box.style.border = '1px solid black';
    cpicker.appendChild(box);

    let canvas = this.document.getElementById("canvas")

    for(let i=0; i<100; i++) {
        let box = document.createElement('span');
        box.style.border = '1px solid black';
        box.style.backgroundColor = 'blue';
        canvas.appendChild(box);
    }

    const spans = document.querySelectorAll('span')
    spans.forEach(function(span){
        // span.onclick = changeColor;
        span.addEventListener("mousedown",startcolor);
        span.addEventListener("mousemove",continuecolor);
        span.addEventListener("mouseup",stopcolor);
    })

    this.document.getElementById('picker').addEventListener("change",changeColor)

    function changeColor(event) {
        // console.log("onclick triggered")
        console.log(event)
        // console.log(event.target.id)
        if ((event.target.parentElement.id == "canvas") && 
            (event.target.style.backgroundColor != selectedColor)) {
            event.target.style.backgroundColor = selectedColor;    
        }
        else if (event.target.id == "picker") {
            selectedColor = event.target.value;
            console.log("selectedColor " + selectedColor)
        }
        else if (event.path[1].id == "colorpicker") {
            selectedColor = event.target.style.backgroundColor;
        }
    }

    function startcolor(event) {
        console.log("Mouse down fired");
        color = true;
        changeColor(event);
    }

    function continuecolor(event) {
        if (color){
            console.log("Mouse move fired");
            changeColor(event);    
        }
    }

    function stopcolor(event) {
        console.log("Mouse up fired");
        color = false;
    }

}