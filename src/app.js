import Vue from 'vue'

import Button from './components/button'
import ButtonGroup from './components/button-group'

Vue.component('g-button',Button);
Vue.component('g-button-group',ButtonGroup);

new Vue({
    el:"#app",
    data:{
        title:"Hello Vue "
    }
});