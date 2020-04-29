export class GenerateElements {
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
		this.root = super.elem('div', 'app', '', '');
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

export class LoginForm extends GenerateElements {

	get html() {
        this.form = super.elem('form', 'login-form', '', '');
        this.login = super.field('text', 'input-login', 'form-input', 'username');
        this.pass = super.field('password', 'input-pass', 'form-input', 'pass');
        this.submit = super.elem('button', 'login-submit', 'form-submit', 'Login');

        this.form.append(this.login, this.pass, this.submit);

		return this.form;
	}

}

export class NavElem extends GenerateElements {

	get html() {
        this.navbar = super.elem('nav', 'navbar', '', '');
        this.login = super.elem('a', 'login-page', 'navbar__item', 'Login');
        this.app = super.elem('a', 'app-page', 'navbar__item', 'ToDO App');
        this.login.href = '#login';
        this.app.href = '#app';

        this.navbar.append(this.login, this.app);

		return this.navbar;
	}

}

export class Paging extends GenerateElements {
    constructor(pages){
        super();
        this.pages = pages;
    }

	get html() {
        this.nav = super.elem('nav', 'pagination-wrapper', '', '');
        this.ul = super.elem('ul', 'pagination', 'pagination', '');
        for (let i=1; i <= this.pages; i++) {
            this.li = super.elem('li', '', 'page-item', '');
            this.link = super.elem('a', '', 'page-link', i);
            this.link.href = `#page-${i}`;
            this.link.setAttribute('data-page', i);
            this.li.append(this.link);
            this.ul.append(this.li);
        }
        this.nav.append(this.ul);
		return this.nav;
	}
}