<template>
  <div class="2xl:container h-screen m-auto">
        <div hidden class="fixed inset-0 w-7/12 lg:block">
          <img class="w-full h-full object-cover" src="../../public/images/bg-login.jpg"> 
        </div>
        <div hidden role="hidden" class="fixed inset-0 w-6/12 ml-auto bg-white bg-opacity-70 backdrop-blur-xl lg:block"></div>
        <div class="relative h-full ml-auto lg:w-6/12">
            <div class="m-auto pt-44 lg:px-36 sm:px-4">
                <div class="space-y-4 text-center">
                    <img src="../../public/images/mattilda-logo.png" class="w-48 inline">
                    <p class="font-medium text-lg text-gray-600">¡Bienvenido!, por favor inicie sesión</p>
                </div>

                <form class="space-y-6 py-6" @submit.prevent="login">
                    <div>
                        <input 
                                type="email" 
                                placeholder="Su E-mail"
                                class="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                                v-model="email"
                                required
                        >
                    </div>

                    <div class="flex flex-col items-end">
                        <input 
                                type="password" 
                                placeholder="Su contraseña"
                                class="w-full py-3 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none"
                                v-model="password"
                                required
                        >
                        <button type="reset" class="w-max p-3 -mr-3">
                            <span class="text-sm tracking-wide text-blue-600">¿Olvido su contraseña?</span>
                        </button>
                    </div>

                    <div>
                        <button class="w-full px-6 py-3 rounded-xl bg-sky-500 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800" type="submit">
                            <span class="font-semibold text-white text-lg">Iniciar sesión</span>
                        </button>
                    </div>
                </form>

                <p class="font-medium text-lg text-red-600 text-center" v-if="status != ''">{{ status }}</p>

            </div>
        </div>
    </div>
</template>

<script>

  export default {

    name:'Login',
    data() {
      return {
        email:'',
        password: '',
        status: ''
      }
    },
    methods:{
      login(){

        if (this.email == '' || this.password == '') {
          this.status = "Por favor ingrese su email y contraseña"
          return
        }

        const params = new URLSearchParams({
                email: this.email,
                password: this.password
              })

        this.axios.post('https://mattilda-back.malusoft.co/login', params).then((response) => {
          
          if (response.status==200) {
            this.$store.commit('saveToken', response.data.token)
            
            // this.$store.commit('validateToken')

            this.$router.push({name: 'home'})

          }

        }).catch((error) => {

          if (error.response.status == 401){
            this.status = error.response.data.detail
          }          
          
          console.log(error.response)

        })        

      }
    }

  }

</script>