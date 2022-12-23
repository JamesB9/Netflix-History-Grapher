import { useContext, useEffect, useState } from 'react';
import HistoryMenu from "../components/HistoryMenu";
import { HistoryContext } from '../App'
import { useNavigate } from "react-router-dom";
import WatchHistoryGraph from "../components/WatchHistoryGraph"

export default function Dashboard() {
    const historyContext = useContext(HistoryContext);
    const [watchSelection, setWatchSelection] = useState([]);

    console.log(historyContext.history)
    console.log(watchSelection)

    function getKeyValuePairs(obj, parent) {
        const result = [];
        for (const key in obj) {
          if (obj.hasOwnProperty(key)) {
            const date = obj[key];
            const name = parent + ":" + key;
            if (typeof date === 'object') {
                result.push(...getKeyValuePairs(date, name));
            }else{
                result.push({ name, date });
            }
          }
        }
        return result;
    }


    const getDataPoints = (fullTitle, titleList, historyData) => {

        if(titleList.length == 1){
            var datapoints = getKeyValuePairs(historyData[titleList[0]], fullTitle);
            datapoints.sort((a, b) => {
                var datea = a.date.split('-').join('');
                var dateb = b.date.split('-').join(''); 
                return (datea).localeCompare(dateb); 
            });
            for (var index = 0; index < datapoints.length; index++) {
                datapoints[index].x = new Date(datapoints[index].date)
                datapoints[index].y = index + 1;
                delete datapoints[index].date;
            }
            return datapoints;
        }else{
            return getDataPoints(fullTitle, titleList.slice(1), historyData[titleList[0]])
        }
    }

    const addWatch = (value) => {
        const dataset = {
            label: value,
            data: getDataPoints(value, value.split(": "), historyContext.history),
            borderWidth: 1,
        }
        setWatchSelection([...watchSelection, dataset]);
    };

    const removeWatch = (value) => {
        setWatchSelection(watchSelection.filter((i) => i.label !== value));
    };

    // Navigate to / if no history data
    const navigate = useNavigate();
    useEffect(() => {
        if (Object.keys(historyContext.history).length === 0) {
            navigate('/');
        }
    }, [historyContext.history, navigate]);

    return (
        <>
            <h1>Dashboard</h1>
            <WatchHistoryGraph datasets={watchSelection}/>
            <HistoryMenu data={historyContext.history} addWatch={addWatch} removeWatch={removeWatch} />
        </>
    )
}