import './app.css';
import Nav from './components/Nav';
import {GenerateElements} from './components/GenerateElements';

let genElems = new GenerateElements();
let menubar = genElems.elem('div', 'menu-bar', '','');
let mainContent = genElems.elem('main', 'main-content', '','');

document.querySelector('body').append(menubar, mainContent);

let nav = new Nav(mainContent);

menubar.append(nav.html);
nav.renderLoginPage();