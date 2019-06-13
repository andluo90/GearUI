import Toast from './toast'
let currentToast = null;
export default {
    install(Vue,options){
        Vue.prototype.$toast =  function (message,toastOptions) {

            if(currentToast !== null){
                console.log('current toast is not null...');
                currentToast.close()
            }
            currentToast = createToast();


            function createToast() {
                const  Constructor = Vue.extend(Toast);
                let toast = new Constructor();
                if(toastOptions !== undefined){
                    const {position='bottom', autoClose=false} = toastOptions;
                    toast.position = position;
                    toast.autoClose = autoClose;
                }

                toast.$slots.default = [message];
                toast.$mount();
                document.body.appendChild(toast.$el);
                return toast
            }

        }

    }
}