import Row from './components/Row';
import {Start} from './components/GenerateElements';
export class App {
    constructor() {
        this.items = [];
        this.root = new Start();
        this.root = this.root.html;
        this.toDoInput = this.root.querySelector('#to-do-input');        
        this.addItem = this.root.querySelector('#add-btn');
        this.itemsWrapper = this.root.querySelector('#items-wrapper');
    }
    init() {
        document.querySelector('body').append(this.root);

        this.addItem.addEventListener('click', () => this.addRow.call(this));
        this.toDoInput.addEventListener('keydown', (e) => {
            if(e.keyCode == 13) {
                this.addRow();
            }
        });
    }
    addRow() {
        const val = this.toDoInput.value;
        if(val == "") return;
        this.row = new Row(val);
        this.row = this.row.init();
        this.itemsWrapper.prepend(this.row);
    }
}