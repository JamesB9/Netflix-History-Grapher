import Form from 'react-bootstrap/Form';
import {useState, useEffect} from 'react';
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Scatter } from 'react-chartjs-2';
ChartJS.register(
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
  );

const PrettyPrintJson = ({data}) => (<div><pre>{ 
    JSON.stringify(data, null, 2) }</pre></div>);

function getDate (date)  {

    var [day, month, year] = date.split('/')

    return Date.parse(`${year}-${month}-${day}`);
}

const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
        tooltip: {
            callbacks: {
                label: function(context) {
                    let label = context.dataset.label || '';

                    if (label) {
                        label += ': ';
                    }
                    if (context.parsed.y !== null) {
                        label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                    }
                    return label;
                }
            }
        }
    }
  };
    
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const graphData = {
    datasets: [{
        label: 'Scatter Dataset',
        data: [{
          x: -10,
          y: 0
        }, {
          x: 0,
          y: 10
        }, {
          x: 10,
          y: 5
        }, {
          x: 0.5,
          y: 5.5
        }],
        borderColor: 'black',
        borderWidth: 1,
        showLine: true
      }],
};

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

                if(seasonWords.some(word => title.includes(word))) { // SERIES
                    var names = title.split(':');

                    // Find Episode Name
                    var episodeName = "";
                    var seasonNameIndex = -1;
                    for(var i = names.length-1; i >= 0; i--) {
                        var name = names[i];
                        if(seasonWords.some(word => name.includes(word)) && i != names.length-1){
                            seasonNameIndex = i;
                            break; 
                        }
                        episodeName = name + episodeName;
                    }

                    if(seasonNameIndex == -1){
                        historyData.film[title] = getDate(date);
                        return; // Continue
                    }
               
                    var seasonName = names[seasonNameIndex].trim()
                    var seriesName = names.slice(0, seasonNameIndex).join(':').trim()

                    // Find Season
                    if(historyData.series.hasOwnProperty(seriesName)) {
                        if(historyData.series[seriesName].hasOwnProperty(seasonName)){
                            historyData.series[seriesName][seasonName][episodeName] = getDate(date);
                        }else{
                            historyData.series[seriesName][seasonName] = {[episodeName]: getDate(date)}
                        }
                    }else{
                        historyData.series[seriesName] = {[seasonName]: {[episodeName]: getDate(date)}}
                    }

                }else { // FILM
                    historyData.film[title] = getDate(date);
                }
            })
            console.log(historyData)

            setData(historyData);



            // SERIES STUFF
            var plots = ["Doctor Who"]
            var x = []
            var y = []
            var seriesdata = [];
           
            for(var key in historyData.series){
                var i = plots.indexOf(key)
                if(i != -1){ // If to plot
                    for(var series in historyData.series[key]){
                        for(var ep in historyData.series[key][series]){
                            x.push(historyData.series[key][series][ep])
                        }
                    }

                    x.sort()
                    y = Array.from(Array(x.length).keys())
                    for(var num = 0; num < x.length; num++){
                        seriesdata.push({x: x[num], y: y[num]})
                    }
                }
            }

            console.log(seriesdata)
            setGraph({
                datasets: [{
                    label: plots[0],
                    data: seriesdata,
                    backgroundColor: 'rgb(255, 99, 132)',
                    pointRadius: 0,
                    borderColor: 'rgb(255, 99, 132)',
                    borderWidth: 1,
                    showLine: true,
                  }],
            });
        });
        reader.readAsText(file);
        
	};

    
    return (
        <>
        <Form>
            <Form.Group controlId="formFileLg" className="mb-3">
                <Form.Label>Large file input example</Form.Label>
                <Form.Control type="file" size="lg" onChange={changeHandler} accept=".csv"/>
            </Form.Group>
        </Form>

        <Scatter options={options} data={graph} />

        <PrettyPrintJson data={data}/>
    </>

    );
}