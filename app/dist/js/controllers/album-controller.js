import { Mensagem } from "../models/mensagem.js";
import { AlbumsService } from "../services/albums-service.js";
import { AlbumView } from "../views/album-view.js";
import { MensagemView } from "../views/mensagem-view.js";
import { PhotoController } from "./photos-controller.js";
export class AlbumController {
    constructor(id) {
        this.id = id;
        this.albumView = new AlbumView('#divApp');
        this.mensagemView = new MensagemView('#divApp');
        this.albumsService = new AlbumsService();
    }
    render() {
        if (this.id) {
            this.albumsService.getAlbum(this.id)
                .then((album) => {
                if (album) {
                    this.albumView.update(album);
                    const photosController = new PhotoController(this.id, '#albumPhotos');
                    photosController.render();
                }
                else {
                    this.mensagemView.update(new Mensagem("danger", `Identificador de album ${this.id} inválido.`, "/albums"));
                }
            });
        }
        else {
            this.mensagemView.update(new Mensagem("danger", "Album não informado.", "/albums"));
        }
    }
}
