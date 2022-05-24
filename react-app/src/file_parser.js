/**
Reads and returns contents of a file object
**/
export function readFile(file) {
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

function inArray(array, key, value) {
    for (var x = 0; x < array.length; x++) {
        if (array[x][key] === value) {
            return x;
        }
    }
    return -1;
}

class NetflixItem {
    constructor(itemLine, id) {
        console.log("CREATE "+itemLine)
        let titles = itemLine.split(": ")
        this.name = titles[0];
        this.id = String(id);
        this.children = []
        if(titles.length > 1){
            this.add(itemLine.replace(titles[0]+': ', ''))
        }
    }

    add(itemLine) {
        //console.log("ADD "+itemLine)
        let titles = itemLine.split(": ")
        let itemTitleIndex = this.getIndexOfTitle(titles[0]);
        console.log("found "+titles[0]+" at index "+ itemTitleIndex)
        if(itemTitleIndex === -1){ // If not contains title
            this.children.push(new NetflixItem(itemLine, this.children.length))
        }else{
            this.children[itemTitleIndex].add(itemLine.replace(titles[0]+': ', ''))
        }
    }

    getIndexOfTitle(title){
        for(var x = 0; x< this.children.length;x++){
            let childTitle = this.children[x].name
            if(childTitle == title){
                return x;
            }
        }
        return -1;
        
        /*this.children.forEach(function (child, index) {
            if(child.name == title){
                return index;
            }
        });
        return -1;*/
    }
}

export function extractNetflixData2(csvString, delimeter = ',') {
    const treeData = {
        id: 'root',
        name: 'Parent',
        children: []
    };
    const lines = csvString.split('\n');
    let rootItem = new NetflixItem('Parent', 0)

    for (var i = 1; i < lines.length; i++) {
        // Extract show and date
        let line = lines[i];
        let data = line.split(delimeter);
        if (data.length < 2) continue;
        let fullTitle = data[0].replace("\"", "");
        let date = data[1].replace("\"", "").slice(0, -1);
        console.log('EXTRACT '+fullTitle)
        rootItem.add(fullTitle)
        console.log(rootItem)
        /*
        // Split into show:season::episode etc...
        let titles = fullTitle.split(":");
        let depth = treeData;
        for (var j = 0; j < titles.length; j++) {
            let title = titles[j];
            let index = inArray(depth.children, "name", title);

            if (index === -1) {
                depth.children.push({
                    id: j * i,
                    name: title,
                    children: []
                })
                index = depth.children.length - 1;
            }

            depth = depth.children[index];

            if (j === titles.length - 1) { // If final depth
                depth["date"] = date;
            }
        }
        */
    }
    console.log(JSON.stringify(rootItem, null, 2))
    return rootItem;
}

export function extractNetflixData(csvString, delimeter = ',') {
    const netflixData = {};
    const lines = csvString.split('\n');

    for (var i = 1; i < lines.length; i++) {
        // Extract show and date
        let line = lines[i];
        let data = line.split(delimeter);
        if (data.length < 2) continue;
        let fullTitle = data[0].replace("\"", "");
        let date = data[1].replace("\"", "").slice(0, -1);

        // Split into show:season::episode etc...
        let titles = fullTitle.split(":");
        let depth = netflixData;
        for (var j = 0; j < titles.length; j++) {
            let title = titles[j];
            if (!depth[title]) {
                if (j === titles.length - 1) { // If final depth
                    depth[title] = []; // Create list for dates

                } else {
                    depth[title] = {}; // Create JSON to store next title
                }
            }
            depth = depth[title];

            if (j === titles.length - 1) { // If final depth
                depth.push(date);
            }
            if (j < titles.length - 2) {
                depth["_leaf_"] = false;
            } else {
                depth["_leaf_"] = true;
            }
        }
    }
    return netflixData;
}
