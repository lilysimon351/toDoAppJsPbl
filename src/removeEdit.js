export function removeEdit(e){
    let currElem = e.target;
    let inp = document.getElementById('input');
    if(currElem.className == "remove") {
      currElem.parentNode.remove();
    }
    if(currElem.className == "edit") {
      inp.value = currElem.previousElementSibling.previousElementSibling.innerText;
      currElem.className = 'editing';
    }
}