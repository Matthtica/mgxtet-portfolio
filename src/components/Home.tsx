import style from './Home.module.scss';
import Card from './Card';
import CV from './CV';

interface HomeProp {
    goto: (ind: number) => void
}

export default function Home(prop: HomeProp) {
    return (
        <div className={style.home}>
            <Card />
            <CV goto={prop.goto} />
        </div>
    );
}
