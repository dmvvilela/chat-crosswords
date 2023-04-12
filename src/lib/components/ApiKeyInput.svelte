<script lang="ts">
	export let apiKey = '';
</script>

<form class="pt-2">
	<label for="chat" class="sr-only">Add your own OpenAI API Key</label>
	<div class="flex items-center px-3 py-2 rounded-lg bg-gray-700">
		<input
			id="api-key"
			type="password"
			class="block mx-2 p-2.5 w-full text-sm text-white outline-none rounded-lg border bg-gray-800 border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
			placeholder="Add your own OpenAI API Key"
			bind:value={apiKey}
		/>
	</div>
</form>
