var friendsData = require("../data/friends");

module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
      friendsData.unshift(req.body); //unshift adds to the start of array
      res.json(true);

      /* PSUEDO CODE
 	
	  compare currentUser's answers to EACH user already in the friendsArray
	  add up differences in answer values

	  matchedFriend = the user with the LEAST difference in answer values



      */
  });
}