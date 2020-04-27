import {LoginForm} from '../GenerateElements';
export default class Login {
    constructor() {
        this.form = new LoginForm();
    }
    get html() {
        return this.form.html;
    }
} 