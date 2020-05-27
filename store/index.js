import { getField, updateField } from 'vuex-map-fields';
import axios from 'axios';
import $ from 'jquery'
export const state = function() {
    return {

        title: 'Title from Vuex store',
        articles: [],
        nytArticles: [],
    }
}

export const getters = {
    getField,
    articles(state) {
        console.log("Value of: Guardian articles ", state.articles);
        return state.articles
    },

    nytArticles(state) {
        const theArticles = state.nytArticles;
        console.log(theArticles)
        return state.nytArticles;

    }
}

export const mutations = {
    updateField,

    LOAD_DATA(state, articles) {
        state.articles = articles;
    },
    LOAD_NYT_DATA(state, articles) {
        state.nytArticles = articles;
    },

}

export const actions = {
    updateField,
    loadData(context, page) {
        axios
            .get(
                `https://content.guardianapis.com/search?api-key=07f60159-1079-4d77-ba3d-2b00313179d3&order-by=newest&show-fields=thumbnail,headline,bodyText,publication,lastModified,liveBloggingNow,byline&page=${page}`
            )
            .then(res => {
                context.commit('LOAD_DATA', res.data.response.results);
                console.log('Guardian Data Loaded')

            })
            .catch(err => console.log(err))


    },

    loadNYTData(context, page) {

        /* move 1 of the page number and multiply with 20 where NYTimes use 'offset'
         as the number of pages to be ignored in the response results */

        let offset = 20 * (page - 1) || 0

        console.log(offset)
        axios
            .get(
                `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=dzBhAk8oO2n8LOxuRU0MgGlu9KBnsIzw&offset=${offset}`

            )
            .then(res => {
                context.commit('LOAD_NYT_DATA', res.data.results);
                console.log('NYT Data Loaded')

                console.log('NYT Res num results', res.data.num_results)


            })
            .catch(err => console.log(err))
    },

}