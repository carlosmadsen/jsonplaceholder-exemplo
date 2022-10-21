import { PhotosService } from "../services/photos-service.js";
import { Photo } from "../models/photo.js";
import { Controller } from "./controller.js";
import { PhotoView } from "../views/photo-view.js";
import { MensagemView } from "../views/mensagem-view.js";
import { Mensagem } from "../models/mensagem.js";

export class PhotoController implements Controller {
	private photosService = new PhotosService();
	private photoView = new PhotoView('#divApp');
	private mensagemView = new MensagemView('#divApp');

	constructor(
		private readonly id: number		
		) {
	}

	public render(): void {
		if (this.id) {
			this.photosService.getPhoto(this.id)			
				.then((photo: Photo) => {
					if (photo) {
						this.photoView.update(photo);
					} else {
						this.mensagemView.update(new Mensagem("danger", `Identificador de foto ${this.id} inválida.`, "/"));
					}
				});
		} else {
			this.mensagemView.update(new Mensagem("danger", "Foto não informada.", "/"));
		}
	}
}
