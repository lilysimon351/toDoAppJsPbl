import './app.css';
import Row from './components/Row';
let root = document.getElementById('root');

let content = document.createElement('div');
let inp = document.createElement('input');
let add = document.createElement('button');
content.id = 'content';
inp.id = 'input';
inp.type = 'text';
add.id = 'add';
add.textContent = 'add';

content.append(inp,add);
root.append(content);

add.addEventListener('click', onTypeEnd);
inp.addEventListener('keydown', function(e){
    if(e.keyCode == 13) {
        onTypeEnd(e);
    }
});

function onTypeEnd() {
    let value = inp.value;
    if(value == "") return;
    let row = new Row(value);
    content.append(row.generateRow());
}