import {LoginForm} from '../GenerateElements';
export default class Login {
    constructor() {
        this.form = new LoginForm();
        this.form = this.form.html;

        document.querySelector('body').append(this.form);
    }
    get html() {
        return this.form;
    }
} 