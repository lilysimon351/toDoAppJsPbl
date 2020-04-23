class GenerateElements {
    elem(tag, id, nameClass, text) {
        let elem = document.createElement(tag);
        if(id) elem.id = id;
        if(nameClass) elem.className = nameClass;
        elem.textContent = text;
        return elem;
    };
    field(type, id, nameClass, text) {
        let field = document.createElement('input');
        field.type = type;
        if(id) field.id = id;
        if(nameClass) field.className = nameClass;
        field.setAttribute('value', text);
        return field;
    }
}

export class Start extends GenerateElements {

	get html(){
		this.root = super.elem('div', 'root', '', '');
		this.content = super.elem('div', 'content', '', '');
        this.toDoInput = super.field('text', 'to-do-input', '', 'Write smth');
		this.addItem = super.elem('button', 'add-btn', '', 'Add');
        this.itemsWrapper =  super.elem('div', 'items-wrapper', '', '');

        this.content.append(this.toDoInput, this.addItem);
        this.root.append(this.content, this.itemsWrapper);

		return this.root;
	}

}

export class Item extends GenerateElements {

	get html() {
        this.row = super.elem('div', '', 'row', '');
        this.text = super.elem('span', '', 'text', '');
        this.removeBtn = super.elem('button', '', 'btn-remove', 'Remove');
        this.editBtn = super.elem('button', '', 'btn-edit', 'Edit');
        this.editInput = super.field('text', '', 'edit-input d-none', '');
        this.newEditBtn = super.elem('button', '', 'new-edit-btn d-none', 'Edit');

        this.row.append(this.text, this.removeBtn, this.editBtn, this.editInput, this.newEditBtn);

		return this.row;
	}

}