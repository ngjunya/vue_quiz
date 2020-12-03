import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store=new Vuex.Store({
    state:{
        submitted:0,
        selected:0,
        questionAPI:"123",
        type:"asd"
    },
    mutations:{
        Bsubmit(state){
            state.submitted=1;
        },
        Select(state){
            state.selected=1;
        },
        Type(state,n){
            state.type=n;
        }
    }
})