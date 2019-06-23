
 var  queryURL = "https://api.giphy.com/v1/gifs/search?q=cartoons&limit=10&api_key=3AXqG4jkC1ZNAYMpx3Zb8NWez16X4CLy"
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });

  
