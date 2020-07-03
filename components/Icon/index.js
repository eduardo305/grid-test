import styles from './Icon.module.scss';

const Icon = ({ icon }) => {
	return <img src={`/assets/icons/${icon}`} className={styles.icon} />;
};

export default Icon;
