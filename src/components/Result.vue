<template>
<div id="test">

<b-container class="bv-example-row">
  <b-row>
    <b-col> </b-col>
    <b-col><lottie-player class="animation" src="https://assets5.lottiefiles.com/private_files/lf30_CCLano.json"  background="transparent"  speed="2"  style="width: 450px; height: 250px;" loop autoplay ></lottie-player></b-col>
    <b-col> </b-col>
  </b-row>
</b-container>
    <div class="title">   
       <h2><b>Quiz Completed!!!</b></h2>
    <div class="content">
        <h3>Correct : {{numCorrect}}</h3>
        <h3>Wrong  :  {{numTotal-numCorrect}}</h3>
        <h3>Percentage : {{(numCorrect/numTotal)*100}}% </h3>

    </div>
    </div>
</div>
</template>


<script>
export default{
    props:[
        'numCorrect',
        'numTotal'
    ]
}
</script>

<style scoped>
.title{
    font-size: 40px;
}



</style>