<template>
  <div class="app-wrapper" :class="{ closedSidebar: closed }">
    <Header />
    <Sidebar />
    <Main />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from './components/Header'
import Sidebar from './components/Sidebar/index'
import Main from './components/Main'

export default {
  name: 'Layout',
  components: {
    Main,
    Header,
    Sidebar
  },
  computed: {
    ...mapGetters([
      'closed'
    ])
  }
}
</script>
