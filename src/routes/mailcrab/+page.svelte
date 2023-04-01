<main class="mx-10">
	<form method="POST" enctype="multipart/form-data">
		<div class="flex flex-col flex-grow gap-5">
			<input type="text" name="name" placeholder="Name" class="input-bordered input w-full" />
			<textarea
				type="text"
				name="description"
				placeholder="Description"
				class="input-bordered input w-full"
			/>
			<!-- <input type="file" name="pdf" accept="application/pdf" class="input-bordered input w-full" /> -->
			<input
				type="file"
				name="pdf"
				accept="application/pdf"
				class="input-bordered input w-full"
				multiple
			/>

			<button class="btn btn-primary"> Send Mail </button>
		</div>
	</form>
</main>
