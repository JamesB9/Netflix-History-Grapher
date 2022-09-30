import Form from 'react-bootstrap/Form';
import 'chartjs-adapter-date-fns';
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
    TimeScale
);

const PrettyPrintJson = ({ data }) => (<div><pre>{
    JSON.stringify(data, null, 2)}</pre></div>);

function getDate(date) {

    var [day, month, year] = date.split('/')

    return Date.parse(`${year}-${month}-${day}`);
}
/*
const options = {
    responsive: true,
    plugins: {
    legend: {
        position: 'top',
    },
    title: {
        display: true,
        text: 'Chart.js Line Chart',
    },
    },
};
*/
const options = {
    legend: false,
    tooltips: false,
    scales: {
        x: {
            type: 'time',
            time: {
                //unit: 'day'
            }
        },
        y: {
            beginAtZero: true
        }
    },
    legendCallback: function(chart) { 
        var text = []; 
        text.push('<ul class="' + chart.id + '-legend">'); 
        for (var i = 0; i < chart.data.datasets.length; i++) { 
            text.push('<li><span style="background-color:' + 
                       chart.data.datasets[i].backgroundColor + 
                       '"></span>'); 
            if (chart.data.datasets[i].label) { 
                //text.push(chart.data.datasets[i].label); 
            } 
            text.push('</li>'); 
        } 
        text.push('</ul>'); 
        return text.join(''); 
    }
}

const graphData = {
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
/*
const graphData = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [1,2,3],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [3,2,1],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
*/
export default function FileUpload() {
    const [selectedFile, setSelectedFile] = useState();
    const [data, setData] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [graph, setGraph] = useState(graphData);

    const changeHandler = (event) => {
        var file = event.target.files[0];
        setSelectedFile(file);
        setIsFilePicked(true);

        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            const result = event.target.result.replace(/['"]+/g, '');
            const historyData = {
                film: {},
                series: {}
            }

            result.split('\n').forEach((line, index) => {
                if (index === 0 || line === "") return;
                var [title, date] = line.split(",")
                var seasonWords = ["Series", "Season", "Chapter", "Volume"]
                var [day, month, year] = date.split("/")
                var date = `${year}-${month}-${day}`

                if (seasonWords.some(word => title.includes(word))) { // SERIES
                    var names = title.split(':');

                    // Find Episode Name
                    var episodeName = "";
                    var seasonNameIndex = -1;
                    for (var i = names.length - 1; i >= 0; i--) {
                        var name = names[i];
                        if (seasonWords.some(word => name.includes(word)) && i != names.length - 1) {
                            seasonNameIndex = i;
                            break;
                        }
                        episodeName = name + episodeName;
                    }

                    if (seasonNameIndex == -1) {
                        historyData.film[title] = date;
                        return; // Continue
                    }

                    var seasonName = names[seasonNameIndex].trim()
                    var seriesName = names.slice(0, seasonNameIndex).join(':').trim()

                    // Find Season
                    if (historyData.series.hasOwnProperty(seriesName)) {
                        if (historyData.series[seriesName].hasOwnProperty(seasonName)) {
                            historyData.series[seriesName][seasonName][episodeName] = date;
                        } else {
                            historyData.series[seriesName][seasonName] = { [episodeName]: date }
                        }
                    } else {
                        historyData.series[seriesName] = { [seasonName]: { [episodeName]: date } }
                    }

                } else { // FILM
                    historyData.film[title] = date;
                }
            })
            console.log(historyData)

            setData(historyData);



            // SERIES STUFF
            //["Star Trek", "Star Trek: The Next Generation", "Star Trek: Deep Space Nine", "Star Trek: Voyager", "Star Trek: Enterprise", "Star Trek: Discovery"]
            var plots = ["Star Trek", "Star Trek: The Next Generation", "Star Trek: Deep Space Nine", "Star Trek: Voyager", "Star Trek: Enterprise", "Star Trek: Discovery"]
            var datasets = [];
            for (var key in historyData.series) {
                var i = plots.indexOf(key)
                console.log(i)
                if (i != -1) { // If to plot
                    var datapoints = []
                    for (var series in historyData.series[key]) {
                        for (var ep in historyData.series[key][series]) {
                            var time = historyData.series[key][series][ep]
                            datapoints.push({ x: time })
                        }
                    }
                    
                    datapoints.sort((a, b) => {
                        var datea = a.x.split('-').join('');
                        var dateb = b.x.split('-').join(''); 
                        return (datea).localeCompare(dateb); 
                    });

                    for (var index = 0; index < datapoints.length; index++) {
                        datapoints[index].y = index;
                        
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
                        showLine: true
                    });
                }
            }
            console.log("label", plots[0])

            console.log("data", datapoints[0])
            setGraph({
                datasets: datasets
            });
        });
        reader.readAsText(file);

    };

    const htmlLegendPlugin = {
        id: "htmlLegend",
        afterUpdate(chart) {
          const items = chart.options.plugins.legend.labels.generateLabels(chart);
          const ul = document.createElement("ul");
         items.forEach(item => {
            const li = document.createElement("li");
            const boxSpan = document.createElement("span");
            boxSpan.style.background = item.fillStyle;
            li.appendChild(boxSpan);
            li.appendChild(document.createTextNode(item.text));
            ul.appendChild(li);
          });
          const jsLegend = document.getElementById("js-legend");
          jsLegend.appendChild(ul);
        }
    };

    return (
        <>
            <Form>
                <Form.Group controlId="formFileLg" className="mb-3">
                    <Form.Label>Large file input example</Form.Label>
                    <Form.Control type="file" size="lg" onChange={changeHandler} accept=".csv" />
                </Form.Group>
            </Form>

            <Scatter options={options} data={graph} plugins={[htmlLegendPlugin]}/>
            <div id='js-legend' className='whatever you wanna add'></div>
            <PrettyPrintJson data={data} />
        </>
    );
}