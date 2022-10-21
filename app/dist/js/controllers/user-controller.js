import { Mensagem } from "../models/mensagem.js";
import { UsersService } from "../services/users-service.js";
import { MensagemView } from "../views/mensagem-view.js";
import { UserView } from "../views/user-view.js";
import { AlbumsController } from "./albums-controller.js";
export class UserController {
    constructor(id) {
        this.id = id;
        this.userView = new UserView('#divApp');
        this.mensagemView = new MensagemView('#divApp');
        this.usersService = new UsersService();
    }
    render() {
        if (this.id) {
            this.usersService.getUser(this.id)
                .then((user) => {
                if (user) {
                    this.userView.update(user);
                    const albumsController = new AlbumsController(this.id, '#albumsUser');
                    albumsController.render();
                }
                else {
                    this.mensagemView.update(new Mensagem("danger", `Identificador de usuário ${this.id} inválido.`, "/users"));
                }
            });
        }
        else {
            this.mensagemView.update(new Mensagem("danger", "Usauário não informado.", "/users"));
        }
    }
}
