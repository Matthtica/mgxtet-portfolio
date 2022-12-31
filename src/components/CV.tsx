import style from './CV.module.scss';

type CVMap = {
    [key: string]: any
}

interface ShortInfoProp {
    goto: (ind: number) => void,
}

export default function ShortInfo(prop: ShortInfoProp) {
    const calcAge = () => {
        const bd = new Date("2001-4-11");
        const now = new Date();
        let year = now.getFullYear() - bd.getFullYear();
        let month = now.getMonth() - bd.getMonth();
        if (month <= 0) {
            year -= 1;
        }

        return year;
    }

    const infoic = <svg className={style.ic} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z" />
    </svg>;

    const data: CVMap = {
        "Name": "Mg Khin Maung Htet",
        "Age": calcAge() + " years",
        "Status": "Looking for job",
        "Experience": <span>Junior
            <a href="#experience" onClick={() => prop.goto(3)} className={style.minfo}>{infoic}</a>
        </span>,
        "Education": <span>
            2<sup>nd</sup>&nbsp; year Mathematics, Dagon University
            <a href="#education" onClick={() => prop.goto(3)} className={style.minfo}>{infoic}</a>
        </span>,
        "Role": "ReactJS developer",
        "Skills": <span>
            C/C++, Typescript, Sass, ReactJS, Svelte, Kotlin, Python
            <a onClick={() => prop.goto(1)} className={style.minfo}>{infoic}</a>
        </span>,
        "Hobby": <span>
            C++ <a href="#hobby" onClick={() => prop.goto(3)} className={style.minfo}>{infoic}</a>
        </span>,
        "Github": <a className={style.goto} target="_blank" href="https://github.com/Matthtica">Matthtica</a>,
        "LeetCode": <a className={style.goto} target="_blank" href="https://leetcode.com/Karlicin/">Karlicin</a>,
        "Email Address": <a className={style.goto} target="_blank" href="mailto:zxnightstalker199733@gmail.com">zxnightstalker199733@gmail.com</a>,
        "Address": "Yangon, South Dagon, 65 ward, Mingalar Yarma Road, No.334",
        "Ph.no/Telegram": "09-797-877-517",
    }

    return (
        <ul className={style.sinfo}>
            {Object.keys(data).map((key: string) =>
                <li className={style.row}>
                    <span className={style.key}>{key}</span>
                    <span className={style.delim}>:</span>
                    <span className={style.value}>{data[key]}</span>
                </li>
            )}
        </ul>
    );
}
