var BolsaEndModule = (function(){

    var errorMessage = function () {
        alert("Los datos no se han encontrado, lamentamos las molestias");
    };

    return {
            getBolsaData : async function (callback) {
                await Promise.resolve(axios.get('/Bolsa/' + document.getElementById('function').value + '/' + document.getElementById('symbol').value))
                    .then(function (response) {
                        document.getElementById("Bolsadata").innerHTML = "";
                        document.getElementById("Bolsadata").innerHTML = JSON.stringify(response.data);

                    })
                    .catch(function () {
                        errorMessage();
                    });
                }
     };


})();
var informationModule = (function(){
    var metadata = new Array();
    return{
        getMetadata : function(){
            return metadata;
        },
        setMetadata : function(datemeta, openmeta, lowmeta, closemeta, volumemeta){
            metadata.push({date : datemeta, open : openmeta, high: highmeta, low : lowmeta, close : closemeta, volume : volumemeta});
        }
    }
})();