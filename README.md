# Todo
A simple todo App with js, and it's intergrated with a simple laravel api.


If there's no api set up, un comment the table tag and its children.

<!-- <table class="table table-hover table-bordered" id="todoTable">
					<thead id="tableHead">
						<tr>
							<th>Todo Name</th>
							<th>Description</th>
							<th>Date</th>
							<th>Properties</th>
						</tr>
					</thead>
					<tbody id="tableBody">
						
					</tbody>
				</table> -->

Then change the action on the create button to " todo.createTodo(this)"

<button onclick="todo.createTodo(this);" class="btn btn-info" id="myTodo" >Create</button>
