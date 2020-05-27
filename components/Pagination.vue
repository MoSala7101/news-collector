<template>
  <nav class="pagination is-centered" role="navigation" aria-label="pagination">
    <a
      class="pagination-previous"
      title="This is the first page"
      :disabled="currentPage == 1"
      @click="loadPrevious"
    >Previous</a>
    <a class="pagination-next" @click="loadNext" :disabled="currentPage == 20">Next page</a>
    <ul class="pagination-list">
      <li v-for="(page, index) in pages" :key="index">
        <a
          class="pagination-link"
          :class="{'is-current' : currentPage==page}"
          aria-label="Goto page 2"
          @click="currentPage=page , $emit('load-page',currentPage)"
        >{{page}}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  mounted() {
    this.setPagesNumbers()
  },
  data() {
    return {
      currentPage: 1,
      pages: []
    }
  },
  methods: {
    setPagesNumbers() {
      for (let i = 1; i <= 20; i++) {
        this.pages.push(i)
      }
    },
    loadPrevious() {
      if (this.currentPage > 1) {
        this.currentPage -= 1
        this.$emit('load-page', this.currentPage)
      }
    },
    loadNext() {
      if (this.currentPage < 20) {
        this.currentPage += 1
        this.$emit('load-page', this.currentPage)
      }
    }
  }
}
</script>

<style lang="scss">
.pagination {
  margin: 20px auto;

  .pagination-list {
    align-items: flex-start !important;
  }
  .pagination-link {
    background: #fff !important;
    &.is-current {
      color: #fff;
      background: #f14668 !important;
      border: 1px solid #f14668;
    }
  }
}
</style>