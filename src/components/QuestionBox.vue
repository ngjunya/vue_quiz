<template>
    <div class="question-box-container">
        <b-jumbotron>
    <template slot=lead>
      {{currentQuestion.question}}
    </template>

    <hr class="my-4">
    <b-list-group>
    <b-list-group-item v-for="(answer,index) in answers" 
    :key="index" 
    @click="selectAnswer(index)"
    :class="answerClass(index)"
     >
    {{answer}}</b-list-group-item>
    </b-list-group>
    

    <b-button 
    variant="primary"
    @click="submitAnswer"
    :disabled="selectedIndex===null || answered"
    >Submit</b-button>
    <b-button variant="success" @click="next" href="#" :disabled='submitted===0'>Next</b-button>
  </b-jumbotron>
</div>

</template>

<script>
import _ from 'lodash'

export default{
  props:{
    currentQuestion:Object,
    next:Function,
    increment:Function
  },
  data(){
    return {
      selectedIndex:null,
      shuffledAnswer:[],
      answered:false,
      correctIndex:null,
      submitted:this.$store.state.submitted
    }
  },
  computed:{
    answers(){
      let answers=[...this.currentQuestion.incorrect_answers]
      answers.push(this.currentQuestion.correct_answer)
      return answers;
    }
  }
  ,
  watch:{
    currentQuestion:{
      immediate:true,
      handler(){
        this.selectedIndex=null
        this.shuffleAnswers()
        this.answered=false
        this.submitted=0
      }
    }
    
    // {
    //   this.selectedIndex=null
    //   this.shuffleAnswers()
    // }
  }
  ,
  methods:{
    selectAnswer(index){
      this.selectedIndex=index;
    },
    shuffleAnswers(){
      let answers=[...this.currentQuestion.incorrect_answers,this.currentQuestion.correct_answer]
      this.shuffledAnswer= _.shuffle(answers)
      this.correctIndex=this.shuffledAnswer.indexOf(this.currentQuestion.correct_answer)
    },
    submitAnswer(){
      let isCorrect=false
      if(this.selectedIndex===this.correctIndex){
        isCorrect=true
      }
    this.increment(isCorrect)
    this.answered=true
    this.submitted=1
    this.$store.commit('Bsubmit')
    },
    answerClass(index){
    let answerClass=' '
    if(!this.answered && this.selectedIndex===index){
      answerClass='selected'
    }else if(this.answered && this.correctIndex===index){
      answerClass='correct'
    }else if(this.answered && this.selectedIndex===index && this.correctIndex!==index){
      answerClass='incorrect'
    }
    return answerClass
    }
  }
  
}
</script>

<style scoped>
.list-group{
  margin-bottom:15px;
}

.list-group-item:hover{
 background-color: #EEE;
 cursor:pointer;
}


.btn{
  margin:0 5px;
}

.selected{
  background-color:lightblue;
}

.correct{
  background-color:lightgreen;
}

.incorrect{
  background-color: red;
}

</style>