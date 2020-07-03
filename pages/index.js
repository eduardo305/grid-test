import { useState } from 'react';
import Grid from '../components/Grid';
import Icon from '../components/Icon';
import Box from '../components/Box';

const icons = [
	'apple-calculator-icon.png',
	'apple-calendar-icon.png',
	'apple-camera-icon.png',
	'apple-clock-icon.png',
	'apple-connect-icon.png',
	'apple-contacts-icon.png',
	'apple-heart-icon.png',
	'apple-home-icon.png',
	'apple-imovie-icon.png',
	'apple-notes-icon.png',
	'apple-reminders-icon.png',
	'apple-photos-icon.png',
	'apple-safari-icon.png',
	'apple-stocks-icon.png',
	'apple-store-icon.png',
	'apple-tv-icon.png',
	'apple-wallet-icon.png',
];

export default function Home() {
	const [contentIcon, setContentIcon] = useState(false);

	const renderIcons = () => {
		return icons.map((icon, i) => {
			return <Icon icon={icon} key={i} />;
		});
	};

	const renderBoxes = () => {
		return icons.map((box, i) => {
			return <Box key={i} label={i} />;
		});
	};

	const renderContent = () => (contentIcon ? renderIcons() : renderBoxes());

	const switchContentType = () => setContentIcon(!contentIcon);

	return (
		<div className="container" style={{ maxWidth: '900px', margin: 'auto' }}>
			<button onClick={switchContentType}>
				{contentIcon ? 'boxes' : 'icon'}
			</button>
			<Grid>
				<Box
					height="100%"
					colSpan="auto / span 2"
					rowSpan="auto / span 2"
					backgroundColor="aliceblue"
				/>
				{renderContent()}
			</Grid>
		</div>
	);
}
