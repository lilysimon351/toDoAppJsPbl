export function onTypeEnd(e){
    
    var count = 0;
    let inp = document.getElementById('input');
    let value = inp.value; 
    if( value ){
        let editing = document.querySelectorAll('.editing')[0];
        if (editing) {
            editing.previousElementSibling.previousElementSibling.innerText = inp.value;
        } else {
            count++;  
            createElement(count, value);
        }
        inp.value = "";
    }
}

function createElement(count, value) {
    let newElem = document.createElement("div");
    newElem.innerHTML = `<span id="copyText-${count}" class="copyText"></span><button class="remove">remove</button><button class="edit">edit</button>`;   
    document.querySelector('#content').append(newElem);
    document.querySelector(`#copyText-${count}`).innerText = value;
}