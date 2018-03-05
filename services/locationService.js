const axios = require('axios');

function urlBuilder(apiKey, query, location, radius){
  return "https://maps.googleapis.com/maps/api/place/textsearch/json?key="+ apiKey + "&query=" + query + "&location=" + location + "&radius=" + radius;
}

// console.log(urlBuilder(process.env.GOOGLEAPIKEY , "clothing", "51.5074,0.1278" , "1000"))
function fetchData(cb){
  let endPointUrl = urlBuilder(process.env.GOOGLEAPIKEY , "clothing", "51.5074,0.1278" , "1000")
  axios({
      method: 'get',
      url: endPointUrl
    })
      .then(function(response){
        cb(null, response)
      })
      .catch(function(err){
        cb(err, null)
      })
}

fetchData(function(err, response){
  if (err){
    return console.log(err)
  }
  console.log(response)
})

module.exports=fetchData;
