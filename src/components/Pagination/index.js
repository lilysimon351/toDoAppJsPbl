import {Paging} from '../GenerateElements';
import App from '../App';
export default class Pagination {
    constructor(length, perPage, renderItems) {
        this.length = length;
        this.perPage = perPage;
        this.renderItems = renderItems;
        this.paging = this.paging.bind(this);
        this.pages = Math.ceil(this.length/this.perPage);
        this.pagination = new Paging(this.pages).html;
        
        this.pagination.addEventListener('click', this.paging, false)
    }
    paging(e) {
        if(e.target.tagName === "A"){
            let num = e.target.getAttribute('data-page');
            console.log(e.target)
            e.target.classList.add('active');
            this.changePage(num);
        }
    }
    changePage(num){
        this.renderItems(num);
    }
    get html() {
        return this.pagination;
    }
}