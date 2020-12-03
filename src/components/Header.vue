<template>
    <div >
        <b-nav tabs>
    <b-nav-item disabled><b>Dragon Quiz App</b></b-nav-item>
    <b-nav-item disabled>Counter:{{numTotal}}/10</b-nav-item>
         </b-nav>
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
