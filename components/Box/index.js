import styles from './Box.module.scss';

const Box = ({
	width = '100%',
	height = `100%`,
	label = 'box',
	colSpan,
	rowSpan,
	backgroundColor = 'beige',
}) => {
	return (
		<div
			className={styles.box}
			style={{
				width,
				height,
				gridColumn: colSpan,
				gridRow: rowSpan,
				backgroundColor,
			}}
		>
			{label}
		</div>
	);
};

export default Box;
