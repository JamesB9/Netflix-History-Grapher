import { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import parseHistoryFile from '../utils/parseHistoryFile';
import {HistoryContext} from '../App'

export default function HistoryUpload() {
    const historyContext = useContext(HistoryContext);

    return (
        <Form.Group controlId="formFileLg" className="mb-3">
            <Form.Label>Upload Netflix History File</Form.Label>
            <Form.Control type="file" size="lg" accept=".csv" onChange={(event) => parseHistoryFile(event.target.files[0], historyContext.setHistory)}/>
        </Form.Group>
    )
}