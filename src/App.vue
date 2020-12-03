<template>
<div id="app">

  <router-view></router-view>
</div>
  <!-- <div id="app">
    <div v-if="selected==0">
    <Selection />
    </div>
    <div v-else>
    <Header 
   :numCorrect="numCorrect"
   :numTotal="numTotal"
   />
   <div v-if="index<10">
  <b-row>
    <b-col sm="6" offset="3">  
      <QuestionBox 
      v-if="questions.length"
      :currentQuestion="questions[index]"
      :next="next" 
      :increment="increment" />
    </b-col>
  </b-row>
   </div>
  <div v-else> 
    <p>
      <Result 
      :numCorrect="numCorrect"
      :numTotal="numTotal"
   />
    </p>
  </div>
  </div>
  </div> -->
</template>

<script>
/* eslint-disable vue/no-unused-components */
import Header from './components/Header.vue'
import QuestionBox from './components/QuestionBox.vue'
import Result from './components/Result.vue'
import Selection from './components/Selection.vue'


// const axios=require('axios');

export default {
  name: 'App',
  components: {
    Header,
    QuestionBox,
    Result,
    Selection
  }
}
//   data(){
//     return {
//       questions:[],
//       index:0,
//       numCorrect:0,
//       numTotal:0,
//       selected:this.$store.state.selected
//     }
//   },
//   methods:{
//     next(){
//       this.index++
//     },
//     increment(isCorrect){
//       if(isCorrect){
//         this.numCorrect++
//       }
//       this.numTotal++
//     }
//   }
//   ,
//   mounted:function(){
//     axios.get('https://opentdb.com/api.php?amount=10&category=18')
//     .then((response)=>{
//       this.questions=response.data.results;
//     })
//     .catch((error)=>{
//       console.log(error);
//     })
// }
// }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
