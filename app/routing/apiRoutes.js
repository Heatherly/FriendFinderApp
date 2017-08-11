var friends = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        var difference = 1000; //MAKE THIS LARGEST TO SO THE difference WILL ALWAYS BE HIGHER THAN totalDifference
        var matchName = "";
        var matchPhoto = "";

        var userData = req.body;

        for (var i = 0; i < friends.length; i++) {
            var matchScores = [];
            var totalDifference = 0;

            for (var j = 0; j < 10; j++) {
                matchScores.push(
                    Math.abs(
                        parseInt(userData.scores[j]) -
                            parseInt(friends[i].scores[j])
                    )
                );

                totalDifference = matchScores.reduce(function(total, amount) {
                    return total + amount;
                });
            }
            // console.log(friends[i].name + ": " + totalDifference);

            if (totalDifference < difference) {
                difference = totalDifference;
                matchName = friends[i].name;
                matchPhoto = friends[i].photo;
            }
        }
        //Once the cycle is complete, the friend with the least difference will remain, and that data will be sent as a json object back to the client
        res.json({ name: matchName, photo: matchPhoto });

        //Lastly, push new User's data into the friends array
        friends.push(userData);
    });
};
