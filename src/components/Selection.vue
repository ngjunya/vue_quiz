<template>
    <div class="top">
        <h2>Welcome to Dragon Quiz App</h2>
        <p><i>Designed by Ng Jun Ya</i></p>
        <div class="container">
        <router-link v-bind:to="'/'+this.$store.state.type"><b-button id="Computer" class="Selection" @click="select($event)">Computer</b-button></router-link>
        <br>
        <br>
        <router-link v-bind:to="'/'+this.$store.state.type"><b-button id="Mathematic" class="Selection" @click="select($event)">Mathematic</b-button></router-link>
        <br>
        <br>
        <router-link v-bind:to="'/'+this.$store.state.type"><b-button id="Sports" class="Selection" @click="select($event)">Sports</b-button></router-link>
        <br>
        <br>
        <router-link v-bind:to="'/'+this.$store.state.type"><b-button id="Vehicle" class="Selection" @click="select($event)">Vehicle</b-button></router-link>
        </div>
    </div>


</template>

<script>
export default{
    methods:{
        select(event){
            this.$store.state.type=event.currentTarget.id
            if(event.currentTarget.id=="Computer"){
                this.$store.state.questionAPI="https://opentdb.com/api.php?amount=10&category=18"
            }else if(event.currentTarget.id=="Vehicle"){
                this.$store.state.questionAPI="https://opentdb.com/api.php?amount=10&category=28"
            }else if(event.currentTarget.id=="Sports"){
                this.$store.state.questionAPI="https://opentdb.com/api.php?amount=10&category=21"
            }else if(event.currentTarget.id=="Mathematic"){
                this.$store.state.questionAPI="https://opentdb.com/api.php?amount=10&category=19"
            
        }
}
}
}

</script>

<style scoped>


.Selection{
    width: 420px;
    height: 80px;
    font-size: 30px;
    background-color:paleturquoise;
    border-radius: 40px;
    color:slateblue;
}

.container{
    padding-top: 1%;
}

.Selection:hover{
    background-color: turquoise;
}

</style>