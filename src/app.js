import Vue from 'vue'

import Button from './components/button'

Vue.component('g-button',Button);

new Vue({
    el:"#app",
    data:{
        title:"Hello Vue "
    }
});