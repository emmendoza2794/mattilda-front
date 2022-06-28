<template>
  
  <div class="p-6 w-1/2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <h6 class="mb-2 text-xl font-bold text-gray-600">Crear nuevo usuario</h6>

    <form @submit.prevent="createUser">
      <div class="mb-6">
        <label class="block mb-2 text-sm font-medium text-gray-900">Nombres</label>
        <input type="text" v-model="dataForm.firstName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
      </div>
      <div class="mb-6">
        <label class="block mb-2 text-sm font-medium text-gray-900">Apellidos</label>
        <input type="text" v-model="dataForm.lastName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
      </div>
      <div class="mb-6">
        <label class="block mb-2 text-sm font-medium text-gray-900">Correo electronico</label>
        <input type="email" v-model="dataForm.email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
      </div>
      <div class="mb-6">
        <label class="block mb-2 text-sm font-medium text-gray-900">Rol</label>
        <select v-model="dataForm.rol" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
          <option value="admin">Administrador</option>
          <option value="student">Estudiante</option>
        </select>
      </div>
      <div class="mb-6">
        <label class="block mb-2 text-sm font-medium text-gray-900">Estado</label>
        <select v-model="dataForm.status" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
          <option value="active">Activo</option>
          <option value="inactive">Inactivo</option>
        </select>
      </div>
      <div class="mb-6">
        <label class="block mb-2 text-sm font-medium text-gray-900">Contraseña</label>
        <input type="password" v-model="dataForm.password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
      </div>

      <button type="submit" class="text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Crear</button>
    </form>

    
        
</div>

</template>

<script>

  export default {
    name: 'Users',
    data() {
      return{
        dataForm: {
          firstName: '',
          lastName: '',
          rol: '',
          status: '',
          email: '',
          password: ''
        },

      }

    },
    methods: {
      createUser(){

        this.axios.post('https://mattilda-back.malusoft.co/users', this.dataForm, { headers: this.$store.state.header }).then((response) => {

          if(response.status==200){
            console.log(response.data)
            this.$swal({
              icon: 'success',
              title: '¡Muy bien!',
              text: 'Usuario creado correctamente'
              });
          }

        }).catch((error) => {

          if (error.response.status == 412){

            this.$swal({
              icon: 'error',
              title: '¡Ops..!',
              text: error.response.data.detail
              });
          }  

          console.log(error.response)
        })

      }
    }
  }
  
</script>