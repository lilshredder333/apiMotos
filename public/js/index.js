axios.get('http://localhost:9000/api/moto', {
    responseType: 'json'
})

    .then(function(res){
        if(res.status==200) {
            dibuja(res.data)
        }
    })

    .catch(function(err){
        console.log(err)
    })

    function dibuja(motos){
        
    }