<template>
  <div class="header flex">
    <div class="logo">MRBitcoin</div>
    <div class="flex">
      <router-link to="/">Home</router-link>|
      <router-link to="/contacts">Contacts</router-link>|
      <router-link to="/Charts">Charts</router-link>|
      <div>login</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header1"
};
</script>

<style lang="scss">
.header {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
  justify-content: space-between;
}
.header a {
  color: #fff;
  padding-right: 10px;
  text-decoration: none;
}
.flex {
  display: flex;
}
</style>
