const app = Vue.createApp({
    data() {
        return {
            uName: 'Marco',
            lastName: 'Cárcamo',
            email: 'm-car@gmail.com',
            gender:'male',
            photo: 'https://randomuser.me/api/portraits/men/75.jpg'
        }
    },
    methods: {
        

        async changeUser() {
            const res = await fetch('https://randomuser.me/api');
            const {results} = await res.json();

            console.log(results);

            this.uName= results[0].name.first;
            this.lastName = results[0].name.last;
            this.email  = results[0].email;
            this.gender = results[0].gender;
            this.photo = results[0].picture.large; 
        }
    }
})

app.mount('#app');