import {NavElem} from '../GenerateElements';
import App from '../App';
import Login from '../Login';
export default class Nav {
    constructor(mainContent) {
        this.mainContent = mainContent;
        this.nav = new NavElem();
        this.nav = this.nav.html;
        this.loginPage = this.nav.querySelector('#login-page');
        this.appPage = this.nav.querySelector('#app-page');
        
        this.loginPage.addEventListener('click', () => this.renderLoginPage());
        this.appPage.addEventListener('click', () => this.renderAppPage());
    }
    renderLoginPage() {
        const login = new Login();
        this.mainContent.innerHTML = '';
        this.mainContent.append(login.html);    
    }
    renderAppPage() {
        //const app = new App(3);
        this.mainContent.innerHTML = '';
        this.mainContent.append(new App(3).html);
    }
    get html(){
        return this.nav;
    }
} 