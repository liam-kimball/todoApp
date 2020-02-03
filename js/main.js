let app = new Vue({
    el: "#vueApp",
    data: {
        title: 'A simple Todos!',
        lists: [
            { id:1, item:'play games',},
            { id:2, item:'learn more'},
            { id:3, item:'take nap'}
        ],
        newItem:'',
    },
    methods: {
        addItem:function(){
            //generate id
            let id = this.lists.length + 1
            if(this.newItem !== ''){
                // create new list instance
                const newList = {id:id, item:this.newItem}
                // add it to array
                this.lists.push(newList)
                // turn the new item to an empty string
                this.newItem = ''
            }
        },
        removeItem:function(id){
            Vue.delete(this.lists, id);
            //this.lists.$delete(item);
        }
    },
    mounted() {

    },
});

