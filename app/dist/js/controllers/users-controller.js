import { UsersService } from "../services/users-service.js";
import { UsersView } from "../views/users-view.js";
export class UsersController {
    constructor() {
        this.usersView = new UsersView('#divApp');
        this.usersService = new UsersService();
    }
    render() {
        this.usersService.getUsers()
            .then((users) => {
            this.usersView.update(users);
        });
    }
}
