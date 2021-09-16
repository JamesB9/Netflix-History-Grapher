/**
Reads and returns contents of a file object
**/
export function readFile(file){
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        // Read File Object and return file contents
        reader.addEventListener('load', (event) => {
            const fileContents = event.target.result;
            resolve(fileContents);
        });

        reader.addEventListener('progress', (event) => {
            if (event.loaded && event.total) {
                const percent = (event.loaded / event.total) * 100;
                console.log(`Progress: ${Math.round(percent)}`);
            }
        });

        reader.readAsText(file);
    });
}

export function convertNetflixDataToTreeData(netflixData){
    const treeData = {
        id: 'root',
        name: 'Parent',
        children: []
    };
    const lines = csvString.split('\n');

    for(var i = 1; i < lines.length; i++){
        // Extract show and date
        let line = lines[i];
        let data = line.split(delimeter);
        if(data.length < 2) continue;
        let fullTitle = data[0].replace("\"","");
        let date = data[1].replace("\"", "").slice(0, -1);

        // Split into show:season::episode etc...
        let titles = fullTitle.split(":");
        for(var j = 0; j < titles.length; j++){
            let title = titles[j];
            for(var k = 0; k < j; k++){
                depth = ne
            }
            let depth = netflixData.children;
            if(objArrayContains(depth)){

            }
        }
    }
    return netflixData;
}

export function extractNetflixData(csvString, delimeter=','){
    const netflixData = {};
    const lines = csvString.split('\n');

    for(var i = 1; i < lines.length; i++){
        // Extract show and date
        let line = lines[i];
        let data = line.split(delimeter);
        if(data.length < 2) continue;
        let fullTitle = data[0].replace("\"","");
        let date = data[1].replace("\"", "").slice(0, -1);

        // Split into show:season::episode etc...
        let titles = fullTitle.split(":");
        let depth = netflixData;
        for(var j = 0; j < titles.length; j++){
            let title = titles[j];
            if(!depth[title]){
                if(j === titles.length - 1){ // If final depth
                    depth[title] = []; // Create list for dates

                }else{
                    depth[title] = {}; // Create JSON to store next title
                }
            }
            depth = depth[title];

            if(j === titles.length - 1){ // If final depth
                depth.push(date);
            }
            if(j < titles.length -2){
                depth["_leaf_"] = false;
            }else{
                depth["_leaf_"] = true;
            }
        }
    }
    return netflixData;
}