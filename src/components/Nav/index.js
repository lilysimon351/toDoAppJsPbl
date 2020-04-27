import {NavElem} from '../GenerateElements';
import App from '../App';
import Login from '../Login';
export default class Nav {
    constructor() {
        this.nav = new NavElem();
        this.nav = this.nav.html;
        this.loginPage = this.nav.querySelector('#login-page');
        this.appPage = this.nav.querySelector('#app-page');

        document.querySelector('body').prepend(this.nav);
        
        this.loginPage.addEventListener('click', this.renderLoginPage);
        this.appPage.addEventListener('click', this.renderAppPage);
    }
    renderLoginPage() {
        const login = new Login();
    }
    renderAppPage() {
        const app = new App();
    }
    get html(){
        return this.nav;
    }
} 