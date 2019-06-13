import Vue from 'vue'

import Button from './components/button'
import ButtonGroup from './components/button-group'
import Input from './components/input'
import Toast from './components/toast'

import Plugin from './components/plugin'

Vue.component('g-button',Button);
Vue.component('g-button-group',ButtonGroup);
Vue.component('g-input',Input);
Vue.component('g-toast',Toast);

Vue.use(Plugin);

const app = new Vue({
    el:"#app",
    data:{
        title:"Hello Vue "
    }

});