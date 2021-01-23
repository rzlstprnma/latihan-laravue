<template>
    <div>        
        <Header/>
        <section v-if="name">
            <h1>User: {{name}}</h1>
        </section>
        <section v-else>
            <h2>Daftar User</h2>
        </section>
    </div>
</template>

<script>
import Header from '../components/Header'
export default {
    components: {
        Header,
    },
    props: ["name"]
}
</script>

<style>

</style>