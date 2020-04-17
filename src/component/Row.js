export default class Row {
    
    row = document.createElement('div');
    text = document.createElement('span');
    removeBtn = document.createElement('button');
    editBtn = document.createElement('button');

    constructor(value) {
        this.value = value;
    }
    generateRow() {
       
        let idNum = Math.floor( Math.random()*999 ) + 1;
        
        this.row.classList.add('row-wrapper');
        this.row.id = `row-${idNum}`;

        this.text.classList.add('text');
        this.text.id = `text-${idNum}`;
        this.text.textContent = this.value;

        this.removeBtn.classList.add('btn-remove');
        this.removeBtn.id = `remove-${idNum}`;
        this.removeBtn.textContent = 'Remove';

        this.editBtn.classList.add('btn-edit');
        this.editBtn.id = `edit-${idNum}`;
        this.editBtn.textContent = 'Edit';

        this.row.append(this.text, this.removeBtn, this.editBtn);
        document.getElementById('input').value = '';

        this.editBtn.addEventListener('click',() => this.addField.call(this));
        this.removeBtn.addEventListener('click', () => this.removeRow(idNum));
        return this.row;
    }   
    removeRow(num) {
        document.getElementById(`row-${num}`).remove();
        document.getElementById('input').value = '';
    }
    addField() {
        this.field = document.createElement('input');
        this.field.type = "text";
        this.field.value = this.text.textContent;
        
        this.newEditBtn = document.createElement('button');
        this.newEditBtn.classList.add('btn-edit');
        this.newEditBtn.id = `new-edit-${this.num}`;
        this.newEditBtn.textContent = 'Edit';

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
