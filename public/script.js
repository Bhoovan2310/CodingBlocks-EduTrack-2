fetch('/users')
  .then(response => response.json())
  .then(data => {
    renderPieChartByCourseType(data);
    renderPieChartByCountry(data);
  })
  .catch(error => console.error('Error fetching user data:', error));

function renderPieChartByCourseType(data) {
  const courseTypeCounts = data.reduce((acc, user) => {
    acc[user.courseEnrollment.type] = (acc[user.courseEnrollment.type] || 0) + 1;
    return acc;
  }, {});

  const pieData = Object.entries(courseTypeCounts).map(([type, count]) => ({
    type,
    count,
  }));

  renderPieChart('#pie-chart-course-type', pieData);
}

function renderPieChartByCountry(data) {
  const countsByCountry = data.reduce((acc, user) => {
    const country = user.country || 'Unknown';
    const continent = user.continent || 'Unknown';
    if (!acc[continent]) {
      acc[continent] = {};
    }
    if (!acc[continent][country]) {
      acc[continent][country] = { classroom: 0, online: 0, total: 0 };
    }
    acc[continent][country][user.courseEnrollment.type]++;
    acc[continent][country].total++;
    return acc;
  }, {});

  const pieData = [];

  for (const continent in countsByCountry) {
    for (const country in countsByCountry[continent]) {
      const count = countsByCountry[continent][country];
      const total = count.total;
      const classroomPercentage = total > 0 ? (count.classroom / total) * 100 : 0;
      const onlinePercentage = total > 0 ? (count.online / total) * 100 : 0;

      pieData.push({
        continent,
        country,
        classroomPercentage: classroomPercentage.toFixed(2), // Format percentage
        onlinePercentage: onlinePercentage.toFixed(2),
      });
    }
  }

  renderPieChart('#pie-chart-country', pieData);
}

function renderPieChart(selector, data) {
  const width = 400;
  const height = 400;
  const radius = Math.min(width, height) / 2;

  const color = d3.scaleOrdinal(d3.schemeCategory10);

  const svg = d3.select(selector)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', `translate(<span class="math-inline">\{width / 2\},</span>{height / 2})`);

  const pie = d3.pie()
    .value(d => d.count || d.classroomPercentage); // Use count or percentage

  const arcs = pie(data);

  const arc = d3.arc()
    .innerRadius(0)
    .outerRadius(radius);

  svg.selectAll('path')
    .data(arcs)
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', (d, i) => color(i))
    .attr('stroke', 'white') // Add stroke for better visibility
    .attr('stroke-width', '2px') // Adjust stroke width for clarity
    .append('title')
    .text(d => {
      const label = d.data.country ? `<span class="math-inline">\{d\.data\.country\} \(</span>{d.data.continent})` : `${d.data.type}`;
      const value = d.data.count ? d.data.count : `${d.data.classroomPercentage}%`;
      return `${label}: ${value}`;
    }); // Improved tooltip text

  // Add legend (optional, provide CSS styles for presentation)
  const legend = svg.selectAll('.legend')
    .data(data)
    .enter()
    .append('g')
    .attr('class', 'legend')
    .attr('transform', (d, i) => `translate(0,${i * 20})`);

  legend.append('rect')
    .attr('x', width / 2 - 1 )
}
