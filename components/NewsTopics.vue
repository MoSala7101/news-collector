<template>
  <div class="buttons-container">
  
    <button
      class="button"
      :class="{'is-danger' : (active == 'latest')}"
      @click="$emit('activate-latest')"
      title="show The Guardian latest news"
    >The Guardian</button>
    <button
      class="button"
      :class="{'is-danger' : (active == 'nyt')}"
      @click="$emit('activate-nyt')"
      title="show  The New York Times latest news"
    >The New York Times</button>
  </div>
</template>

<script>
export default {
  props: ['active']
}
</script>

<style lang="scss">
$lightShadow: 1px 2px 5px rgba(0, 0, 0, 0.3);
$heavyShadow: 2px 5px 8px rgba(0, 0, 0, 0.3);
.buttons-container {
  margin: 0 auto 20px auto;
  height: 80px;
  width: 100vw;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ddd;
  position: relative;

  .buttons-title {
    font-weight: bold;
    font-size: 28px;
    margin: 0 20px 0 0;

    color: #f14668;
  }
  .button {
    margin: 0 10px;
    border: 1px solid #f14668;
    box-shadow: $lightShadow;
    outline: none;
    &:hover {
      color: #e23457;
      border: 1px solid #f14668;
      background: #fff !important;
    }

    &.is-danger {
      box-shadow: $heavyShadow;

      &:hover {
        color: #fff;
        border: 1px solid #f14668;
        background: #f14668 !important;
      }
    }
  }
}
</style>