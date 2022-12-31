import './App.scss';
import Nav from './components/Nav';
import Home from './components/Home';
import Skills from './components/Skills';
import More from './components/More';
import Projects from './components/Projects';
import { useState } from 'react';

export default function App() {
    const [page, setPage] = useState(0);

    const goto = (ind: number) => {
        setPage(ind);
    }

    const nodes = [<Home goto={goto} />, <Skills />, <Projects />, <More />];
    return (
        <div className="main-page">
            <Nav current={page} onNavigate={setPage} />
            <div className="content">
                {nodes[page]}
            </div>
        </div>
    );
}
