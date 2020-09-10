new Vue({
    el: '#deep',
    data: {
        check: '',
        message:''
        },
    methods: {
        click: function() {
        var str = this.check.toUpperCase();
        this.message= str;
    }
}
});