    let ctx = document.getElementById('myChart');
    let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Us(10 states)', 'Us(26 states)', 'Lichtenstein', 'Magnolia', '16 Countries'],
        datasets: [{
            label: '# of Votes',
            data: [14, 12, 5, 7, 0.1],
            barPercentage:0.5,
            backgroundColor: [
                'rgba(219, 88, 44,1)',
                'rgba(219, 88, 44,1)',
                'rgba(219, 88, 44,1)',
                'rgba(219, 88, 44,1)',
                'rgba(219, 88, 44,1)',
                'rgba(219, 88, 44,1)'
            ],
           
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    offsetGridLines: true
                }
            }]
        }
    }
});