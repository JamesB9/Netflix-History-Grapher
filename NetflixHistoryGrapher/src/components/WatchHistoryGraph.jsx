import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-moment';
import zoomPlugin from 'chartjs-plugin-zoom';

Chart.register(zoomPlugin);


export default function WatchHistoryGraph(props) {
    const chartContainer = useRef(null);
    let chartInstance = null;

    useEffect(() => {

        const data = {
            datasets: props.datasets
        };

        const options = {
            plugins: {
                legend: {
                    display: true
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItems, data) {
                            return tooltipItems.raw.name
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
                        //x: {min: 'original', max: 'original'},
                        //y: {min: 0, max: 'original'}
                        y: {min: 0}
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
                    time: {
                        unit: 'day',
                        format: 'YYYY-MM-DD',
                        tooltipFormat: 'll'
                      },
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
            },
        };

        const ctx = chartContainer.current.getContext('2d');
        chartInstance = new Chart(ctx, {
            type: 'line',
            data: data,
            options: options,
        });
        console.log("Create", chartInstance)
        return () => {
            if (chartInstance) {
                console.log("Destroy", chartInstance)
                chartInstance.destroy();
            }
        };
    }, [props.datasets]);

    return (
        <div style={{width:"90vw"}}>
            <canvas ref={chartContainer} />
        </div>
    );
}