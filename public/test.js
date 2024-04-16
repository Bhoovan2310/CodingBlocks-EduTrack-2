document.addEventListener('DOMContentLoaded', function () {
    fetch('/all')
        .then(response => response.json())
        .then(data => {
            // Process data to count users per continent
            const continentCount = {};
            data.forEach(user => {
                const continent = user.continent;
                continentCount[continent] = (continentCount[continent] || 0) + 1;
            });

            // Create pie chart for continents
            const ctx = document.getElementById('userChart').getContext('2d');
            const userChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: Object.keys(continentCount),
                    datasets: [{
                        label: 'Users by Continent',
                        data: Object.values(continentCount),
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.5)',
                            'rgba(54, 162, 235, 0.5)',
                            'rgba(255, 206, 86, 0.5)',
                            'rgba(75, 192, 192, 0.5)',
                            'rgba(153, 102, 255, 0.5)',
                            'rgba(255, 159, 64, 0.5)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                }
            });

            // Process data to count users per course
            const courseCount = {};
            data.forEach(user => {
                user.courseEnrollment.Details.forEach(course => {
                    const courseName = course.name;
                    courseCount[courseName] = (courseCount[courseName] || 0) + 1;
                });
            });

            // Create pie chart for courses
            const ctx2 = document.getElementById('courseChart').getContext('2d');
            const courseChart = new Chart(ctx2, {
                type: 'pie',
                data: {
                    labels: Object.keys(courseCount),
                    datasets: [{
                        label: 'Enrollment by Course',
                        data: Object.values(courseCount),
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.5)',
                            'rgba(54, 162, 235, 0.5)',
                            'rgba(255, 206, 86, 0.5)',
                            'rgba(75, 192, 192, 0.5)',
                            'rgba(153, 102, 255, 0.5)',
                            'rgba(255, 159, 64, 0.5)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                }
            });

            // Process data to count users per course (for the bar chart)
            const courseCountForBarChart = {};
            data.forEach(user => {
                user.courseEnrollment.Details.forEach(course => {
                    const courseName = course.name;
                    courseCountForBarChart[courseName] = (courseCountForBarChart[courseName] || 0) + 1;
                });
            });

            // Create bar chart for courses
            const ctx3 = document.getElementById('courseBarChart').getContext('2d');
            const courseBarChart = new Chart(ctx3, {
                type: 'bar',
                data: {
                    labels: Object.keys(courseCountForBarChart),
                    datasets: [{
                        label: 'Enrollment by Course',
                        data: Object.values(courseCountForBarChart),
                        backgroundColor: 'rgba(255, 99, 132, 0.5)', // Red color for bars
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
