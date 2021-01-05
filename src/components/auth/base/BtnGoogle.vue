<template>
  <div class=" w-100">
    <button class="google" @click.prevent="">Google</button>
  </div>
</template>

<script>
export default {
  name: 'BtnGoogle'
}
</script>

<style lang="scss" scoped>

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

button {
  width: 100%;
  height: 60px;
  border-radius: 70px;
}

button:hover {
  opacity: .8;
}

</style>
