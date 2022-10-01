import Form from 'react-bootstrap/Form';

export default function FileUpload(props) {
    const changeHandler = (event) => {
        var file = event.target.files[0];

        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            const result = event.target.result.replace(/['"]+/g, '');
            const historyData = {
                film: {},
                series: {}
            }

            result.split('\n').forEach((line, index) => {
                if (index === 0 || line === "") return;
                var [title, date] = line.split(",")
                var seasonWords = ["Series", "Season", "Chapter", "Volume"]
                var [day, month, year] = date.split("/")
                var date = `${year}-${month}-${day}`

                if (seasonWords.some(word => title.includes(word))) { // SERIES
                    var names = title.split(':');

                    // Find Episode Name
                    var episodeName = "";
                    var seasonNameIndex = -1;
                    for (var i = names.length - 1; i >= 0; i--) {
                        var name = names[i];
                        if (seasonWords.some(word => name.includes(word)) && i != names.length - 1) {
                            seasonNameIndex = i;
                            break;
                        }
                        episodeName = name + episodeName;
                    }

                    if (seasonNameIndex == -1) {
                        historyData.film[title] = date;
                        return; // Continue
                    }

                    var seasonName = names[seasonNameIndex].trim()
                    var seriesName = names.slice(0, seasonNameIndex).join(':').trim()

                    // Find Season
                    if (historyData.series.hasOwnProperty(seriesName)) {
                        if (historyData.series[seriesName].hasOwnProperty(seasonName)) {
                            historyData.series[seriesName][seasonName][episodeName] = date;
                        } else {
                            historyData.series[seriesName][seasonName] = { [episodeName]: date }
                        }
                    } else {
                        historyData.series[seriesName] = { [seasonName]: { [episodeName]: date } }
                    }

                } else { // FILM
                    historyData.film[title] = date;
                }
            })
            props.setHistoryData(historyData);
        });
        reader.readAsText(file);

    };

    return (
        <>
            <Form>
                <Form.Group controlId="formFileLg" className="mb-3">
                    <Form.Label>Large file input example</Form.Label>
                    <Form.Control type="file" size="lg" onChange={changeHandler} accept=".csv" />
                </Form.Group>
            </Form>
        </>
    );
}