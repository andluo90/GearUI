import './app.scss'

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

import Layout from './components/layout/layout'
import Header from './components/layout/header'
import Content from './components/layout/content'
import Footer from './components/layout/footer'
import Side from './components/layout/side'

import Row from './components/grid/row'
import Col from './components/grid/col'

import Plugin from './components/plugin'

import Slide from './components/slide/slide'
import SlideItem from './components/slide/slide-item'

Vue.component('g-button',Button);
Vue.component('g-button-group',ButtonGroup);
Vue.component('g-input',Input);
Vue.component('g-toast',Toast);

Vue.component('g-tabs',Tabs);
Vue.component('g-tab-body',TabBody);
Vue.component('g-tab-item',TabItem);
Vue.component('g-tab-head',TabHead);
Vue.component('g-tab-pane',TabPane);

Vue.component('g-layout',Layout);
Vue.component('g-header',Header);
Vue.component('g-footer',Footer);
Vue.component('g-content',Content);
Vue.component('g-side',Side);



Vue.component('g-row',Row);
Vue.component('g-col',Col);

Vue.component('g-slide',Slide);
Vue.component('g-slide-item',SlideItem);

Vue.use(Plugin);

new Vue({
    el:"#app",
    data:{
        select:'n1'
    },
    methods:{
        search(){
            this.$toast('抱歉，搜索功能暂未完成.',{position:'top',autoClose:true})
            console.log(`search...`);
        },
        goHome(){
            console.log(`home...`);
            if(this.select !== 'n1'){
                this.select = 'n1';
            }
        }
    },
    mounted(){
      window.app = this;
    }


});