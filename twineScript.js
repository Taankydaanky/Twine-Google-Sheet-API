//Change this variable to the Link from your google sheet API
var destination = 'INSERT YOUR WEB-APP LINK HERE';
Macro.add("save", { // I use the motoslave way to declare a new macro
handler: function(){ // this part seems common to all ways so it can't be wrong..?
console.log("save");
	
            var data = 'data={"id":'+SugarCube.State.variables.id+',"name":"'+SugarCube.State.variables.name+'","highScore":'+SugarCube.State.variables.highscore+',"score1":'+SugarCube.State.variables.score1+',"score2":'+SugarCube.State.variables.score2+',"score3":'+SugarCube.State.variables.score3+',"score4":'+SugarCube.State.variables.score4+'}';
            $.ajax({
                url: destination,
                method: "GET",
                dataType: "json",
                data: data,
                success: function (data) {
                    console.log(data);
                    //Add ypur variables here
                    SugarCube.State.variables.savedId = data.id;
                    SugarCube.State.variables.id = data.id;
                    SugarCube.State.variables.score1 = data.score1;
                    SugarCube.State.variables.score2 = data.score2;
                    SugarCube.State.variables.score3 = data.score3;
                    SugarCube.State.variables.score4 = data.score4;
                    SugarCube.State.variables.highscore = data.highScore;
                    SugarCube.State.variables.name = data.name;
                    new Wikifier(null, "<<run memorize('id', $id)>>");
                    new Wikifier(null, "<<run memorize('score1', $score1)>>");
                    new Wikifier(null, "<<run memorize('score2', $score2)>>");
                    new Wikifier(null, "<<run memorize('score3', $score3)>>");
                    new Wikifier(null, "<<run memorize('score4', $score4)>>");
                    new Wikifier(null, "<<run memorize('name', $name)>>");
                    new Wikifier(null, "<<run memorize('highscore', $highscore)>>");
                }
            }).done(function () {
                console.log("done");
							$("#get").click(function () {
            $.ajax({
                type: "GET",
                url: destination,
                success: function (data) {
                    console.log(data);
                }
            });

        });
            }).fail(function () {

            });
        
  
} // handler function
} // definition
); // macro
Macro.add("load", {
	handler: function(){
		console.log("load");
        
            $.ajax({
                type: "GET",
                url: destination,
                success: function (data) {
                    console.log(data);
                    data.forEach(e => {
											console.log(e[0]);
											console.log(SugarCube.State.variables.id);
                        if (e[0] == SugarCube.State.variables.id) {
                          SugarCube.State.variables.id = e[0];
													SugarCube.State.variables.score1 = e[3];
													SugarCube.State.variables.score2 = e[4];
													SugarCube.State.variables.score3 = e[5];
													SugarCube.State.variables.score4 = e[6];
													SugarCube.State.variables.highscore = e[2];
													SugarCube.State.variables.name = e[1];
													new Wikifier(null, "<<run memorize('id', $id)>>");
													new Wikifier(null, "<<run memorize('score1', $score1)>>");
													new Wikifier(null, "<<run memorize('score2', $score2)>>");
													new Wikifier(null, "<<run memorize('score3', $score3)>>");
													new Wikifier(null, "<<run memorize('score4', $score4)>>");
													new Wikifier(null, "<<run memorize('name', $name)>>");
													new Wikifier(null, "<<run memorize('highscore', $highscore)>>");
                            console.log(e[1]);
                        } 
                    });
                }
            });
        
	}});