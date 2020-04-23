import {Item} from '../GenerateElements';
export default class Row {
  constructor(value) {
    this.value = value;
    this.row = new Item();
    this.row = this.row.html;
    this.text = this.row.querySelector('.text');
    this.removeBtn = this.row.querySelector('.btn-remove');
    this.editBtn = this.row.querySelector('.btn-edit');
    this.field = this.row.querySelector('.edit-input');
    this.newEditBtn = this.row.querySelector('.new-edit-btn');
    this.text.textContent = value;
    this.field.setAttribute('value', value);
  }
  init() {
    document.getElementById("to-do-input").value = "";

    this.removeBtn.addEventListener("click", () => this.removeRow());
    this.editBtn.addEventListener("click", () => this.displayChange());

    this.newEditBtn.addEventListener("click", () => this.editRow());
    this.field.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        this.editRow();
      }
    });
    return this.row;
  }

  removeRow() {
    this.row.remove();
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
}
