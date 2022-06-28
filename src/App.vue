<template>
  
  <div v-if="this.$route.name=='login'" >
    <router-view></router-view>
  </div>

  <div v-else>
    <navigationMenu/>
  </div>

</template>

<script>

  import navigationMenu from '@/components/navigationMenu.vue'

  export default {

    data() {
      return {
        route: ''
      }
    },
    components: {navigationMenu}
  }

</script>