const Venue = require('mongoose').model('Venue');
const VenueDate = require('mongoose').model('VenueDate');

/*
const venueSchema = new Schema({
  title: String,
  location: String,
  description: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dates: [DateSchema],
  images: [String]
});
*/

module.exports = (app) => {
  app.get('/seed/venues', (req, res) => {
    var locations = [
      'Alice House',
      'Bruce House',
      'Taipei 101',
      'Hsinchu',
      'Cupertino',
      'Shimending',
      'Taipei Main Station',
      'Nangang Exhibition Center',
      'Zhongxiao Fuxing',
      'Tamsui'
    ];

    var names = [
      'Apple Festival',
      'Peach Festival',
      'Mango Festival',
      'Hello Kitty Show',
      'Sally Show',
      'Music Concert',
      'Dragon Boat Festival',
      'Mooncake Festival',
      'Magic Show',
      'Comedy Show'
    ]

    const randomDate = () => {
      return {
        date: new Date(+(new Date()) - Math.floor(Math.random()*10000000000)),
        startTime: '10:00 AM',
        endTime: '01:00 PM'
      }
    }

    for (let i = 0; i < locations.length; i++) {
      var venue = {
        location: locations[i],
        geolocation: { lat: 25.055405, lng: 121.617852 },
        title: names[i],
        description: 'This is a great event, come to it now!',
        dates: [randomDate(), randomDate()],
        images: [
          'http://res.cloudinary.com/celestecomet/image/upload/v1505174246/5b57a3eb08c0f0a83ccafff55d17fa6d_c7cd2x.jpg',
          'http://res.cloudinary.com/celestecomet/image/upload/v1505174245/download_mkshae.jpg',
          'http://res.cloudinary.com/celestecomet/image/upload/v1505174226/aino-kishi_zujzbf.jpg'
        ],
        _user: '59b5cb124b5f83217bff723a'
      }
      venue = new Venue(venue);
      venue.save();
    }
  })
}