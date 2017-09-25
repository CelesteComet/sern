const Venue = require('mongoose').model('Venue');
const VenueDate = require('mongoose').model('VenueDate');
const EventBlurb = require('mongoose').model('EventBlurb');

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
          'https://i.pinimg.com/originals/2a/7d/42/2a7d42c26a73d733af03f6076d256921.jpg',
          'https://i.pinimg.com/736x/27/5a/c3/275ac327876192ebb66fba21b12e0b3a--original-sin-japanese-sexy.jpg'
        ],
        blurbs: [
          new EventBlurb({
            heading: "About your host",
            content: "Portrayed by a French newspaper as “the guys who make a living by biking and hitting the town,” we show travelers the best of Paris, sharing our unique connection to the city-preferably on two wheels."
          }),
          new EventBlurb({
            heading: "What we’ll do",
            content: "Discover private entrances and hidden pathways. Together, we’ll take a leisurely ride through the Marais and along Canal Saint Martin to spots you never thought you’d find behind a generic green gate. Visit gardens and barges (boats) with good sandwiches, and see the occasional swing lesson. End the day with drinks in a place that’s loved by locals, a brewery with a street food menu."
          }),
          new EventBlurb({
            heading: "Notes",
            content: "Small groups! You'll ride together with 4 other guests maximum ** Cost of bike rental (up to 4 euros) not included ** Try to be early! We'll wait max 10 minutes (only if you've notified us in advance)"
          })
        ],
        _user: '59b5cb124b5f83217bff723a'
      }
      venue = new Venue(venue);
      venue.save();
    }
  })
}