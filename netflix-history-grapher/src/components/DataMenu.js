import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';

function change(event, selectedWatches, setSelectedWatches){
    if(event.target.checked){
        selectedWatches.push(event.target.id)
    }else{
        selectedWatches.splice(selectedWatches.indexOf(event.target.id), 1)
    }
    setSelectedWatches(selectedWatches)
}

function getEpisodesList(season) {
    return (
        <ul>
            {
                Object.keys(season).map((episode, index) => 
                    <li key={episode}>
                        <Form.Check
                            type="switch"
                            id={episode}
                            label={episode + " - " + season[episode]}
                        />
                    </li>
                )
            }
        </ul>
    )
}

function getSeasonsAccordian(series) {
    return (
        <Accordion>
            {
                Object.keys(series).map((seasonName, index) => 
                    <Accordion.Item eventKey={seasonName} key={seasonName}>
                        <Accordion.Header>
                            <Form.Check
                                type="switch"
                                id={seasonName}
                                label={seasonName}
                            />
                        </Accordion.Header>
                        <Accordion.Body>
                            {getEpisodesList(series[seasonName])}
                        </Accordion.Body>
                    </Accordion.Item>
                )
            }
        </Accordion>
    )
}

function getSeriesAccordian(series, one, two) {

    return (
        <Accordion>
            {
                Object.keys(series).map((seriesName, index) =>
                    <Accordion.Item eventKey={seriesName} key={seriesName}>
                        <Accordion.Header>
                            <Form.Check
                                type="switch"
                                id={seriesName}
                                label={seriesName}
                                onChange={(e) => change(e, one, two)}
                            />
                        </Accordion.Header>
                        <Accordion.Body>
                            {getSeasonsAccordian(series[seriesName])}
                        </Accordion.Body>
                    </Accordion.Item>
                )
            }
        </Accordion>
    )

}

export default function DataMenu(props) {
    const historyData = props.historyData
    var selectedWatches = [...props.selectedWatches]

    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <Form.Check
                        type="switch"
                        id="film"
                        label="Films"
                        onChange={(e) => props.setSelectedWatches("ag")}
                    />
                </Accordion.Header>
                <Accordion.Body>
                    {getEpisodesList(historyData.film)}
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>
                    <Form.Check
                        type="switch"
                        id="series"
                        label="Series"
                    />
                </Accordion.Header>
                <Accordion.Body>
                    {getSeriesAccordian(historyData.series, selectedWatches, props.setSelectedWatches)}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}