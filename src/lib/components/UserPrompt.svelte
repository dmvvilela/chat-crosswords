<script lang="ts">
	export let prompt = '';
	export let onClick: () => void;
	export let disabled = false;
</script>

<div class="dark mt-12">
	<form>
		<div class="w-full mb-4 border rounded-lg bg-gray-700 border-gray-600">
			<div class="px-4 py-2 rounded-t-lg bg-gray-800">
				<label for="comment" class="sr-only">Crosswords topic</label>
				<textarea
					id="prompt"
					rows="4"
					class="w-full px-0 text-sm border-0 bg-gray-800 focus:ring-0 text-white placeholder-gray-400 outline-none"
					placeholder="Prompt a crosswords topic..."
					bind:value={prompt}
					autocomplete="off"
					required
				/>
			</div>
			<div class="flex items-center justify-between px-3 py-2 border-t border-gray-600">
				<button
					type="button"
					class="inline-flex cursor-pointer items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-900 hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-blue-700"
					on:click={onClick}
					{disabled}
				>
					Generate Crossword
				</button>
			</div>
		</div>
	</form>
	<p class="ml-auto text-xs text-gray-500">
		For the purposes of this proof of concept, the user should use his own API Key below. For more
		information, check the repository on my
		<a
			href="https://github.com/dmvvilela/chat-crosswords"
			target="_blank"
			class="text-blue-600 hover:underline">Github</a
		> account.
	</p>
</div>

<style>
	*,
	::before,
	::after {
		font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
		border-width: 0;
		border-style: solid;
		border-color: theme('borderColor.DEFAULT', currentColor);
	}
</style>
