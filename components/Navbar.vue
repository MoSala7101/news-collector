<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-start">
        <div class="navbar-brand">
          <nuxt-link to="/"><i class="fas fa-newspaper  navbar-icon"></i> NewsCollector</nuxt-link>
          <a
            class="navbar-burger burger"
            role="button"
            @click="toggleMenus()"
            :class="{'is-active' : menusState}"
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-menu" :class="{'is-active' : menusState}">
          <div class="navbar-item" @click="closeMenus()">
            <nuxt-link to="/">
              <i class="fas fa-home  navbar-icon"></i> Home
            </nuxt-link>
          </div>
          <div class="navbar-item" @click="closeMenus()">
            <nuxt-link to="/about">
              <i class="fas fa-question-circle navbar-icon"></i> About
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      menusState: false
    }
  },
  methods: {
    toggleMenus: function() {
      this.menusState = !this.menusState
    },
    closeMenus: function() {
      this.menusState = false
    }
  }
}
</script>

<style lang="scss">
$navbarHeight: 80px;
.navbar {
  background: linear-gradient(to right, #f14668, #f14668);
  height: $navbarHeight;

  .navbar-brand {
    display: flex;
    min-width: 150px;
    height: $navbarHeight !important;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
    a {
      font-size: 22px;
      color: #fff !important;
      font-weight: bold;
    }

  }


    .navbar-icon {
      display: inline-block;
      margin: 0 3px;
      
    }
  .navbar-menu {
    a {
      padding: 5px 20px;
      color: #f9f9f9;
    }

    .nuxt-link-exact-active {
      background: #fff;
      color: red !important;
    }

    &.is-active {
      a {
        padding: 5px 20px;
        color: #222;
      }
    }
  }
}
</style>