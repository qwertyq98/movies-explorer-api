const mongoose = require('mongoose');
const validator = require('validator');
const { Schema } = require('mongoose');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: [true, 'Укажите страну создания фильма'],
  },
  director: {
    type: String,
    required: [true, 'Укажите режиссёра фильма'],
  },
  duration: {
    type: Number,
    required: [true, 'Укажите длительность фильма'],
  },
  year: {
    type: String,
    required: [true, 'Укажите год выпуска фильма'],
  },
  description: {
    type: String,
    required: [true, 'Укажите описание фильма'],
  },
  image: {
    type: String,
    required: [true, 'Укажите ссылку на постер к фильму'],
    validate: {
      validator: (link) => validator.isURL(link),
      message: 'Указана неверная ссылка',
    },
  },
  trailerLink: {
    type: String,
    required: [true, 'Укажите ссылку на трейлер фильма'],
    validate: {
      validator: (link) => validator.isURL(link),
      message: 'Указана неверная ссылка',
    },
  },
  thumbnail: {
    type: String,
    required: [true, 'Укажите ссылку на постер к фильму'],
    validate: {
      validator: (link) => validator.isURL(link),
      message: 'Указана неверная ссылка',
    },
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: [true, 'Укажите пользователя'],
  },
  movieId: [{
    type: Number,
    required: [true, 'Укажите id фильма'],
  }],
  nameRU: {
    type: String,
    required: [true, 'Укажите фильма на русском языке'],
  },
  nameEN: {
    type: String,
    required: [true, 'Укажите фильма на английском языке'],
  },
});

module.exports = mongoose.model('movie', movieSchema);
