var movie = (function(){
	var movie;	
	var year;
	return{
		setMovie : function(title,y){                    
                    movie = title;
					year = y;
		},
                getMovie : function(){
                    return movie;
                },
		resetAll : function(){
			movie = 0;
		}
	}
})();

async function inicio(){
    await getMovie(document.getElementById("titl").value , document.getElementById('yea').value);
    setInfo();
    initialize(document.getElementById("ciudad").value , document.getElementById('yea').value);
}

function setInfo(){
    var m = "";
    m += "The title is: " + movie.getMovie().title+" Year: "+movie.getMovie().year;
    m += " Rated: " + movie.getMovie().rated + " runtime: " + movie.getMovie().runtime;
    m +=  " Director: " + movie.getMovie().director + " Plot: " + movie.getMovie().plot; 
	m += " Languaje: " + movie.getMovie().languaje + " Awards: " + movie.getMovie().awards;
    document.getElementById("resp").innerHTML = m;
}