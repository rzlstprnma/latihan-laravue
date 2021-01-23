<template>
    <div>
        <Header/>
        <example-component/>
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