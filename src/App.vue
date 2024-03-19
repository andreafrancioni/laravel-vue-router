<script>
import AppHeader from "./components/AppHeader.vue"

import axios from 'axios'; //importo Axios
import { store } from "./store.js" //state management
import AppFooter from "./components/AppFooter.vue";

export default {
	components: {
		AppHeader,
		AppFooter,
	},
	data() {
		return {
			store
		}
	},
	mounted() {
		this.doThings();

		let url = this.store.apiUrl + this.store.apiEvent;

		axios.get(url).then(risultato => {
			this.store.eventArray = risultato.data.results;

			console.log(risultato);
		}).catch(errore => {
			console.error(errore);
		});
	},
	methods: {
		doThings() {
			console.log("App.vue does things");
		}
	}
}
</script>

<template>
	<header>
		<AppHeader />
	</header>
	<router-view></router-view>
	<footer>
		<AppFooter />
	</footer>
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use './styles/general.scss';
</style>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di App.vue
main {
	padding: 1rem;
}
</style>