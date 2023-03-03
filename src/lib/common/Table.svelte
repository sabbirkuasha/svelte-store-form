<script>
	export let contacts;

	let contact = [
		{
			id: 'sdfsdf',
			name: 'Audity',
			email: 'audity@gmail.com',
			job: 'Deshal',
			address: 'somthing, somthing'
		}
	];
</script>

<div class="overflow-x-auto">
	<table class="table w-full">
		<!-- head -->
		<thead>
			<tr>
				<th>ID</th>
				<th>Name</th>

				<th>email</th>
				<th>Job</th>
				<th>Address</th>
				<th>Action</th>
			</tr>
		</thead>
		<tbody>
			{#each contacts as contact, i}
				<!-- row 1 -->
				<tr>
					<!-- <th>{contact.id}</th> -->
					<th>{i + 1}</th>
					<td>{contact.name}</td>
					<td>{contact.email}</td>
					<td>{contact.job}</td>
					<td>{contact.address}</td>
					<td>
						<form method="POST" action="?/deleteInfo">
							<input name="id" type="hidden" hidden value={contact.id} />
							<button class="btn btn-primary btn-circle ">X</button>
						</form>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
