import './App.css';
import {readFile, extractNetflixData} from './file_parser.js'
import DropdownSelector from './components/DropdownSelector.js';

const treeData = {
  id: 'root',
  name: 'Parent',
  children: []
}

function fileChanged(file){
  console.log("File Changed")
  readFile(file).then((contents, err) => {
    const netflixData = extractNetflixData(contents);
    treeData.children = netflixData;
    console.log(netflixData);
  });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Netflix History Grapher</h1>
        <input type="file" accept=".csv" onChange={(e) => fileChanged(e.target.files[0])}/>
      </header>
      <ul id="myUL">
        <DropdownSelector data={treeData} title="Test" children={[{title:"Test2", children:[]}]} />
      </ul>
    </div>
  );
}

export default App;
