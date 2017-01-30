var axios = require('axios')



module.exports = {
  getTemp:function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = '${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}'
    return axios.get('http://api.openweathermap.org/data/2.5/find?q='+location+'&appid=c4e735ea8bd7e7b6dc8368c752517b2d&units=imperial').then(function(res){
      console.log(res)
      return res.data.list[0].main.temp
    },function(err){
      console.log(err)
    })
  }
}
