const lightColor = {
	main: '#228B22',
	light: '#2f9e2f',
	dark: '#0d5c0d',
	fullColor: '#fff',
	fullColorInverse: '#000'
};

const darkColor = {
	main: '#031c09',
	light: '#241300',
	dark: '#000',
	fullColor: '#000',
	fullColorInverse: '#fff'
};
const themeModal = () => {
	const isDarkMode = true;

	const neutralColor = {
		yellow: 'yellow',
		skin: '#f0c089',
		sandybrown: '#f4a560',
		orange: '#db7909',
		red: '#ff0000',
		brown: '#A52A2A',
		maroon: '#800000',
		seaGreen: '#43f7d0',
		forestGreen: '#228B22',
		green: 'green',
		skyBlue: '#00bbf2',
		blue: 'blue',
		purple: 'purple',
		voilet: '#8d70ff',
		black: '#000',
		white: '#fff',
		smoke: '#848884',
		orangisGrey: '#5c534c'
	};

	return isDarkMode
		? { ...darkColor, ...neutralColor }
		: { ...lightColor, ...neutralColor };
};

export default themeModal;
