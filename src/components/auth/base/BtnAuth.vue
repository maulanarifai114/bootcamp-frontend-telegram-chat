<template>
  <div>
    <button type="submit">{{title}}</button>
  </div>
</template>

<script>
export default {
  name: 'BtnAuth',
  props: ['title']
}
</script>

<style lang="scss" scoped>

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

</style>
