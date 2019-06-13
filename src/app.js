import Vue from 'vue'

import Button from './components/button'
import ButtonGroup from './components/button-group'
import Input from './components/input'
import Toast from './components/toast'

import TabBody from './components/tabs/tab-body'
import Tabs from './components/tabs/tabs'
import TabItem from './components/tabs/tab-item'
import TabHead from './components/tabs/tab-head'
import TabPane from './components/tabs/tab-pane'

import Plugin from './components/plugin'

Vue.component('g-button',Button);
Vue.component('g-button-group',ButtonGroup);
Vue.component('g-input',Input);
Vue.component('g-toast',Toast);

Vue.component('g-tabs',Tabs);
Vue.component('g-tab-body',TabBody);
Vue.component('g-tab-item',TabItem);
Vue.component('g-tab-head',TabHead);
Vue.component('g-tab-pane',TabPane);


Vue.use(Plugin);

const app = new Vue({
    el:"#app",
    data:{
        title:"Hello Vue "
    }

});