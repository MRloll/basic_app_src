import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        showOverlay: false
    },
    mutations: {
        //showing the overlay
        TOGGLE_OVERLAY(state, payload) {
            state.showOverlay = payload;
        }
    },
    actions: {
        //showing the overlay
        toggleOverlay(context, payload) {
            context.commit("TOGGLE_OVERLAY", payload);
        }
    },
    getters: {
        getStatus: state => state.showOverlay
    }
});
