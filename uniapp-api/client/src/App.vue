<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <p>姓名：{{apis.name}}</p>
      <p>微信：{{apis.wechat}}</p>
    </div>
    <router-view/>
  </div>
</template>
<script lang="ts">
import axios from 'axios'
import {Component,Vue,} from 'vue-property-decorator'
@Component({
  components:{}
})
export default class ViewComponent extends Vue {
  /**data */
  apis= {}

  /**life hook */
  created(){
    axios.get('/api/datas').then(res=>{
      console.log(res.data);
      this.apis = res.data;
    })
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
