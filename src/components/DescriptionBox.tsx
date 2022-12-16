import styles from './DescriptionBox.module.scss';

interface DescriptionProp {
    description: string
}

export default function DescriptionBox(prop: DescriptionProp) {
    return <div className={styles.description}>
        <p>{prop.description}</p>
    </div>;
}
