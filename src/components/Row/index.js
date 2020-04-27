import {Item} from '../GenerateElements';
export default class Row {
  constructor(value, removeItem) {
    this.value = value;
    this.isremoved = false;
    this.removeItem = removeItem;
    
    const row = new Item();
    this.row = row.html;
    this.text = this.row.querySelector('.text');
    this.removeBtn = this.row.querySelector('.btn-remove');
    this.editBtn = this.row.querySelector('.btn-edit');
    this.field = this.row.querySelector('.edit-input');
    this.newEditBtn = this.row.querySelector('.new-edit-btn');
    this.text.textContent = value;
    this.field.setAttribute('value', value);
    
    document.getElementById("to-do-input").value = "";

    this.removeBtn.addEventListener("click", () => this.removeRow());
    this.editBtn.addEventListener("click", () => this.displayChange());

    this.newEditBtn.addEventListener("click", () => this.editRow());
    this.field.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        this.editRow();
      }
    });
  }

  removeRow() {
    this.isremoved = true;
    this.row.remove();
    this.removeItem();
  }
  editRow() {
    if(this.field.value !== ""){
      this.text.textContent = this.field.value;
    }
    this.displayChange();
  }
  displayChange() {
    const children = this.row.children;
    const count = children.length;
    const displayClass = 'd-none';
    for (let i = 0; i < count; i++) {
      if(children[i].classList.contains(displayClass)) children[i].classList.remove(displayClass)
      else children[i].classList.add(displayClass)
    }
  }
  get html() {
    return this.row;
  }
}
