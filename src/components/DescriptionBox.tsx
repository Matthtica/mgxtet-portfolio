import styles from './DescriptionBox.module.scss';

interface DescriptionProp {
    description: JSX.Element
}

export default function DescriptionBox(prop: DescriptionProp) {
    return <div className={styles.description}>
        {prop.description}
    </div>;
}
