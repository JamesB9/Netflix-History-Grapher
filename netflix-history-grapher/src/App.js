import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FileUpload from './components/FileUpload'
import EpisodeScatterGraph from './components/EpisodeScatterGraph';
import { useState, useEffect } from 'react';
import DataMenu from './components/DataMenu';

function App() {
    const [historyData, setHistoryData] = useState();
    console.log(historyData)
    return (
        <Container style={{ minHeight: "100vh" }}>
            <FileUpload setHistoryData={setHistoryData}/>
            {historyData !== undefined ? <EpisodeScatterGraph historyData={historyData}/> : null}
            {historyData !== undefined ? <DataMenu historyData={historyData}/> : null}
            
        </Container>
    );
}

export default App;
