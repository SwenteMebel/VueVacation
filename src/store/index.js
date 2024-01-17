import { createStore } from 'vuex'
import axios from 'axios'; 

const url = 'https://restcountries.com/v3.1/all';

export default createStore ({
    state: {
        loadingStatus: 'notloading',
        countries: [],
        errors: [],
    },

    mutations: {
        SET_LOADING_STATUS(state, payload){
            state.loadingStatus = payload;
        },
        SET_COUNTRIES(state, payload){
            state.countries = payload;
        },
        CLEAR_COUNTRIES(state){
            state.countries = [] 
        },
        ADD_ERROR(state, payload){
            state.errors = [...state.errors, payload]
        }
    },

    actions:{
        showCountries(context){
            context.commit('SET_LOADING_STATUS', 'loading');

            axios.get(url)
                .then(result => {
                    context.commit('SET_LOADING_STATUS', 'notloading');
                    context.commit('SET_COUNTRIES', result.data);
                })
                .catch(err =>{
                    context.commit('SET_LOADING_STATUS', 'notloading');
                    context.commit('SET_COUNTRIES', [] );
                    context.commit('ADD_ERROR', err);
                })
        },
        toggleShow(context){
            context.commit('CLEAR_COUNTRIES');
        },

    },

    modules: {
   
    },

});