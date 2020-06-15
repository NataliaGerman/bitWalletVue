import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    data1: {
      type: Array,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  data(){
    return{
      chartdata:{
        datasets:[
          {
            data: this.data1
          }
        ]
      }
    }
  },
  mounted () {
    console.log('this.chartdata',this.chartdata)
    this.renderChart(this.chartdata, this.options)
  }
}