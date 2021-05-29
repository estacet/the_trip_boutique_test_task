import Vue from 'vue'
import Vuex from 'vuex'
import data from '../json/data'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        places: [],
        favorite: [],
        currentTab: 'city_guide'
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
        })),
        cityGuideByPrice: (state, getters) => priceRange => {
            console.log(getters)
            return getters.cityGuide.filter(place => place.priceRange === priceRange)
        },
        favoriteGuideByPrice: (state, getters) => priceRange => {
            return getters.favorite.filter(place => place.priceRange === priceRange)
        },
        placesMapMarkers(state) {
            const places = state.currentTab === 'favorite'
                ? state.places.filter(place => state.favorite.includes(place))
                : state.places;

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
