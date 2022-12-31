import style from './More.module.scss';
import DescriptionBox from './DescriptionBox';

type MoreInfo = {
    [key: string]: JSX.Element
}

export default function More() {
    const more: MoreInfo = {
        "Education": <p id="education">I am a 2<sup>nd</sup> year Mathematics student at Dagon University.
            I don't want continue it anymore. </p>,
        "LeetCode": <p id="leetcode">I didn't have alot of projects. Becoz, I was spending alot of time on
            problem solving. And learning different programming languages.</p>,
        "Experience": <p id="experience">I didn't have job before. So I consider myself as junior, and currently looking for intern/junior job.
            But I've start learning programming about more than 2 years now. I just started learning little bit of
            HTML, CSS, Javascript, Java from my neighbour 2<sup>nd</sup> CS student for 6 month. After that,
            I self taught Java, Kotlin & Android Development over the next 6 months. And C/C++ for more than 1 year.
            And Typescript, ReactJS, Sass after that. And I make this website with that. </p>,
        "Hobby": <p id="hobby"> My hobby is learning and writting C++. And I also like Rust, Common Lisp, Elisp and
            some other programming language. So generally speaking, my hobby is programming and learning new things.</p>,
    }

    return (
        <div className={style.more}>
            {Object.keys(more).map((title: string) => <DescriptionBox title={title} description={more[title]} />)}
        </div>
    );
}
