<template>

    <v-card>
        <v-card-title>
          <span class="text-h5 font-weight-black">Login de Usuario</span>
        </v-card-title>
              <v-card-text>
                    <v-container>
                            <v-form ref="form" v-model="valid" lazy-validation>
                                <!-- dismissible -->

                                <!--**********Url de la Imagen***********  :rules="userRules"-->
                                <v-text-field v-model="user"  label="Usuario" required ></v-text-field>

                                <!--**********Contraseña*********** :rules="passRules"--> 
                                <v-text-field v-model="pass" :counter="20"  label="Pass" required></v-text-field>

                                <!--**********Botones***********-->
                                <v-row class="d-flex align-center mt-10" align="center" justify="space-around">

                                                <v-col cols="12" sm="3" class="d-flex justify-center"> <!--esto es para que cada botón, formato móvil, quede centrado-->
                                                        <v-btn :disabled="!valid" small color="success" class="mr-4" @click="login">Iniciar</v-btn>
                                                </v-col>
                                </v-row>
                            
                             </v-form>


                    </v-container>
            </v-card-text>
    </v-card>


</template>

<script>

import auth from "@/conexionBBDD/auth.js";
export default {
    name: 'Login',

    data: function(){
        return {
                user:'',
                pass:'',
                token:'',


            error: false,
        }
    },
    // computed: {
    // },
    methods: {
        async login() {
            try {
                let resp = await auth.login(this.user, this.pass);
                console.log(resp,'login en Login');
                // this.usuarioCorrecto()
                this.$router.push("/");
            } catch (error) {
                        let errorCode = error.code;
                        // let errorMessage = error.message;
                    console.log(errorCode, 'errorMessage en login de Login.js');
                // this.error = true;
            }
        },

    },
}
</script>

<style scoped>
    
</style>