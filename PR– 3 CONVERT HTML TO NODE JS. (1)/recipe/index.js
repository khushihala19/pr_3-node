const express = require('express');
const { validator } = require('./middleware');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.urlencoded());
let initialRecipe = [
    {
      name: 'Spaghetti Carbonara',
      description: 'A classic Italian pasta dish.',
      preparationTime: '15 minutes',
      cookingTime: '15',
      imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/carbonara-index-6476367f40c39.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*',
      country: "India",
      veg: true,
      id: 1
    }
  ]

  
app.listen(8090, () => {
    console.log("  listening on port http://localhost:8090");

})