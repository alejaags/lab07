var searchMovie = (function(){

    var errorMessage = function () {
        alert("ERROR");
    };

    return {
            getInfo : async function (callback) {
                await Promise.resolve(axios.get('/Movie/' + document.getElementById('titl').value + '/' + document.getElementById('yea').value))
                    .then(function (response) {
                        console.log("TEST")
                        document.getElementById("t").innerHTML = JSON.stringify(response.data.Title);
                        document.getElementById("y").innerHTML = JSON.stringify(response.data.Year);
                        document.getElementById("rated").innerHTML = JSON.stringify(response.data.Rated);
                        document.getElementById("runtime").innerHTML = JSON.stringify(response.data.Runtime);
                        document.getElementById("director").innerHTML = JSON.stringify(response.data.Director);
                        document.getElementById("plot").innerHTML = JSON.stringify(response.data.Plot);
                        document.getElementById("language").innerHTML = JSON.stringify(response.data.Language);
                        document.getElementById("awards").innerHTML = JSON.stringify(response.data.Awards);
                        document.getElementById("awards").innerHTML = JSON.stringify(response.data.Awards);
                        document.getElementById("poster").innerHTML = JSON.stringify(response.data.Poster);
                    })  
                    .catch(function () {
                        errorMessage();
                    });
            }
        };


})();
