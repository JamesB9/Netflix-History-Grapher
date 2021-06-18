google.charts.load('current', {packages: ['corechart', 'line']}); // Load Google Charts

/**
drawChart taken from google charts documentation
**/
function drawChart() {

  var data = new google.visualization.DataTable();
  data.addColumn('number', 'Day');
  data.addColumn('number', 'Guardians of the Galaxy');
  data.addColumn('number', 'The Avengers');
  data.addColumn('number', 'Transformers: Age of Extinction');

  data.addRows([
    [1,  37.8, 80.8, 41.8],
    [2,  30.9, 69.5, 32.4],
    [3,  25.4,   57, 25.7],
    [4,  11.7, 18.8, 10.5],
    [5,  11.9, 17.6, 10.4],
    [6,   8.8, 13.6,  7.7],
    [7,   7.6, 12.3,  9.6],
    [8,  12.3, 29.2, 10.6],
    [9,  16.9, 42.9, 14.8],
    [10, 12.8, 30.9, 11.6],
    [11,  5.3,  7.9,  4.7],
    [12,  6.6,  8.4,  5.2],
    [13,  4.8,  6.3,  3.6],
    [14,  4.2,  6.2,  3.4]
  ]);

  var options = {
    chart: {
      title: 'Box Office Earnings in First Two Weeks of Opening',
      subtitle: 'in millions of dollars (USD)'
    },
    width: 900,
    height: 500
  };

  var chart = new google.charts.Line(document.getElementById('lineGraph'));

  chart.draw(data, google.charts.Line.convertOptions(options));
}

/**
ON DOCUMENT READY
**/
$(document).ready(() => {
    console.log("Document Ready");
});

$(document).on("click", ".caret", (event) => {
    console.log("Clicked")
    console.log(event.target);
    event.target.parentElement.querySelector(".nested").classList.toggle("active");
    event.target.classList.toggle("caret-down");
});

/**
Reads and returns contents of a file object
**/
function readFile(file){
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

function extractNetflixData(csvString, delimeter=','){
    const netflixData = {};
    const lines = csvString.split('\n');

    for(var i = 1; i < lines.length; i++){
        // Extract show and date
        line = lines[i];
        data = line.split(delimeter);
        if(data.length < 2) continue;
        fullTitle = data[0].replace("\"","");
        date = data[1].replace("\"", "").slice(0, -1);

        // Split into show:season::episode etc...
        titles = fullTitle.split(":");
        depth = netflixData;
        for(var j = 0; j < titles.length; j++){
            title = titles[j];
            if(!depth[title]){
                if(j == titles.length - 1){ // If final depth
                    depth[title] = []; // Create list for dates

                }else{
                    depth[title] = {}; // Create JSON to store next title
                }
            }
            depth = depth[title];

            if(j == titles.length - 1){ // If final depth
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

function createCheckbox(parentElement, json){
    keys = Object.keys(json);
    if(keys[0] == "0") {return;}
    console.log("Checkbox created for: " + keys[0]);
    const line = $(`<li><span class="caret"></span>
    <input type="checkbox" id="${keys[0]}" value="${keys[0]}">
    <label for="${keys[0]}"> ${keys[0]}</label><br>
    </li>`);
    const ul = $(`<ul class="nested"></ul>`);
    line.append(ul);
    parentElement.append(line);

    childKeys = Object.keys(json[keys[0]]);
    if(childKeys != undefined){
        for(var i = 0; i < childKeys.length; i++){
            createCheckbox(ul, json[keys[i]]);
        }
    }
}

function createCheckboxTree(parentElement, netflixData){
    if(netflixData["_leaf_"] == true) return;

    titles = Object.keys(netflixData);
    console.log(titles);
    for(var i = 0; i < titles.length; i++){
        title = titles[i]
        if(title == "_leaf_") continue;
        console.log(title);

        var line = $(`<li><span class="caret">
        <input type="checkbox" id="${title}" value="${title}">
        <label for="${title}"> ${title}</label><br>
        </span></li>`);
        var ul = $(`<ul class="nested"></ul>`);
        line.append(ul);
        parentElement.append(line);

        //createCheckboxTree(ul, netflixData[title])
    }
}
/*
<input type="checkbox" id="${keys[0]}" value="${keys[0]}">
<label for="${keys[0]}"> ${keys[0]}</label><br>
*/

/**
ON FILE SUBMIT BUTTON CLICKED
**/
$(document).on("click", '#fileSubmitBtn', async () => {
    var file = $('#fileSelect').prop('files')[0];
    const contents = await readFile(file);
    const netflixData = extractNetflixData(contents);
    console.log(netflixData);
    $("#myUL").empty()
    createCheckboxTree($("#myUL"), netflixData);
    drawChart();
});
