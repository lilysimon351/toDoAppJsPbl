import Row from '../Row';
import {Start} from '../GenerateElements';
export default class App {
    constructor() {
        this.items = [];
        this.removeItem = this.removeItem.bind(this);

        this.root = new Start();
        this.root = this.root.html;
        this.toDoInput = this.root.querySelector('#to-do-input');        
        this.addItem = this.root.querySelector('#add-btn');
        this.itemsWrapper = this.root.querySelector('#items-wrapper');
        
        document.querySelector('body').append(this.root);

        this.addItem.addEventListener('click', () => this.addRow());
        this.toDoInput.addEventListener('keydown', (e) => {
            if(e.keyCode == 13) {
                this.addRow();
            }
        });
    }
    addRow() {
        const val = this.toDoInput.value;
        if(val == "") return;
        this.row = new Row(val, this.removeItem);
        this.items.push(this.row);
        this.renderItems();
    }
    removeItem(){
        this.items.forEach((item, index, items) => {
            if(item.isremoved){
                items.splice(index,1);
            }
        })
    }
    renderItems(){
        this.items.forEach((item) => {
            this.itemsWrapper.prepend(item.html);
        })
    }
}