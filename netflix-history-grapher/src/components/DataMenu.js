import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';

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

function getSeriesAccordian(series) {

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

    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <Form.Check
                        type="switch"
                        id="film"
                        label="Films"
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
                    {getSeriesAccordian(historyData.series)}
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}