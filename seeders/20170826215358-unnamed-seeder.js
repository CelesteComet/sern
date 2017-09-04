'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    var arr = [];
    for(let i = 0; i < 200; i++) {
      arr.push({
        UserId: 1,
        name: `Seeded ${i}`,
        location: `Location ${i}`,
        author: `Seeder ${i}`,
        startDate: "2017-09-11T19:00:00.000Z",
        endDate: "2017-09-11T19:00:00.000Z",
        createdAt: '2016-03-31T08:00:10.354Z',
        updatedAt: '2016-03-31T08:00:10.354Z'
      })
    }

    return queryInterface.bulkInsert('Venues', arr)

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
