<template>
  <div class="container-fluid d-flex justify-content-center align-items-center">
    <main class=" box-auth d-flex flex-column align-items-center">
      <!-- Title Login -->
      <h1>Login</h1>
      <div class="space"></div>
      <h2 class=" align-self-start">Hi, Welcome Back</h2>
      <div class="space"></div>
      <form @submit.prevent="login">
        <!-- Email -->
        <label for="email" class=" align-self-start">Email</label>
        <input type="email" id="email" v-model="email" required>
        <div class="space"></div>
        <!-- Password -->
        <label for="password" class=" align-self-start">Password</label>
        <input type="password" id="password" v-model="password" required>
        <div class="space"></div>
        <!-- Forgot Password -->
        <h3 class=" align-self-end">Forgot Password</h3>
        <div class="space"></div>
        <!-- Button Login -->
        <button type="submit">Login</button>
        <div class="space"></div>
      </form>
      <!-- Text Muted -->
      <div class="d-flex w-100 align-items-center">
        <div class="garis flex-grow-1"></div>
        <h4>Login with</h4>
        <div class="garis flex-grow-1"></div>
      </div>
      <div class="space"></div>
      <!-- Button Google -->
      <button class="google" @click.prevent="">Google</button>
      <div class="space"></div>
      <!-- Sign Up -->
      <h5>Don’t have an account? <span @click="goSignup">Sign Up</span></h5>
      <div class="space"></div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const email = this.email
      const password = this.password
      console.log(email)
      console.log(password)
      this.email = ''
      this.password = ''
    },
    goSignup () {
      this.$router.push('/signup')
    }
  }
}
</script>

<style lang="scss" scoped>

.container-fluid {
  padding: 150px 0;
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

.garis {
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

#password {
  letter-spacing: 5px;
}

button {
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #FFFFFF;
  width: 100%;
  height: 60px;
  background: #7E98DF;
  border-radius: 70px;
}

button:hover {
  opacity: .8;
}

.google {
  background: #FFFFFF;
  border: 1px solid #7E98DF;
  font-family: Rubik;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #7E98DF;
}

</style>
