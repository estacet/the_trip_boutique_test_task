import Vue from 'vue'
import Vuex from 'vuex'
import data from '../json/data'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        places: [],
        favorite: []
    },
    getters: {
        cityGuide: state => state.places.map(place => ({
            id: place.id,
            image: place.images[0].path,
            name: place.name,
            priceRange: place.price_range,
            description: place.description,
            isFavorite: state.favorite.includes(place)
        })),
        favorite: state => state.favorite.map(place => ({
            id: place.id,
            image: place.images[0].path,
            name: place.name,
            priceRange: place.price_range,
            description: place.description
        }))
    },
    mutations: {
        init(state) {
            state.places = data
        },
        addToFavorite(state, place) {
            state.favorite.push(place)
        }
    },
    actions: {
        init({ commit }) {
            commit('init')
        },
        addToFavorite({ state, commit }, { id }) {
            const place = state.places.find(place => place.id === id)

            commit('addToFavorite', place)
        }
    }
})
