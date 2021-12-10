<script>
	let input;

	export function focus() {
		input.focus();
	}
</script>

<input bind:this={input}/>


for app
<!-- <script>
	import InputField from './InputField.svelte';

	let field;
</script>

<InputField bind:this={field}/>

<button on:click={() => field.focus()}>Focus field</button> -->