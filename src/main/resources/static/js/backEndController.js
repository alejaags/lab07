var searchMovie = (function(){

    var errorMessage = function () {
        alert("ERROR");
    };

    return {
            getInfo : async function (callback) {
                await Promise.resolve(axios.get('/Movie/' + document.getElementById('titl').value + '/' + document.getElementById('yea').value))
                    .then(function (response) {
                        console.log("TEST")
                        document.getElementById("resp").innerHTML = JSON.stringify(response.data);

                    })
                    .catch(function () {
                        errorMessage();
                    });
            }
        };


})();
