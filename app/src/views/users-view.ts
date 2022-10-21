import { User } from "../models/user.js";
import { View } from "./view.js";

export class UsersView extends View<User[]> {

	protected template(model: User[]) {
		return `
		<h2 class="text-center">Users</h2>
		<a href="/"  style="margin-top:10px;margin-bottom:10px;" class="btn btn-primary" type="button">Voltar para o início</a>	
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>USER NAME</th>
                    <th>NAME</th>
                </tr>
            </thead>
            <tbody>
                ${model.map(user => {
					return `
						<tr>
							<td>
								<a href="/user?id=${user.id}">${user.id}</a>
							</td>
							<td>
								${user.username}
							</td>
							<td>
								<a href="/user?id=${user.id}">${user.name}</a>
							</td>
						</tr>
					`;
				}).join('')}
            </tbody>
        </table>
        `;
	}
}
