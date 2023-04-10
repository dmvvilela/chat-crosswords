<script lang="ts">
	export let prompt = '';
</script>

<div class="mt-12">
	<form>
		<div
			class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
		>
			<div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
				<label for="comment" class="sr-only">Crosswords topic</label>
				<textarea
					id="comment"
					rows="4"
					class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
					placeholder="Prompt a crosswords topic..."
					bind:value={prompt}
					required
				/>
			</div>
			<div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
				<button
					type="submit"
					class="inline-flex cursor-pointer items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
				>
					Generate Crossword
				</button>
			</div>
		</div>
	</form>
	<!-- <p class="ml-auto text-xs text-gray-500 dark:text-gray-400">
		Remember, contributions to this topic should follow our 
		<a
			class="text-blue-600 dark:text-blue-500 hover:underline">Community Guidelines</a
		>.
	</p> -->
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
