export default class Row {
    
    constructor(value) {
        this.value = value;
    }
    generateRow() {
        let idNum = Math.floor( Math.random()*999 ) + 1;

        this.row = this.generateElem('div', 'row-wrapper', `row-${idNum}`, '');
        this.text = this.generateElem('span', 'text', `text-${idNum}`, this.value);
        this.removeBtn = this.generateElem('button', 'btn-remove', `remove-${idNum}`, 'Remove');
        this.editBtn = this.generateElem('button', 'btn-edit', `edit-${idNum}`, 'Edit');
console.log(this.row);

        this.row.append(this.text, this.removeBtn, this.editBtn);
        document.getElementById('input').value = '';

        this.editBtn.addEventListener('click',() => this.addField.call(this));
        this.removeBtn.addEventListener('click', () => this.removeRow(idNum));
        return this.row;
    }
    generateElem(tag, nameClass, id, text){
        let elem = document.createElement(tag);
        elem.classList.add(nameClass);
        elem.id = id;
        elem.textContent = text;
        return elem;
    }
    removeRow(num) {
        document.getElementById(`row-${num}`).remove();
        document.getElementById('input').value = '';
    }
    addField() {
        this.field = document.createElement('input');
        this.field.type = "text";
        this.field.value = this.text.textContent;

        this.newEditBtn = this.generateElem('button', 'btn-edit', `new-edit-${this.num}`, 'Edit');

// ?????
        this.field.addEventListener('keydown', function(e){
            if(e.keyCode == 13) {
                console.log("sth");
            }
        });
// ?????

        this.newEditBtn.addEventListener('click', () => this.editRow.call(this));
        this.displayChange('none');
        
        this.row.append(this.field, this.newEditBtn);
    }
    editRow() {
        this.text.textContent = this.field.value;
        this.field.remove();
        this.newEditBtn.remove();
        this.displayChange('initial');
    }
    displayChange(value){
        this.text.style.display = value;
        this.removeBtn.style.display = value;
        this.editBtn.style.display = value;
    }
}
