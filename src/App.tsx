import './App.css'
import Content from "./content/Content.tsx";
import Nav from "./Nav.tsx";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import About from "./about/About.tsx";

function App() {

    return (
        <div className="h-screen w-screen flex flex-col">
            <BrowserRouter>
                <Nav/>
                <Routes>
                    <Route path='/' element={<Content/>}/>
                    <Route path='/about' element={<About/>}/>
                </Routes>
                {/*<Footer/>*/}
            </BrowserRouter>
        </div>
    )
}

export default App
