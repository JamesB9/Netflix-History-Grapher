import Form from 'react-bootstrap/Form';
import 'chartjs-adapter-date-fns';
import zoomPlugin from 'chartjs-plugin-zoom';
import { useState, useEffect } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale
} from "chart.js";
import { Scatter } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale,
    zoomPlugin
);

const options = {
    plugins: {
        legend: {
            display: true
        },
        tooltip: {
            callbacks: {
                label: function(context) {
                    let label = context.dataset.label || '';

                    if (label) {
                        label += ': ';
                    }

                    if (context.parsed.y !== null) {
                        label += context.raw.name.trim();
                    }
                    return " "+label;
                },
                title: function(tooltipItems, data) {
                    return (new Date(tooltipItems[0].raw.x)).toDateString()
                },
                footer: function(tooltipItems, data) {
                    return '# ' + tooltipItems[0].raw.y
                },
            }
        },
        zoom: {
            pan: {
                enabled: true
            },
            limits: {
                x: {min: 'original', max: 'original'},
                y: {min: 0, max: 'original'}
            },
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true
              },
              mode: 'xy',
            }
        }
        
    },
    scales: {
        x: {
            type: 'time',
            title: {
                text: 'Date Watched',
                display: true
            }
        },
        y: {
            beginAtZero: true,
            title: {
                text: '# of Episodes Watched',
                display: true
            }
        }
    }
}

const data = {
    datasets: [{
        data: [{
            x: '2020-11-06',
            y: 50
        }, {
            x: '2021-11-07',
            y: 60
        }, {
            x: '2021-11-08',
            y: 20
        }],
        label: "test",
        borderColor: 'black',
        borderWidth: 1,
        pointBackgroundColor: ['#000', '#00bcd6', '#d300d6'],
        pointBorderColor: ['#000', '#00bcd6', '#d300d6'],
        pointRadius: 0,
        pointHoverRadius: 5,
        fill: false,
        tension: 0,
        showLine: true
    }]
}

export default function EpisodeScatterGraph(props) {
    const historyData = props.historyData;

    // SERIES STUFF
    //["Star Trek", "Star Trek: The Next Generation", "Star Trek: Deep Space Nine", "Star Trek: Voyager", "Star Trek: Enterprise", "Star Trek: Discovery"]
    var plots = ["Star Trek", "Star Trek: The Next Generation", "Star Trek: Deep Space Nine", "Star Trek: Voyager", "Star Trek: Enterprise", "Star Trek: Discovery"]
    //var plots = ["Doctor Who", "Peep Show"]
    var datasets = [];
    for (var key in historyData.series) {
        var i = plots.indexOf(key)
        if (i != -1) { // If to plot
            var datapoints = []
            for (var series in historyData.series[key]) {
                for (var ep in historyData.series[key][series]) {
                    var time = historyData.series[key][series][ep]
                    datapoints.push({ x: time, name: ep })
                }
            }
            
            datapoints.sort((a, b) => {
                var datea = a.x.split('-').join('');
                var dateb = b.x.split('-').join(''); 
                return (datea).localeCompare(dateb); 
            });

            for (var index = 0; index < datapoints.length; index++) {
                datapoints[index].y = index + 1;
                
            }
            var o = Math.round, r = Math.random, s = 255;
            var col = 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ', 1.0)';
            datasets.push({
                label: key,
                data: datapoints,
                borderColor: col,
                backgroundColor: col,
                borderWidth: 3,
                //pointBackgroundColor: ['#000', '#00bcd6', '#d300d6'],
                //pointBorderColor: ['#000', '#00bcd6', '#d300d6'],
                pointRadius: 1,
                pointHoverRadius: 5,
                fill: false,
                tension: 0,
                showLine: false
            });
        }
    }
    data.datasets = datasets
    return (
        <Scatter options={options} data={data}/>
    );
};