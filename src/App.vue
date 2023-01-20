<template>
    <h2>{{ message }}</h2>
   <contact-details
    name="Pobitro Debnath"
    website-address="www.pobitrodeb.com"
    mobile-nmber="233043311"
   > </contact-details>

   <contact-details
    name="Rahul Das "
    website-address="www.rahul.com"
    mobile-nmber="01212124"
   > </contact-details>

   <contact-details
    name="Anup "
    website-address="www.anup.com"
    mobile-nmber =""
   > </contact-details>

</template>

<script>
export default {
    
    data() {
        return {
            message: "Test App Successfully Run "
        }
    },
   
}
</script>

<style>

</style>