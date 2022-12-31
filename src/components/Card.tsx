import style from './Card.module.scss';
import me from '../cropped-me.png';
import chopped from '../choppedme.png';

export default function Card() {
    const type_of_person = <p>I am the type of person, that if you ask me a question
        and I don't know the answer. I'm gonna tell you that I don't know.
        But I bet you what? I know how to find the answer and I will find the answer.</p>;
    return (
        <div className={style.card}>
            <div className={style.bg}>
                <img src={me} alt="kmh" />
                <img className={style.chopped} src={chopped} alt="kmh" />
            </div>
            <div className={style.description}>
                <div className={style.title}>
                    Mg Khin Maung Htet
                </div>
                <p>{type_of_person}</p>
            </div>
        </div>
    );
}
