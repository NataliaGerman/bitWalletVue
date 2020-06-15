<template>
  <div class="container">
    <line-chart
 
      :data1="data1"
    />
  </div>
</template>


<script>
import LineChart from '../components/chart.js'
 
 export default {
  name: 'ChartPage',

  components: {
     LineChart
      },

//       data(){
//      return{
//     loaded: false,
//  chartdata:{
//       datasets:[
//         {
//           data: this.data1
//         }
//       ]
//     }
//    }
//   },
   created (){
     this.$store.dispatch({ type:"BitcoinModule/getMarketPrices"})
     
   },

    computed:{
     data1(){
       console.log('natalia56')
       let prices= this.$store.state.BitcoinModule.marketPrices.values.map(value=>value.y)
       console.log('prices', prices)
       this.togelLoaded()
       return prices
   }
   },
    methods: {
   togelLoaded(){
     this.loaded=true
   }
   
    }

  // async mounted () {
  //   this.loaded = false
  //   try {
  //     const { userlist } = await fetch('/api/userlist')
  //     this.chartdata = userlist
  //     this.loaded = true
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }
}
</script>

<style lang="scss">

</style>

