import { AlbumsController } from "./controllers/albums-controller.js";
import { DefaultController } from "./controllers/default-controller.js";
import { UsersController } from "./controllers/users-controller.js";
import { AlbumController } from "./controllers/album-controller.js";
import { UserController } from "./controllers/user-controller.js";
import { PhotoController } from "./controllers/photo-controller.js";
export class Router {
    getController() {
        const rota = window.location.pathname;
        const params = new URLSearchParams(window.location.search);
        const paramId = params.get("id");
        let id = 0;
        if (paramId) {
            id = parseInt(paramId);
        }
        if (rota === '/albums') {
            return new AlbumsController();
        }
        else if (rota === '/album') {
            return new AlbumController(id);
        }
        else if (rota === '/photo') {
            return new PhotoController(id);
        }
        else if (rota === '/users') {
            return new UsersController();
        }
        else if (rota === '/user') {
            return new UserController(id);
        }
        else {
            return new DefaultController();
        }
    }
}
