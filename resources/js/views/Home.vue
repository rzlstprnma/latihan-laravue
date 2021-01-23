<template>
    <div>
        <Header/>
        <h1>Home</h1>
        <Footer/>
    </div>
</template>

<script>
import ExampleComponent from '../components/ExampleComponent.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
    components: {
        Header,
        ExampleComponent,
        Footer
    } 
}
</script>

<style>

</style>