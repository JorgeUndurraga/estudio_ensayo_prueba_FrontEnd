import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    datosTodos: [],
    login:[]
  },
  mutations: {

    ADD_LOGIN(state, login){

      state.login.push({
        username: login.username,
        password: login.password
      })

    },
    

    ADD_PRODUCTO(state, producto){

      state.datosTodos.push({
        id: producto.id,
        nombre: producto.nombre,
        caracteristicas: producto.caracteristicas
      })

    }


  },
  actions: {
    async getLogin({commit}) {
      try {
          let response = await fetch("/login.json");
          let dataLogin = await response.json();
          console.log(dataLogin, "Login de");

          dataLogin.forEach((login)=>{
            commit('ADD_LOGIN', login)
            console.log(login.username, "login.username")
          });

      } catch (error) {
        console.log(error);
      }
    },

    async getDatos({commit}) {
      try {
          let response = await fetch("/equipos.json");
          let data = await response.json();
          console.log(data.productos, "Datos de");
          // this.setDato(data);

          data.productos.forEach((producto)=>{
            commit('ADD_PRODUCTO', producto)
            console.log(producto.id, "producto.id")
          });


          console.log (this.state.datosTodos, "datos Todos")

      } catch (error) {
        console.log(error);
      }
    },


  },
  methods: {
    setDato(data) {
      console.log(data, "data en setDato");
      let nuevoDatosTodos = this.datosTodos;

      data.forEach(function(element) {
        nuevoDatosTodos.push(element);
      })
        // console.log(nuevoDatosTodos, "DatosTodos");
    },

  },
  modules: {
  }
})
