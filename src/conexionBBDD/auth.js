import axios from "axios";
// const API = "http://157.230.190.251/api/v1/cmodels/users/login";


// const ENDPOINT_PATH = "http://157.230.190.251/api/v1/cmodels/users/login";



export default {

    login(user, pass) {
        // const token = 'QH233JH43HHJ34JHJ3H42OI8F8WE8WEUWE8R';
        const usuario = { username: user, password: pass };
        const ENDPOINT_PATH = 'http://157.230.190.251/api/v1/cmodels/users/login';
        console.log (usuario)

        axios.post(ENDPOINT_PATH, usuario
                                // {
                                //     headers: {
                                //         Authorization: 'Bearer ' + token,
                                //     }
                                // }
                            ).then((resp)=>{
                                console.log(resp,'login de auth');
                                // this.usuarioCorrecto()
                                this.$router.push('/')
                            })
                            .catch(error=>{
                                let errorCode = error.code;
                                console.log(errorCode, 'errorMessage en login de Auth');
                            })
    }
}


/*

        axios.post(ENDPOINT_PATH, usuario)
          .then(response => {
            alert(response);
          })
          .catch(err => {
            alert(err);
          });
      
    }
};
*/

        // .post(ENDPOINT_PATH, {
        //   usuario
        // })
        // .then(response => {
        //   alert(response);
        //   //handle response and save JWT
        // })
        // .catch(err => {
        //   alert(err);
        // });

// login(user) {
//     return axios
//       .post(API_URL + 'signin', {
//         username: user.username,
//         password: user.password
//       })
//       .then(response => {
//         if (response.data.accessToken) {
//           localStorage.setItem('user', JSON.stringify(response.data));
//         }

//         return response.data;
//       });
//   }




// async login(user, pass) {
//     const usuario = { user, pass };
//     return axios.post(ENDPOINT_PATH, usuario, {
//         headers: {
            
//              }
//            }).then(res => {
//              console.log(res);
//            }).catch(err => {
//              console.log(err.response);
//            });

// }

