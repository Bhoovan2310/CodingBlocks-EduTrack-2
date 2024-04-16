const {
    faker
} = require('@faker-js/faker');
const lookup = require('country-code-lookup');

function createRandomUser() {


    //The courses List;
    const courses = [{
            id: 1,
            name: 'Master Interview Questions for FAANG & Product Companies',
            price: getRandomPrice(),
            type: faker.helpers.arrayElements(['classroom', 'online'])[0]
        },
        {
            id: 2,
            name: 'C++ Standard Template Library',
            price: getRandomPrice(),
            type: faker.helpers.arrayElements(['classroom', 'online'])[0]
        },
        {
            id: 3,
            name: 'Dynamic Programming - Must Do Problem Set',
            price: getRandomPrice(),
            type: faker.helpers.arrayElements(['classroom', 'online'])[0]
        },
        {
            id: 4,
            name: 'Python Fundamentals',
            price: getRandomPrice(),
            type: faker.helpers.arrayElements(['classroom', 'online'])[0]
        },
        {
            id: 5,
            name: 'C++ Fundamentals',
            price: getRandomPrice(),
            type: faker.helpers.arrayElements(['classroom', 'online'])[0]
        },
        {
            id: 6,
            name: 'Algo.java | Data Structures and Algorithms',
            price: getRandomPrice(),
            type: faker.helpers.arrayElements(['classroom', 'online'])[0]
        },
        {
            id: 7,
            name: 'Java Master Course | Crux',
            price: getRandomPrice(),
            type: faker.helpers.arrayElements(['classroom', 'online'])[0]
        },
        {
            id: 8,
            name: 'C++ Master Course | Launchpad',
            price: getRandomPrice(),
            type: faker.helpers.arrayElements(['classroom', 'online'])[0]
        },
        {
            id: 9,
            name: 'Building Web Apps with React JS',
            price: getRandomPrice(),
            type: faker.helpers.arrayElements(['classroom', 'online'])[0]
        },
        {
            id: 10,
            name: 'Backend Web Development using Node.js',
            price: getRandomPrice(),
            type: faker.helpers.arrayElements(['classroom', 'online'])[0]
        },
        {
            id: 11,
            name: 'Web Development Frontend (HTML/CSS)',
            price: getRandomPrice(),
            type: faker.helpers.arrayElements(['classroom', 'online'])[0]
        },
        {
            id: 12,
            name: 'Graph Algorithms',
            price: getRandomPrice(),
            type: faker.helpers.arrayElements(['classroom', 'online'])[0]
        },
        {
            id: 13,
            name: 'Dynamic Programming',
            price: getRandomPrice(),
            type: faker.helpers.arrayElements(['classroom', 'online'])[0]
        },
        {
            id: 14,
            name: 'Competitive Programming',
            price: getRandomPrice(),
            type: faker.helpers.arrayElements(['classroom', 'online'])[0]
        },
        {
            id: 15,
            name: 'Python for Data Science',
            price: getRandomPrice(),
            type: faker.helpers.arrayElements(['classroom', 'online'])[0]
        },
        {
            id: 16,
            name: 'Data Science Master Course',
            price: getRandomPrice(),
            type: faker.helpers.arrayElements(['classroom', 'online'])[0]
        },
        {
            id: 17,
            name: 'Machine Learning Fundamentals',
            price: getRandomPrice(),
            type: faker.helpers.arrayElements(['classroom', 'online'])[0]
        },
        {
            id: 18,
            name: 'C++ for Class X|| Boards',
            price: getRandomPrice(),
            type: faker.helpers.arrayElements(['classroom', 'online'])[0]
        },
        {
            id: 19,
            name: 'Java for Class 12th Practical',
            price: getRandomPrice(),
            type: faker.helpers.arrayElements(['classroom', 'online'])[0]
        },
        {
            id: 20,
            name: 'Kotlin for Beginners',
            price: getRandomPrice(),
            type: faker.helpers.arrayElements(['classroom', 'online'])[0]
        },
        {
            id: 21,
            name: 'Full Stack Web Development with NodeJS Master Course',
            price: getRandomPrice(),
            type: faker.helpers.arrayElements(['classroom', 'online'])[0]
        },
        {
            id: 22,
            name: 'Machine Learning Master Course',
            price: getRandomPrice(),
            type: faker.helpers.arrayElements(['classroom', 'online'])[0]
        },
        {
            id: 23,
            name: 'Python for Developers Master Course',
            price: getRandomPrice(),
            type: faker.helpers.arrayElements(['classroom', 'online'])[0]
        },
        {
            id: 24,
            name: 'C++ For Class X|| Boards',
            price: getRandomPrice(),
            type: faker.helpers.arrayElements(['classroom', 'online'])[0]
        },
        {
            id: 25,
            name: 'Machine Learning Fundamentals',
            price: getRandomPrice(),
            type: faker.helpers.arrayElements(['classroom', 'online'])[0]
        },
        {
            id: 26,
            name: 'Web Development Frontend(HTML/CSS)',
            price: getRandomPrice(),
            type: faker.helpers.arrayElements(['classroom', 'online'])[0]
        },
        {
            id: 27,
            name: 'Java Collections Framework',
            price: getRandomPrice(),
            type: faker.helpers.arrayElements(['classroom', 'online'])[0]
        },
        {
            id: 28,
            name: 'Object Oriented Programming Master Course in Java',
            price: getRandomPrice(),
            type: faker.helpers.arrayElements(['classroom', 'online'])[0]
        },
        {
            id: 29,
            name: 'Operating Systems, Computer Networking and DBMS',
            price: getRandomPrice(),
            type: faker.helpers.arrayElements(['classroom', 'online'])[0]
        },
        {
            id: 30,
            name: 'Web Development with Python-Django',
            price: getRandomPrice(),
            type: faker.helpers.arrayElements(['classroom', 'online'])[0]
        },
        {
            id: 31,
            name: 'Selenium with Python',
            price: getRandomPrice(),
            type: faker.helpers.arrayElements(['classroom', 'online'])[0]
        },
        {
            id: 32,
            name: 'CSES problem set',
            price: getRandomPrice(),
            type: faker.helpers.arrayElements(['classroom', 'online'])[0]
        },
        {
            id: 33,
            name: 'Algo++ DSA',
            price: getRandomPrice(),
            type: faker.helpers.arrayElements(['classroom', 'online'])[0]
        },
        {
            id: 34,
            name: 'Deep Learning Fundamentals',
            price: getRandomPrice(),
            type: faker.helpers.arrayElements(['classroom', 'online'])[0]
        },
        {
            id: 35,
            name: 'Android Development using Java',
            price: getRandomPrice(),
            type: faker.helpers.arrayElements(['classroom', 'online'])[0]
        },
        {
            id: 36,
            name: 'Flutter and Dart',
            price: getRandomPrice(),
            type: faker.helpers.arrayElements(['classroom', 'online'])[0]
        },
        {
            id: 37,
            name: 'Digital Marketing Course',
            price: getRandomPrice(),
            type: faker.helpers.arrayElements(['classroom', 'online'])[0]
        },
        {
            id: 38,
            name: 'Blockchain',
            price: getRandomPrice(),
            type: faker.helpers.arrayElements(['classroom', 'online'])[0]
        },
        {
            id: 39,
            name: 'Ace the Placements - C++',
            price: getRandomPrice(),
            type: faker.helpers.arrayElements(['classroom', 'online'])[0]
        }
    ];


    //This Section is to Select the courses.
    const cs = Math.floor((Math.random() * 5) + 1);
    const CoursesEnrolledIn = [];
    for (let i = 0; i < cs; i++) {
        const randomIndex = Math.floor(Math.random() * courses.length);
        CoursesEnrolledIn.push(courses[randomIndex]);
    }

    const courseEnrollment = {
        Details: CoursesEnrolledIn,
    };

    function getRandomPrice() {
        return "₹" + Math.floor((Math.random() * 2000) + 500);
    }

    //This Section Selects the Country And Continent
    const continentName = faker.helpers.arrayElement(['Asia', 'Africa', 'NorthAmerica', 'SouthAmerica', 'Europe', 'Australia']);
    const countryCode = faker.location.countryCode();
    const data = lookup.byIso(countryCode);


    //This is the Main Data Model.
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
 
//This Essentially Creates the Data.
const USERS = Array.from({
    length: 10
}, createRandomUser);

module.exports = USERS;