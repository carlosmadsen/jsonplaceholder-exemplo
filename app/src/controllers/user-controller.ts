import { Mensagem } from "../models/mensagem.js";
import { User } from "../models/user.js";
import { UsersService } from "../services/users-service.js";
import { MensagemView } from "../views/mensagem-view.js";
import { UserView } from "../views/user-view.js";
import { AlbumsController } from "./albums-controller.js";
import { Controller } from "./controller.js";

export class UserController implements Controller {
	private userView = new UserView('#divApp');
	private mensagemView = new MensagemView('#divApp');
	private usersService = new UsersService();

	constructor(public readonly id: number) {
	}

	public render(): void {
		if (this.id) {
			this.usersService.getUser(this.id)
				.then((user: User) => {
					if (user) {
						this.userView.update(user);
						const albumsController = new AlbumsController(this.id, '#albumsUser');
						albumsController.render();
					} else {
						this.mensagemView.update(new Mensagem("danger", `Identificador de usuário ${this.id} inválido.`, "/users"));
					}
				});
		} else {
			this.mensagemView.update(new Mensagem("danger", "Usauário não informado.", "/users"));
		}
	}
}
