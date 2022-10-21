import { PhotosService } from "../services/photos-service.js";
import { PhotoView } from "../views/photo-view.js";
import { MensagemView } from "../views/mensagem-view.js";
import { Mensagem } from "../models/mensagem.js";
export class PhotoController {
    constructor(id) {
        this.id = id;
        this.photosService = new PhotosService();
        this.photoView = new PhotoView('#divApp');
        this.mensagemView = new MensagemView('#divApp');
    }
    render() {
        if (this.id) {
            this.photosService.getPhoto(this.id)
                .then((photo) => {
                if (photo) {
                    this.photoView.update(photo);
                }
                else {
                    this.mensagemView.update(new Mensagem("danger", `Identificador de foto ${this.id} inválida.`, "/"));
                }
            });
        }
        else {
            this.mensagemView.update(new Mensagem("danger", "Foto não informada.", "/"));
        }
    }
}
