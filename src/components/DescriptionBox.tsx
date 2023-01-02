import styles from './DescriptionBox.module.scss';

interface DescriptionProp {
    title: any,
    description: JSX.Element
}

export default function DescriptionBox(prop: DescriptionProp) {
    return <div>
        <div className={styles.body}>
            <div className={styles.title}>
                {prop.title}
            </div>
            <div className={styles.description}>
                {prop.description}
            </div>
        </div>
    </div>;
}
