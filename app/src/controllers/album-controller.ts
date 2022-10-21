import { Album } from "../models/album.js";
import { Mensagem } from "../models/mensagem.js";
import { AlbumsService } from "../services/albums-service.js";
import { AlbumView } from "../views/album-view.js";
import { MensagemView } from "../views/mensagem-view.js";
import { Controller } from "./controller.js";
import { PhotoController } from "./photos-controller.js";

export class AlbumController implements Controller {
	private albumView = new AlbumView('#divApp');
	private mensagemView = new MensagemView('#divApp');
	private albumsService = new AlbumsService();
		
	constructor(public readonly id: number) {
	}

	public render(): void {
		if (this.id) {
			this.albumsService.getAlbum(this.id)
				.then((album: Album) => {
					if (album) {
						this.albumView.update(album);
							const photosController = new PhotoController(this.id, '#albumPhotos');
							photosController.render();
					} else {
						this.mensagemView.update(new Mensagem("danger",  `Identificador de album ${this.id} inválido.`, "/albums"));
					}	
				});
		} else {
			this.mensagemView.update(new Mensagem("danger", "Album não informado.", "/albums"));
		}		
	}
}