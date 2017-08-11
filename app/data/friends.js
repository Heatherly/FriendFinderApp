// console.log("friends.js loaded")
var friends = [
  {
    name: "Ahmed",
    photo:
      "https://cdn.pixabay.com/photo/2017/07/07/19/42/man-2482464_960_720.jpg",
    scores: [1, 2, 4, 2, 2, 3, 1, 1, 5, 5]
  },
  {
    name: "John",
    photo:
      "https://cdn.pixabay.com/photo/2017/05/22/19/06/male-2334963_960_720.jpg",
    scores: [5, 4, 3, 3, 4, 2, 1, 1, 3, 4]
  },
  {
    name: "Jennifer",
    photo:
      "https://cdn.pixabay.com/photo/2015/01/08/15/46/woman-593141_960_720.jpg",
    scores: [2, 2, 3, 4, 2, 1, 1, 1, 5, 5]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;
