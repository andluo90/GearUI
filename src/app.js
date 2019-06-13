import Vue from 'vue'

import Button from './components/button'
import ButtonGroup from './components/button-group'
import Input from './components/input'

Vue.component('g-button',Button);
Vue.component('g-button-group',ButtonGroup);
Vue.component('g-input',Input);

new Vue({
    el:"#app",
    data:{
        title:"Hello Vue "
    }
});