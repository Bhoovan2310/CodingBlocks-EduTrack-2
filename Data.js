const { faker } = require('@faker-js/faker');
const lookup = require('country-code-lookup');

function createRandomUser() {
  const courseEnrollment = {
    type: faker.helpers.arrayElements(['classroom', 'online'])[0],
    courseName: faker.helpers.arrayElement(['AI/ML', 'IoT', 'Web Development', 'Android Development'])
  };
  
  const continentName = faker.helpers.arrayElement(['Asia','Africa','NorthAmerica','SouthAmerica','Europe','Australia']);

   const countryCode = faker.location.countryCode();

//    console.log(countryCode);

  const data = lookup.byIso(countryCode);

//   console.log(data);

  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
    courseEnrollment: courseEnrollment,
    country: data.country,
    continent: data.continent,
  };
}

const USERS = Array.from({ length: 20 }, createRandomUser);

module.exports = USERS;
