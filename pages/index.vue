<template>
  <div class="home-container">
    <NewsTopics
      class="topics-container"
      :active="active"
      @activate-latest="loadData(), makeLatestActive()"
      @activate-nyt="loadNYTData(), makeNYTActive()"
      @activate-egypt="loadEgyptData(), makeEgyptActive()"
      @activate-sport="loadSportData(), makeSportActive()"
    />

    <!-- Guardian Articles-->
    <div v-if="active=='latest'" class="articles-container">
      <NewsContainer
        v-for="article in articles()"
        :article="article"
        :articleUrl="article.webUrl"
        :key="article.id"
        :articleHeadline="article.fields.headline"
        :articleImage="article.fields.thumbnail"
        :articlePublishTime="getTimeFrom(article.webPublicationDate)"
        :articleBody=" article.fields.bodyText +'..'"
        :articleByLine="'By '+article.fields.byline"
        :articleSource="article.fields.publication"
      />
      <Pagination @load-page="paginateData" />
    </div>
    <!-- NYT Articles-->

    <div v-if="active=='nyt'" class="articles-container">
      <NewsContainer
        v-for="article in nytArticles()"
        :key="article.id"
        :article="article"
        :articleUrl="article.url"
        :articleHeadline="article.title"
        :articleImage="getArticleImage(article.multimedia)"
        :articlePublishTime="getNYTTimeFrom(article.updated_date)"
        :articleBody=" article.abstract +'..'"
        :articleByLine="article.byline"
        :articleSource="article.source"
      />
      <NYTPagination @load-page="paginateNYTData" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

import { mapState, mapActions, mapGetters } from 'vuex'
import { mapFields } from 'vuex-map-fields'
import NewsTopics from '../components/NewsTopics'
/* Import 2 components of the pagination to save each newspaper current page data seperately */
import Pagination from '../components/Pagination'
import NYTPagination from '../components/Pagination'
import NewsContainer from '../components/NewsContainer'
export default {
  data() {
    return {
      active: 'latest'
    }
  },
  mounted() {
    this.loadData(1)
    this.loadNYTData(1)
  },
  computed: {
    ...mapState(['title'])
  },
  components: {
    NewsTopics,
    Pagination,
    NYTPagination,
    NewsContainer
  },
  methods: {
    moment: function() {
      return moment()
    },
    getTimeFrom(startTime) {
      // start time and end time
      var startTime = startTime
      var endTime = moment()

      // calculate total duration
      var duration = moment.duration(endTime.diff(startTime))

      // duration in hours
      var hours = parseInt(duration.asHours())
      /* Remove offet of 2 hrs */

      // duration in minutes
      var minutes = parseInt(duration.asMinutes()) % 60

      if (hours == 0) {
        return minutes + ' min ago.'
      } else {
        return hours + ' hr and ' + minutes + ' min ago.'
      }
    },
    getNYTTimeFrom(startTime) {
      // start time and end time
      var startTime = startTime
      var endTime = moment()

      // calculate total duration
      var duration = moment.duration(endTime.diff(startTime))

      // duration in hours
      var hours = parseInt(duration.asHours())

      // duration in minutes
      var minutes = parseInt(duration.asMinutes()) % 60

      if (hours == 0) {
        if (minutes == 0) {
          return 'a few seconds ago'
        } else {
          return minutes + ' min ago.'
        }
      } else {
        return hours + ' hr and ' + minutes + ' min ago.'
      }
    },

    ...mapActions(['loadData', 'loadNYTData']),
    ...mapGetters(['articles', 'nytArticles']),
    makeLatestActive() {
      this.active = 'latest'
    },
    makeNYTActive() {
      this.active = 'nyt'
    },
    getArticleImage(multimedia) {
      let theImage = ''
      if (multimedia != null) {
        try {
          theImage = multimedia[3].url
        } catch (err) {
          console.log(err)
          theImage = multimedia[2].url
        }
      }
      return theImage
    },
    paginateData(pageNumber) {
      this.loadData(pageNumber)
    },
    paginateNYTData(pageNumber) {
      this.loadNYTData(pageNumber)
    }
  }
}
</script>

<style lang="scss">
.home-container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  position: relative;

  .articles-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px 20px;
  }
}
</style>
