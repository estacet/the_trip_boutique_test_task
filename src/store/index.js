import Vue from 'vue'
import Vuex from 'vuex'
import data from '../json/data'
import {prepareDescription} from "@/helper";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        places: [],
        favorite: [],
        currentTab: 'city_guide',
        chosenPriceRange: null,
    },
    getters: {
        cityGuide(state) {
            let places = state.places.map(place => ({
                id: place.id,
                image: place.images[0].path,
                title: place.name,
                priceRange: place.price_range,
                description: prepareDescription(place.description),
                isFavorite: state.favorite.includes(place)
            }))
            if (state.chosenPriceRange === null){
                return places
            } 
            return places.filter(place => place.priceRange === state.chosenPriceRange)
        },
        favorite(state) {
            let places = state.favorite.map(place => ({
                id: place.id,
                image: place.images[0].path,
                title: place.name,
                priceRange: place.price_range,
                description: prepareDescription(place.description)
            }))
            if (state.chosenPriceRange === null){
                return places
            }
            return places.filter(place => place.priceRange === state.chosenPriceRange)
        },
        placesMapMarkers(state) {
            let places = state.currentTab === 'favorite'
                ? state.places.filter(place => state.favorite.includes(place))
                : state.places;

            if (state.chosenPriceRange !== null) {
                places = places.filter(place => place.price_range === state.chosenPriceRange)
            }

            return places.map(place => ({
                name: place.name,
                address: place.address,
                phone: place.phone,
                position: {
                    lat: place.latitude,
                    lng: place.longitude,
                }
            }));
        }
    },

    actions: {
        init({ commit }) {
            commit('init')
        },
        addToFavorite({ state, commit }, id) {
            const place = state.places.find(place => place.id === id)
            if (!state.favorite.includes(place)) {
                commit('addToFavorite', place)
            }
        },
        changeTab ( { commit }, tabName ) {
            if (tabName === 'city_guide' || tabName === 'favorite') {
                commit('changeTab', tabName)
            } else {
                throw new Error('Invalid tab name');
            }
        },
        applyPriceFilter( { commit }, priceRange) {
            commit('applyPriceFilter' , priceRange)
        },
        resetFilter( { commit }) {
            commit('resetFilter')
        }
    },

    mutations: {
        init(state) {
            state.places = data
        },
        addToFavorite(state, place) {
            state.favorite.push(place)
        },
        changeTab(state, name) {
            state.currentTab = name
        },
        applyPriceFilter(state, priceRange) {
            state.chosenPriceRange = priceRange
        },
        resetFilter(state) {
            state.chosenPriceRange = null
        }
    },
})
