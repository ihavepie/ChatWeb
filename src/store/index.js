import Vuex from "vuex";
import localforage from "localforage";

const getters = {
    getMessage(state) {
        return `hello${state.name}`;
    },
};

const mutations = {
    SetUser(state,user){
        localforage.setItem('username', user).then(r => console.log(r))
        state.username = user
    },
};

const actions = {
};

const state = {
    // store的username
    username: "",
};


const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});

store.subscribe((mutation, state) => {
    localStorage.setItem('vuex-state', JSON.stringify(state))
})

export default store

