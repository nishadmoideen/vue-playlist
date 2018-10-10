<template>
  <div id="app">
    <!-- slots example
      <form-helper>
      <div slot="form-header">
          <h3>Enter login information</h3>
      </div>
      <div slot="form-fields">
          <input type="text" placeholder="name"><br/>
          <input type="password" placeholder="password">
          <br/>
      </div>
      <div slot="form-controls">
          <button v-on:click="handleSubmit">Submit</button>
      </div>
    </form-helper>
    -->
    <!-- dynamic components example
    <keep-alive>
    <component v-bind:is="component"></component>
    </keep-alive>
    <div id="center-div">
      <button v-on:click="component='form-one'">Form 1</button>
      <button v-on:click="component='form-two'">Form 2</button>
    </div>
    --> 
    <!--
    <add-blog></add-blog>
    --> 
    <!--
    <show-blogs></show-blogs>
    <list-blogs></list-blogs>
    --> 
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import formHelper from './components/FormHelper.vue';
import formOne from './components/FormOne.vue';
import formTwo from './components/FormTwo.vue';
import addBlog from './components/AddBlog.vue';
import showBlogs from './components/ShowBlogs.vue';
import listBlogs from './components/ListBlogs.vue';
import header from './components/Header.vue';

export default {
    components: {
        'form-helper': formHelper,
        'form-one': formOne,
        'form-two': formTwo,
        'add-blog': addBlog,
        'show-blogs': showBlogs,
        'list-blogs' : listBlogs,
        'app-header' : header
    },
  name: 'app',
  data () {
    return {
      component: 'form-one'
    }
  }
}
</script>

<style scoped>
#center-div {
    width: 100%;
    max-width: 160px;
    margin: 0 auto;
}
</style>
