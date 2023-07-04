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
                        y: {min: 0}
                        //y: {min: 0}
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

        if(props.relative){
            options.scales.x.title.text = "# of Days Since First Watched"
            options.scales.x.type = "linear";
            delete options.scales.x.time;
        }

        const ctx = chartContainer.current.getContext('2d');
        chartInstance = new Chart(ctx, {
            type: 'line',
            data: data,
            options: options,
        });

        return () => {
            if (chartInstance) {
                chartInstance.destroy();
            }
        };
    }, [props.datasets, props.relative]);

    return (
        <div style={{width:"90vw"}}>
            <canvas ref={chartContainer} />
        </div>
    );
}