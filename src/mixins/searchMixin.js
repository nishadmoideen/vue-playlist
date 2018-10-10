export default {
    computed: {
        filteredBlogs: function() {
            return this.blogs.filter((b)=> {return b.title.match(this.search);})
        }
    }
}

