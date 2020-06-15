import axios from 'axios';


function getRate() {
  console.log('hererate1')
  return axios.get(`https://blockchain.info/tobtc?currency=USD&value=1&cors=true`)
      .then(res => {
        localStorage.setItem('BitcoinRate',JSON.stringify(res.data))
        const rate= res.data;
        console.log('hererate2', rate)
        return rate
  })
}


function  getMarketPrice(){
  console.log('herererer')
  return axios.get ('https://api.blockchain.info/charts/market-price?timespan=1year&format=json&cors=true')
  .then(res => {
    localStorage.setItem('Marketprice',JSON.stringify(res.data))
    let prices= res.data;
   console.log('prices', prices) 
    return prices 
})
}

  function getConfirmedTransactions(){

  }
  export default {
    getRate,
    getMarketPrice,
    getConfirmedTransactions
  }