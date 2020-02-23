var activeChart;
DrawChart();

function Labels()
{
    var days = []
    for (let i=1; i<=30 ;i++)
        days.push("Day " + i);
    return days;
}

function DrawChart()
{
    if (activeChart)
        activeChart.destroy();

    var chx = document.getElementById('chart');
    activeChart = Chart.Line(chx, {
        data: {
            labels: Labels(),
            datasets: datasets
        },
        options: {
            elements: {
                line: { fill: false, tension: 0.1 },
                point: {
                    borderWidth: 1,
                    radius: 5,
                    hoverRadius: 6,
                    hoverBorderWidth: 2,
                    hoverBackgroundColor: "white"
                }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        stepSize: 5,
                        suggestedMax: 10
                    }
                }]
            }
        }
    });
}