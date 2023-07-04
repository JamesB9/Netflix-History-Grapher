import { Accordion, Form } from 'react-bootstrap';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import { useRef } from 'react'

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
    const createAccordion = (json, layer, parent, parentChecked) => {
        //console.log(Object.entries(json))
        return Object.entries(json).sort((a, b) => sortFunction(a[0], b[0])).map(([key, value], index) => {
            const fullName = parent == null ? key : parent + ": " + key

            if (typeof value === 'object') {
                // If the value is an object, create an accordion panel with a submenu
                const checkRef = useRef(null);

                return (
                    <Accordion.Item eventKey={index} key={layer + "" + index}>
                        <Accordion.Header>
                            <Form.Check
                                type="checkbox"
                                id={layer + "" + key}
                                label={key}
                                onChange={(e) => e.target.checked ? props.addWatch(fullName) : props.removeWatch(fullName)}
                                ref={checkRef}
                                disabled={parentChecked}
                                defaultChecked={parentChecked}
                            />
                        </Accordion.Header>
                        <Accordion.Body className="p-0">
                            <Accordion>
                                {createAccordion(value, layer + 1, fullName, checkRef.current != null ? checkRef.current.checked || parentChecked : false)}
                            </Accordion>
                        </Accordion.Body>
                    </Accordion.Item>
                );
            } else {
                // If the value is a leaf node, create an accordion panel
                return (
                    <Form.Check
                        type="checkbox"
                        id={layer + "" + key}
                        label={key + " - " + value}
                        onChange={(e) => e.target.checked ? props.addWatch(fullName) : props.removeWatch(fullName)}
                        key={index}
                        disabled={parentChecked}
                        defaultChecked={parentChecked}
                    />
                )
            }
        });
    };

    return (
        <Accordion style={{ width: "90vw" }}>
            {createAccordion(json, 0, null, false)}
        </Accordion>
    );
}