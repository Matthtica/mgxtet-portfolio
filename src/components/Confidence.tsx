import { useEffect } from 'react';
import styles from './Confidence.module.scss';
import $ from 'jquery';
import { LanguageConfidence } from "../utils/constants";

interface ConfidenceProp {
    header: string,
    data: LanguageConfidence,
    footer: string,
}

export default function Confidence(prop: ConfidenceProp) {
    useEffect(() => {
        Object.keys(prop.data).map((key: string) => {
            $(`.${key}`).css({
                "width": `${prop.data[key].level}%`
            });
        })
    }, []);

    return <div className={styles.confidence}>
        <div className={styles.header}>{prop.header}</div>
        <div className={styles.confs}>
            {Object.keys(prop.data).map((lang: string) =>
                <div className={styles.frame}>
                    <p className={styles.language}>{prop.data[lang].name}</p>
                    <div className={styles.bar}>
                        <div className={`${styles.progress} ${lang}`}>
                        </div>
                    </div>
                </div>
            )}
        </div>
        <div className={styles.footer}>{prop.footer}</div>
    </div>;
}
