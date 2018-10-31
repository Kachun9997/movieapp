const mongoose = require('mongoose');
const db = 'mongodb://ckc:abc123@ds241133.mlab.com:41133/ckcmovies';

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('Connected tO database');
  })
  .catch(error => {
    console.log('Mongoose connection error: ', error);
  });

//Title, Year, Genre, Actors, Plot, Poster
const schema = mongoose.Schema({
  title: { type: String },
  year: { type: String },
  genre: { type: String },
  actors: { type: String },
  plot: { type: String },
  poster: { type: String }
});

const Movie = mongoose.model('Movie', schema, 'movieCollection');

module.exports = Movie;
