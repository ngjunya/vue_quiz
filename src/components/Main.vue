<template>
     <div >
    <!-- <div v-if="selected==0">
    <Selection />
    </div> -->
    <!-- <div v-else> -->
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
  <!-- </div> -->


</template>

<script>
import Header from './Header.vue'
import QuestionBox from './QuestionBox.vue'
import Result from './Result.vue'

const axios=require('axios');

export default {
  components: {
    Header,
    QuestionBox,
    Result,
  },
  data(){
    return {
      questions:[],
      index:0,
      numCorrect:0,
      numTotal:0,
      selected:this.$store.state.selected
    }
  },
  methods:{
    next(){
      this.index++
    },
    increment(isCorrect){
      if(isCorrect){
        this.numCorrect++
      }
      this.numTotal++
    }
  }
  ,
  mounted:function(){
    axios.get(this.$store.state.questionAPI)
    .then((response)=>{
      this.questions=response.data.results;
    })
    .catch((error)=>{
      console.log(error);
    })
}
}
  



</script>