import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FileUpload from './components/FileUpload'

function App() {
    return (
        <Container style={{ minHeight: "100vh" }}>
            <FileUpload />
        </Container>
    );
}

export default App;
