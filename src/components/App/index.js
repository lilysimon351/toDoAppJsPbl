import Row from '../Row';
import {Start} from '../GenerateElements';
import Pagination from '../Pagination';
export default class App {
    constructor(perPage) {
        this.perPage = perPage;
        this.items = [];
        this.removeItem = this.removeItem.bind(this);
        this.renderItems = this.renderItems.bind(this);

        const root = new Start();
        this.root = root.html;
        this.toDoInput = this.root.querySelector('#to-do-input');        
        this.addItem = this.root.querySelector('#add-btn');
        this.itemsWrapper = this.root.querySelector('#items-wrapper');

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
        this.items.unshift(this.row);
        this.renderItems();
    }
    removeItem(){
        this.items.forEach((item, index, items) => {
            if(item.isremoved){
                items.splice(index,1);
            }
        })
    }
    renderItems(num = 1){
        const length = this.items.length;
        const perPage = this.perPage;
        if( length <= perPage ){
            this.items.forEach((item) => {
                this.itemsWrapper.append(item.html);
            });
        } else {
            this.itemsWrapper.innerHTML = '';
            this.items.slice((num-1)*perPage,num*perPage).forEach((item) => {
                this.itemsWrapper.append(item.html);
            });
            const paginationHtml = new Pagination(length, perPage, this.renderItems).html;
            
            this.itemsWrapper.append(paginationHtml);
        } 

    }
    get html() {
        return this.root;
    }
}