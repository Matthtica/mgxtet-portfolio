import style from './Projects.module.scss';
import DescriptionBox from './DescriptionBox';

export default function Projects() {

    const timetracker = <p>I made <a href="https://github.com/Matthtica/Time-Tracker" target="_blank">Time-Tracker app</a> using
        <a href="https://tauri.app/" target="_blank">Tauri</a>, Typescript, React. The app is about Time Management.
        I am regularly using that app to track my daily time usage to analyze what's the factor me
        being not productive or wasting time. Looking at data of me wasting time as the big motivation to
        change my behavior and routine.
    </p>;

    const name_search = <p></p>;

    return (
        <div className={style.projects}>
            <DescriptionBox title="Time Tracker" description={timetracker} />
        </div>
    );
}
