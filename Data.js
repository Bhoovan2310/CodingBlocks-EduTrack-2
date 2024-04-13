const { faker } = require('@faker-js/faker');
const uuid = require('uuid');

function createRandomUser() {
  const courseEnrollment = {
    type: faker.helpers.arrayElements(['classroom', 'online'])[0],
    courseName: faker.helpers.arrayElement(['AI/ML', 'IoT', 'Web Development', 'Android Development'])
  };

  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
    courseEnrollment: courseEnrollment,
  };
}

const USERS = Array.from({ length: 20 }, createRandomUser);

module.exports = USERS;
