import BitcoinService from '../services/BitcoinService.js';
const BitcoinModule = {
  strict: true,
  namespaced: true,
  state: {
    bitcoinRate: null,
    marketPrices:[]
        },

  mutations: {
    setRate(state,{rate}){
      state.bitcoinRate=parseInt(1/rate)
    },
    setMarketPrices(state,{rates}){
      console.log('storerates',rates )
      state.marketPrices=rates
      console.log('storerates',state.marketPrices )
    }
  },
  getters: {
  },
  actions: {
    getRate(context){
      console.log('CONTEXT', context);
      return BitcoinService.getRate()
      .then (rate=>{ 
         context.commit({type:'setRate', rate})
      })
    },
     getMarketPrices(context){
       console.log('asking for market prices')
       return  Promise.resolve(JSON.parse(localStorage.getItem('Marketprice')))
       .then (rates=>{
         console.log('hhhhhh')
        context.commit({type:'setMarketPrices', rates})
       })

     }
  }
}



export default BitcoinModule;
