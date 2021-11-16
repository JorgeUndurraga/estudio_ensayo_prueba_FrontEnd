<template>
<div>
<v-container>
    <h1> Pruebas de conexión</h1>


      <v-row>
        <v-col cols="12" sm="4" v-for="dato in datosTodos" :key="dato.id"> <!-- cursos viene del computed ///////////cols="12" es la grilla para formato movile -->
            {{dato.id}}  {{dato.nombre}}
            <li v-for="i in dato.caracteristicas" :key="i">
                    {{ i }}
            </li>
        </v-col>
        </v-row>
    </v-container>

</div>

              
</template>

<script>

import {mapActions, mapState} from 'vuex'
export default {
    name: 'prueba-conexion',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
         ...mapState(['datosTodos']),
    },
    methods: {
        ...mapActions(['getDatos']),
    },
    // watch: {},
    // components: {},
    // -- Lifecycle Methods
        created () {
        this.getDatos()
    },
    // -- End Lifecycle Methods

}
</script>

<style scoped>
    
</style>