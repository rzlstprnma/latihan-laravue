<template>
    <div>        
        <Header/>
        <section v-if="name">
            <h1>User: {{name}}</h1>
        </section>
        <section v-else>
            <h2>Daftar User</h2>
            <ul>
                <li v-for="user in users" :key="user.id">
                    <router-link :to="{name: 'user', params: {name: user.name.toLowerCase()}}">{{user.name}}</router-link>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
import Header from '../components/Header'
export default {
    components: {
        Header,
    },
    props: ["name"],
    data(){
        return {
            users: [
                {
                    id: 1,
                    name: "Ijal",
                },
                {
                    id: 2,
                    name: "Abah abah",
                },
                {
                    id: 3,
                    name: "Herp",
                },
            ]
        }
    }
}
</script>

<style>

</style>