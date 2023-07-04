function getKeyValuePairs(obj, parent) {
    const result = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const date = obj[key];
        const name = parent + ": " + key.trim();
        if (typeof date === 'object') {
            result.push(...getKeyValuePairs(date, name));
        }else{
            result.push({ name, date });
        }
      }
    }
    return result;
}

export const getDataPoints = (fullTitle, titleList, historyData) => {

    if(titleList.length == 1){
        var datapoints = getKeyValuePairs(historyData[titleList[0]], fullTitle);
        datapoints.sort((a, b) => {
            var datea = a.date.split('-').join('');
            var dateb = b.date.split('-').join(''); 
            return (datea).localeCompare(dateb); 
        });

        const initialDate = new Date(datapoints[0].date);

        for (var index = 0; index < datapoints.length; index++) {
            datapoints[index].date = new Date(datapoints[index].date);
            datapoints[index].x = datapoints[index].date;
            datapoints[index].y = index + 1;
            datapoints[index].daysSinceStart = Math.ceil(Math.abs(initialDate.getTime() - new Date(datapoints[index].date).getTime()) / (1000 * 60 * 60 * 24));
        }
        return datapoints;
    }else{
        return getDataPoints(fullTitle, titleList.slice(1), historyData[titleList[0]])
    }
}

export const convertToRelative = (datasets) => {
    datasets.forEach(dataset => {
        dataset.data.forEach(datapoint => {
            datapoint.x = datapoint.daysSinceStart;
        });
    });
}

export const convertFromRelative = (datasets) => {
    datasets.forEach(dataset => {
        dataset.data.forEach(datapoint => {
            datapoint.x = datapoint.date;
        });
    });
}