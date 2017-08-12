// console.log("friends.js loaded")
var friends = [
  {
    name: "Ahmed",
    photo:
      "http://maxpixel.freegreatpicture.com/static/photo/1x/Smile-Person-Brickwall-Blue-Face-Young-Joy-Hair-1885144.jpg",
    scores: [1, 2, 4, 2, 2, 3, 1, 1, 5, 5]
  },
  {
    name: "John",
    photo:
      "http://maxpixel.freegreatpicture.com/static/photo/1x/People-Bold-Portrait-Man-Male-Smile-Elegant-1690965.jpg",
    scores: [5, 4, 3, 3, 4, 2, 1, 1, 3, 4]
  },
  {
    name: "Jennifer",
    photo:
      "http://maxpixel.freegreatpicture.com/photo-1274361",
    scores: [2, 2, 3, 4, 2, 1, 1, 1, 5, 5]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;
