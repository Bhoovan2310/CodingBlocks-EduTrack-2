document.addEventListener('DOMContentLoaded', function() {
    // Fetch USERS data from the server
    fetch('/all')
        .then(response => response.json())
        .then(userData => {
            createContinentPieChart(userData);
            createCoursePieChart(userData);
        })
        .catch(error => console.error('Error fetching user data:', error));
});

// Function to create pie chart for continents
// function createContinentPieChart(userData) {
//     const continents = {};
//     userData.forEach(user => {
//         if (!continents[user.continent]) {
//             continents[user.continent] = 0;
//         }
//         continents[user.continent]++;
//     });

//     // Create pie chart using D3.js
//     const width = 400;
//     const height = 400;
//     const radius = Math.min(width, height) / 2;

//     const color = d3.scaleOrdinal(d3.schemeCategory10);

//     const svg = d3.select('#pie-chart-country')
//         .append('svg')
//         .attr('width', width)
//         .attr('height', height)
//         .append('g')
//         .attr('transform', `translate(${width / 2},${height / 2})`);

//     const pie = d3.pie()
//         .value(d => d[1]);

//     const arcs = pie(Object.entries(continents));

//     const arc = d3.arc()
//         .innerRadius(0)
//         .outerRadius(radius);

//     svg.selectAll('path')
//         .data(arcs)
//         .enter()
//         .append('path')
//         .attr('d', arc)
//         .attr('fill', (d, i) => color(i))
//         .append('title')
//         .text(d => `${d.data[0]}: ${d.data[1]}`);
// }

// // Function to create pie chart for courses
// function createCoursePieChart(userData) {
//     const courses = {};
//     userData.forEach(user => {
//         user.courseEnrollment.Details.forEach(course => {
//             if (!courses[course.name]) {
//                 courses[course.name] = 0;
//             }
//             courses[course.name]++;
//         });
//     });

//     // Create pie chart using D3.js
//     const width = 400;
//     const height = 400;
//     const radius = Math.min(width, height) / 2;

//     const color = d3.scaleOrdinal(d3.schemeCategory10);

//     const svg = d3.select('#pie-chart-course-type')
//         .append('svg')
//         .attr('width', width)
//         .attr('height', height)
//         .append('g')
//         .attr('transform', `translate(${width / 2},${height / 2})`);

//     const pie = d3.pie()
//         .value(d => d[1]);

//     const arcs = pie(Object.entries(courses));

//     const arc = d3.arc()
//         .innerRadius(0)
//         .outerRadius(radius);

//     svg.selectAll('path')
//         .data(arcs)
//         .enter()
//         .append('path')
//         .attr('d', arc)
//         .attr('fill', (d, i) => color(i))
//         .append('title')
//         .text(d => `${d.data[0]}: ${d.data[1]}`);
// }


// Function to create pie chart for continents
function createContinentPieChart(userData) {
    const continents = {};
    userData.forEach(user => {
        if (!continents[user.continent]) {
            continents[user.continent] = 0;
        }
        continents[user.continent]++;
    });

    const width = 400;
    const height = 400;
    const radius = Math.min(width, height) / 2;

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const svg = d3.select('#pie-chart-country')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${width / 2},${height / 2})`);

    const pie = d3.pie()
        .value(d => d[1]);

    const arcs = pie(Object.entries(continents));

    const arc = d3.arc()
        .innerRadius(0)
        .outerRadius(radius);

    svg.selectAll('path')
        .data(arcs)
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', (d, i) => color(i))
        .append('title')
        .text(d => `${d.data[0]}: ${d.data[1]}`);

    // Add text labels
    svg.selectAll('text')
        .data(arcs)
        .enter()
        .append('text')
        .attr('transform', d => `translate(${arc.centroid(d)})`)
        .attr('dy', '0.35em')
        .attr('text-anchor', 'middle')
        .text(d => `${d.data[0]} (${d.data[1]})`);
}

// Function to create pie chart for courses
function createCoursePieChart(userData) {
    const courses = {};
    userData.forEach(user => {
        user.courseEnrollment.Details.forEach(course => {
            if (!courses[course.name]) {
                courses[course.name] = 0;
            }
            courses[course.name]++;
        });
    });

    const width = 400;
    const height = 400;
    const radius = Math.min(width, height) / 2;

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const svg = d3.select('#pie-chart-course-type')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g')
        .attr('transform', `translate(${width / 2},${height / 2})`);

    const pie = d3.pie()
        .value(d => d[1]);

    const arcs = pie(Object.entries(courses));

    const arc = d3.arc()
        .innerRadius(0)
        .outerRadius(radius);

    svg.selectAll('path')
        .data(arcs)
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', (d, i) => color(i))
        .append('title')
        .text(d => `${d.data[0]}: ${d.data[1]}`);

    // Add text labels
    svg.selectAll('text')
        .data(arcs)
        .enter()
        .append('text')
        .attr('transform', d => `translate(${arc.centroid(d)})`)
        .attr('dy', '0.35em')
        .attr('text-anchor', 'middle')
        .text(d => `${d.data[0]} (${d.data[1]})`);
}



