import { Accordion, Form } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

function sortFunction(a, b) {
    // Extract the decimal number from each string
    const aMatch = a.match(/\d+/);
    const bMatch = b.match(/\d+/);
    if (aMatch == null || bMatch == null) return 0;

    const aNum = parseFloat(aMatch[0]);
    const bNum = parseFloat(bMatch[0]);

    // Compare the decimal numbers
    if (aNum < bNum) {
        return -1;
    } else if (aNum > bNum) {
        return 1;
    } else {
        return 0;
    }
}

export default function HistoryMenu(props) {
    const json = props.data;
    
    // Recursive function to create an accordion menu for a JSON object
    const createAccordion = (json, layer) => {
        //console.log(Object.entries(json))
        return Object.entries(json).sort((a, b) => sortFunction(a[0], b[0])).map(([key, value], index) => {
            if (typeof value === 'object') {
                // If the value is an object, create an accordion panel with a submenu
                return (
                    <Accordion.Item eventKey={index} key={layer+""+index}>
                        <Accordion.Header>
                            <Form.Check
                                    type="checkbox"
                                    id={layer+""+key}
                                    label={key}
                                    onChange={(e) => e.target.checked ? props.addWatch(key) : props.removeWatch(key)}
                                />
                        </Accordion.Header>
                        <Accordion.Body className="p-0">
                            <Accordion >
                                {createAccordion(value, layer+1)}
                            </Accordion>
                        </Accordion.Body>
                    </Accordion.Item>
                );
            } else {
                // If the value is a leaf node, create an accordion panel
                return (
                    <Form.Check
                        type="switch"
                        id={layer+""+key}
                        label={key + " - " + value}
                        //onChange={onChange}
                        key={index}
                    />
                )
            }
        });
    };

    return (
        <Accordion style={{ width: "500px" }}>
            {createAccordion(json, 0)}
        </Accordion>
    );
}