import style from './Skills.module.scss';
import Confidence from './Confidence';
import { LanguageConfidence } from '../utils/constants';

export default function Skills() {
    const confidences: LanguageConfidence = {
        "cpp": { name: "C/C++", level: 90 },
        "ts": { name: "Typescript", level: 85 },
        "scss": { name: "Sass", level: 85 },
        "pbs": { name: "Problem Solving", level: 70 },
        "react": { name: "ReactJS", level: 70 },
        "svelte": { name: "SvelteJS", level: 65 },
        "py": { name: "Python", level: 50 },
        "kt": { name: "Kotlin", level: 40 },
        "java": { name: "Java", level: 30 },
        "cl": { name: "Common Lisp", level: 20 },
        "el": { name: "Elisp", level: 20 },
    };

    return (
        <div className={style.skill}>
            <Confidence
                header="Confidence on each skill"
                data={confidences}
            />
        </div>
    );
}
