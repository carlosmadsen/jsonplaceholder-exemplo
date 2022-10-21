import { User } from "../models/user.js";
import { UsersService } from "../services/users-service.js";
import { UsersView } from "../views/users-view.js";
import { Controller } from "./controller.js";

export class UsersController implements Controller {
	private usersView = new UsersView('#divApp');
	private usersService = new UsersService();

	public render(): void {
		this.usersService.getUsers()
			.then((users: User[]) => {
				this.usersView.update(users);
			});
	}
}
