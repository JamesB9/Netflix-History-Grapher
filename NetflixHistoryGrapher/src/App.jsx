import { useState, createContext } from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

export const HistoryContext = createContext(null);

function App() {
    const [history, setHistory] = useState({});

    return (
        <HistoryContext.Provider value={{history, setHistory}}>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/Dashboard' element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </HistoryContext.Provider>
    )
}

export default App
