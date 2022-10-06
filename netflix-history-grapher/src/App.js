import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FileUpload from './components/FileUpload'
import EpisodeScatterGraph from './components/EpisodeScatterGraph';
import { useState, useEffect } from 'react';
import DataMenu from './components/DataMenu';

function App() {
    const [historyData, setHistoryData] = useState();
    const [selectedWatches, setSelectedWatches] = useState([]);

    console.log("History Data = ", historyData)
    console.log("Selected Watches = ", selectedWatches)

    return (
        <Container style={{ minHeight: "100vh" }}>
            <FileUpload setHistoryData={setHistoryData}/>
            {historyData !== undefined ? <EpisodeScatterGraph selectedWatches={selectedWatches} historyData={historyData}/> : null}
            {historyData !== undefined ? <DataMenu setSelectedWatches={setSelectedWatches} selectedWatches={selectedWatches} historyData={historyData}/> : null}
            
        </Container>
    );
}

export default App;
