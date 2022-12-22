import { useContext, useEffect, useState } from 'react';
import HistoryMenu from "../components/HistoryMenu";
import {HistoryContext} from '../App'
import {useNavigate} from "react-router-dom";

export default function Dashboard() {
    const historyContext = useContext(HistoryContext);
    const [watchSelection, setWatchSelection] = useState([]);
    console.log(watchSelection)
    const addWatch = (value) => {
        setWatchSelection([...watchSelection, value]);
    };

    const removeWatch = (value) => {
        setWatchSelection(watchSelection.filter((i) => i !== value));
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
            <HistoryMenu data={historyContext.history} addWatch={addWatch} removeWatch={removeWatch}/>
        </>
    )
}