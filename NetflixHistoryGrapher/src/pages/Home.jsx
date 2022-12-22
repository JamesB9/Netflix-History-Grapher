import { useContext } from 'react';
import HistoryUpload from '../components/HistoryUpload'
import { Link } from 'react-router-dom'
import {HistoryContext} from '../App'

export default function Home() {
    const historyContext = useContext(HistoryContext);

    return (
        <>
            <h1>Home</h1>
            <HistoryUpload />
            <Link to="/Dashboard">
                <button disabled={Object.keys(historyContext.history).length === 0 ? "disabled" : ""}>Dashboard</button>
            </Link>
        </>
    )
}