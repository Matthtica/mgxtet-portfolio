import './App.scss';
import Nav from './components/Nav';
import Confidence from './components/Confidence';
import { LanguageConfidence } from './utils/constants';
import DescriptionBox from './components/DescriptionBox'
import Footer from './components/Footer';

export default function App() {
    const confidences: LanguageConfidence = {
        "cpp": { name: "C/C++", level: 90 },
        "ts": { name: "Typescript", level: 85 },
        "kt": { name: "Kotlin", level: 60 },
        "py": { name: "Python", level: 50 },
        "scss": { name: "Scss", level: 55 },
        "java": { name: "Java", level: 30 },
    };
    const techstacks: LanguageConfidence = {
        "react": { name: "ReactJS", level: 70 },
        "svelte": { name: "Svelte", level: 60 },
    };
    const about_languages =
        "My journey in programming just get started with HTML, CSS " +
        "and Javascript but I didn't enjoy working with javascript itself " +
        "and self taught other programming languages. I " +
        "mostly enjoy writing statically typed languages " +
        "such as C++ and Typescript.";

    const about_techstack = "I have some knowledge with React, Solid and Svelte. " +
        "Matter of facts, I wrote this website using reactjs, css module and scss";

    return (
        <div className="main-page">
            <Nav />
            <div className="content">
                <Confidence
                    header="Confidence on writing in each programming languaue"
                    data={confidences}
                    footer="The higher the better"
                />
                <DescriptionBox description={about_languages} />
                <DescriptionBox description={about_techstack} />
                <Confidence
                    header="Confidence on writing with each frameworks"
                    data={techstacks}
                    footer="The higher the better"
                />
            </div>
            <Footer />
        </div >
    );
}
