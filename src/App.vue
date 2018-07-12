<template>
  <div id="app">
    <Game />
  </div>
</template>

<script>
import { Game } from 'src/pages'

export default {
  name: 'app',
  components: {
    Game,
  },
}
</script>

<style lang="scss">
@import '~src/styles/variables';

* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: $default-font;
  font-size: 62.5%; // 1rem = 10px
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
}
#app {
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 1.6rem;
}
</style>
