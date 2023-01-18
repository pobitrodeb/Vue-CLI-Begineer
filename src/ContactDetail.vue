<template>
        <div class="contact-info">
            <h1> Contact Info </h1>  
            <h2>name : {{ name }}</h2> 
            <h3>website : {{ websiteAddress }}</h3> 
            <h4>mobile : {{ mobileNumber }}</h4> 
        </div>
</template>

<script>

export default({
    props: ['name', 'websiteAddress', 'mobileNumber'],
    data() {
        
        // return {
        //     name: "Pobitro Debnath"
        // };
    },
  
});
</script>
<style scoped>
    .contact-info{
        color: rgb(51, 51, 51);
        font-size: 15px;
    }
</style>