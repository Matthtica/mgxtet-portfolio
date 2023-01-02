import style from './Projects.module.scss';
import DescriptionBox from './DescriptionBox';

export default function Projects() {

    const tt_app = <a href="https://github.com/Matthtica/Time-Tracker" target="_blank">Time Tracker app</a>;
    const tauri = <a href="https://tauri.app/" target="_blank">Tauri Framework</a>;
    const ns_app = <a href="https://github.com/Matthtica/name-search">Name Search app</a>;
    const nsm_app = <a href="https://github.com/Matthtica/NameSearch" target="_blank">Dart Version</a>;
    const ns_py = <a href="https://github.com/Matthtica/name-search-py" target="_blank">Python Version</a>;

    const timetracker = <p>{tt_app} using {tauri}, Typescript, React. The app is about Time Management.
        I am regularly using that app to track my daily time usage to analyze what's the factor me
        being not productive or wasting time. Looking at data of me wasting time as the big motivation to
        change my behavior and routine.
    </p>;

    const name_search = <p>{ns_app}. I wrote it in {tauri} but also in {ns_py} and {nsm_app} for mobile.
        The app is about Sorting and search in the excel sheets easily. Needed for my coursin.
    </p>;

    return (
        <div className={style.projects}>
            <DescriptionBox title="Time Tracker" description={timetracker} />
            <DescriptionBox title="Name Search" description={name_search} />
        </div>
    );
}
