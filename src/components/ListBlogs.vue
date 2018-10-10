<template>
    <div v-theme:column="'wide'" id="show-blogs">
        <h1>Listing Articles</h1>
        <input type="text" v-model="search" placeholder="search blogs">
        <div v-for="blog in filteredBlogs" class="single-blog">
            <h2 v-rainbow>{{ blog.title | toUpperCase }}</h2>
            <article>{{ blog.body | snippet }}</article>
        </div>
    </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';

export default {
    data () {
        return {
            blogs: [],
            search: ''
        };       
    },
    methods: {

    },
    created() {
        this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
            this.blogs = data.body.slice(0,10);
        });
    },
    computed: {
        /*
        filteredBlogs: function() {
            return this.blogs.filter((b)=> {return b.title.match(this.search);})
        }
        */
    },
    filters: {
        'global-upper-case': function(value){
            return value.toUpperCase();
        },
        toUpperCase(value){
            return value.toUpperCase();
        },
        
    },
    mixins: [searchMixin]
    
    

}
</script>

<style>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>