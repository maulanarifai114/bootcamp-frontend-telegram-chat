<template>
  <div class="container-fluid d-flex justify-content-center">
    <main class=" box-auth d-flex flex-column align-items-center">
      <!-- Title Login -->
      <h1>Login</h1>
      <div class="space"></div>
      <h2 class=" align-self-start">Hi, Welcome Back</h2>
      <div class="space"></div>
      <!-- Form -->
      <form @submit.prevent="login" class=" d-flex flex-column">
        <!-- Email -->
        <label for="email" class=" align-self-start">Email</label>
        <input :class="this.errorEmail === 1 ? 'bottom-red': '' " @input="checkEmail" @blur="this.errorEmail = 0" type="email" id="email" v-model="email" maxlength="64" placeholder="Enter your email, ex: telegrum@gmail.com" required>
        <div class=" w-100 mb-1" v-if="this.errorEmail === 1"></div>
        <h6 class=" align-self-start" v-if="this.errorEmail === 1">Email format is wrong!</h6>
        <div class="space"></div>
        <!-- Password -->
        <label for="password" class=" align-self-start">Password</label>
        <input :class="this.errorPass === 1 ? 'bottom-red': '' " @input="checkPass" @blur="this.errorPass = 0" type="password" id="password" v-model="password" minlength="8" maxlength="64" placeholder="Enter your password, min 8 char" required>
        <div class=" w-100 mb-1" v-if="this.errorPass === 1"></div>
        <h6 class=" align-self-start" v-if="this.errorPass === 1">Password must be 8 character</h6>
        <div class="space"></div>
        <!-- Forgot Password -->
        <h3 class=" align-self-end">Forgot Password</h3>
        <div class="space"></div>
        <!-- Button Login -->
        <BtnAuth title="Login"/>
        <div class="space"></div>
      </form>
      <!-- Text Muted -->
      <div class="d-flex w-100 align-items-center">
        <div class="line-muted flex-grow-1"></div>
        <h4>Login with</h4>
        <div class="line-muted flex-grow-1"></div>
      </div>
      <div class="space"></div>
      <!-- Button Google -->
      <BtnGoogle/>
      <div class="space"></div>
      <!-- Sign Up -->
      <h5>Don’t have an account? <span @click="goSignup">Sign Up</span></h5>
      <div class="space"></div>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import BtnAuth from '../../components/auth/base/BtnAuth'
import BtnGoogle from '../../components/auth/base/BtnGoogle'

export default {
  name: 'Login',
  components: {
    BtnAuth,
    BtnGoogle
  },
  data () {
    return {
      email: '',
      password: '',
      errorEmail: 0,
      errorPass: 0
    }
  },
  methods: {
    checkEmail () {
      if (!this.email.includes('@')) {
        this.errorEmail = 1
      } else {
        this.errorEmail = 0
      }
    },
    checkPass () {
      if (this.password.length < 8) {
        this.errorPass = 1
      } else {
        this.errorPass = 0
      }
    },
    getLocationAndStatus () {
      this.$getLocation({ enableHighAccuracy: true })
        .then(coordinates => {
          console.log(coordinates)
          this.$store.commit('SET_LOCATION', coordinates)
          const positionStatus = {
            lat: coordinates.lat,
            lng: coordinates.lng,
            status: 'Online'
          }
          axios.put(`${process.env.VUE_APP_BASE_URL}user/${localStorage.getItem('id')}`, positionStatus)
            .then((res) => {
              console.log(res.data.result)
            })
            .catch((err) => {
              console.log(err.response.data.err)
            })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    login () {
      const email = this.email
      const password = this.password
      const data = { email, password }
      axios.post(`${process.env.VUE_APP_BASE_URL}auth/login`, data)
        .then((res) => {
          console.log(res.data.result)
          localStorage.setItem('id', res.data.result.id)
          localStorage.setItem('token', res.data.result.token)
          this.$store.commit('SET_SENDER', res.data.result)
          this.getLocationAndStatus()
          Swal.fire('Success Login', 'Let\'s chat your friends', 'success')
          axios.put(`${process.env.VUE_APP_BASE_URL}user/${localStorage.getItem('id')}`, { status: 'Online' })
            .then((res) => {
              console.log(res.data.result)
            })
            .catch((err) => {
              console.log(err.response.data.err)
            })
          this.$router.push('/room')
        })
        .catch((err) => {
          console.log(err.response.data.err)
          Swal.fire('Failed Login', err.response.data.err, 'error')
        })
    },
    goSignup () {
      this.$router.push('/signup')
    }
  }
}
</script>

<style lang="scss" scoped>

.container-fluid {
  padding: 100px 0;
  background: #F6F6F6;
}

.space {
  width: 100%;
  height: 35px;
}

h1 {
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  text-align: center;
  letter-spacing: -0.165px;
  color: #7E98DF;
}

h2 {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #232323;
}

h3 {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
  color: #7E98DF;
  cursor: pointer
}

h3:hover {
  opacity: .8;
}

h4 {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #848484;
  margin: 0 40px;
  width: fit-content;
}

h5 {
  text-align: center;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #313131;
  span {
    color: #7E98DF;
    cursor: pointer;
  }
  span:hover {
    opacity: .8;
  }
}

.bottom-red {
  border-bottom: 1px solid #FF5B37;
}

h6 {
  text-align: center;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #FF5B37;
}

.line-muted {
  height: 1px;
  background-color: #848484;
}

form {
  width: 100%;
}

label {
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #848484;
  opacity: 0.75;
}

input {
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #232323;
  border-bottom: 1px solid #adadad;
  padding: 15px 0;
  width: 100%;
}

input::placeholder {
  color: rgba(35, 35, 35, 0.2);
}

@media (min-height: 910px) {
  .container-fluid {
    height: 100vh;
  }
}

@media (max-width: 575px) {
  .container-fluid {
    padding: 40px 20px;
  }
  .box-auth {
    padding: 40px 30px;
  }
}

</style>
