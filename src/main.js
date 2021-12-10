// import '../node_modules/materialize-css/dist/js/materialize'
// import '../node_modules/materialize-css/dist/css/materialize.css'
import './global.css'

import App from './App.svelte';

const app = new App({
	target: document.querySelector('#root'),
	props: {
		name: 'world'
	}
});

// export default app;