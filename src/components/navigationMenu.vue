<template>

  <aside
    class="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
    <div>
      <div class="-mx-6 px-6 py-4 text-center">
        <a href="/">
          <img src="../../public/images/mattilda-logo.png" class="w-40 inline">
        </a>
      </div>

      <div class="mt-8 text-center">
        <h5 class="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{{ this.$store.state.name }}</h5>
        <span class="hidden text-gray-400 lg:block">{{ this.$store.state.rol }}</span>
      </div>

      <ul class="space-y-2 tracking-wide mt-8">
        <li>
          <router-link to="/" v-slot="{ isActive }" >
             <div class="px-4 py-3 flex items-center space-x-4 rounded-md" :class="[isActive ? activeClass : '']">
              <svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                  class="fill-current text-cyan-400 dark:fill-slate-600"></path>
                <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                  class="fill-current text-cyan-200 group-hover:text-cyan-300"></path>
                <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                  class="fill-current group-hover:text-sky-300"></path>
              </svg>
              <span class="-mr-1 font-medium">Dashboard</span>
            </div>  
          </router-link>
        </li>
        <li>
          <router-link to="/deposit" v-slot="{ isActive }" >
            <div class="px-4 py-3 flex items-center space-x-4 rounded-md" :class="[isActive ? activeClass : '']">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path class="fill-current text-gray-300 group-hover:text-cyan-300" fill-rule="evenodd"
                  d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
                <path class="fill-current text-gray-600 group-hover:text-cyan-600"
                  d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
              </svg>
              <span class="-mr-1 font-medium">Depositos</span>
            </div>            
          </router-link>
        </li>
        <li>
          <router-link to="/withdraw"  v-slot="{ isActive }" >
            <div class="px-4 py-3 flex items-center space-x-4 rounded-md" :class="[isActive ? activeClass : '']">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path class="fill-current text-gray-600 group-hover:text-cyan-600" fill-rule="evenodd"
                  d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                  clip-rule="evenodd" />
                <path class="fill-current text-gray-300 group-hover:text-cyan-300"
                  d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
              </svg>
              <span class="-mr-1 font-medium">Retiros</span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/balances"  v-slot="{ isActive }" >
            <div class="px-4 py-3 flex items-center space-x-4 rounded-md" :class="[isActive ? activeClass : '']">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path class="fill-current text-gray-600 group-hover:text-cyan-600"
                  d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                <path class="fill-current text-gray-300 group-hover:text-cyan-300"
                  d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
              </svg>
              <span class="-mr-1 font-medium">Balances</span>
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/users"  v-slot="{ isActive }" >
            <div class="px-4 py-3 flex items-center space-x-4 rounded-md" :class="[isActive ? activeClass : '']">
              <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
              </svg>
              <span class="-mr-1 font-medium">Usuarios</span>
            </div>
          </router-link>
        </li>
      </ul>
    </div>

    <div class="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
      <button class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group" v-on:click="logout">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        <span class="-mr-1 font-medium">Logout</span>
      </button>
    </div>
  </aside>
  <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
    <div class="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
      <div class="px-6 flex items-center justify-between space-x-4 2xl:container">
        <h5 hidden class="text-2xl text-gray-600 font-medium lg:block">Dashboard</h5>
        <button class="w-12 h-16 -mr-2 border-r lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 my-auto" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

      </div>
    </div>

    <div class="px-6 pt-6 2xl:container bg-gray-100 h-24 min-h-full">

      <router-view></router-view>

    </div>
  </div>


</template>

<script>

  export default {

    name:'navigationMenu',
    data() {
      return {
        activeClass: 'text-white bg-gradient-to-r from-sky-600 to-cyan-400',
      }
    },
    methods: {
      logout: function(){

        this.$store.commit('destroyedToken')
        
        this.$router.push('/login')

      }
    }

  }

</script>