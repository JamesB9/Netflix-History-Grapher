import { useContext, useEffect, useState} from 'react';
import HistoryMenu from "../components/HistoryMenu";
import { HistoryContext } from '../App'
import { useNavigate } from "react-router-dom";
import WatchHistoryGraph from "../components/WatchHistoryGraph"
import Form from 'react-bootstrap/Form'
import {getDataPoints, convertFromRelative, convertToRelative} from '../utils/watchSelection';

export default function Dashboard() {
    const historyContext = useContext(HistoryContext);
    const [watchSelection, setWatchSelection] = useState([]);
    const [isGraphRelative, setGraphRelative] = useState(false);

    //console.log(historyContext.history)
    //console.log(watchSelection)

    if(isGraphRelative) {
        convertToRelative(watchSelection);
    }else{
        convertFromRelative(watchSelection)
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
            <Form>
                <Form.Check 
                    type="switch"
                    id="relativeSwitch"
                    label="Relative Graph"
                    onChange={(e) => {
                        if(e.target.checked){
                            setGraphRelative(true)
                        }else{
                            setGraphRelative(false)
                        }
                    }}
                />
            </Form>
            <WatchHistoryGraph datasets={watchSelection} relative={isGraphRelative}/>
            <HistoryMenu data={historyContext.history} addWatch={addWatch} removeWatch={removeWatch} />
        </>
    )
}