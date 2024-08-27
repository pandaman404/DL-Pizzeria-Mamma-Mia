import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

	* {
		margin: 0;
		padding: 0;
		font-family: "Poppins", sans-serif;
	}

	*, *::before, *:after {
		box-sizing: border-box;
	}

	input, button, textarea, select {
		font: inherit;
	}
	
	p {
		text-wrap: pretty
	}

	h1, h2, h3, h4, h5, h6 {
		text-wrap: balance;
	}

	body {
		min-height: 100dvh;
	}
`;
