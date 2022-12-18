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
    const about_languages = <p>My journey in programming just get started with HTML, CSS
        and Javascript but I didn't enjoy working with javascript itself
        and self taught other programming languages. I
        mostly enjoy writing statically typed languages
        such as C++ and Kotlin. Also I like working with typescript.</p>;

    const about_techstack = <p>I have some knowledge with React, Solid and Svelte.
        Matter of facts, I wrote this website using ReactJS, css module, scss and a little bit of JQuery.</p>;

    const type_of_person = <p>I am the type of person, that if you ask me a question
        and I don't know the answer. I am gonna tell you that I don't know.
        But I bet you what? I know how to find the answer and I will find the answer.</p>;

    const leetcode = <p>I was spending more time on solving problem rather than
        frameworks. So in case of problem solving skill here is my <a href="https://leetcode.com/Karlicin/" target="_blank" >leetcode profile and scores.</a></p>;

    return (
        <div className="main-page">
            <Nav />
            <div className="content">
                <DescriptionBox description={type_of_person} />
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
                <DescriptionBox description={leetcode} />
            </div>
            <Footer />
        </div >
    );
}
