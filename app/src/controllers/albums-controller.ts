import { Album } from "../models/album.js";
import { AlbumsService } from "../services/albums-service.js";
import { AlbumsView } from "../views/albums-view.js";
import { Controller } from "./controller.js";

export class AlbumsController implements Controller {
	private albumsService = new AlbumsService();

	constructor(
		private readonly id: number | null = null,
		private readonly seletor: string = '#divApp'
		) {
	}

	public render(): void {
		this.albumsService.getAlbums(this.id)
			.then((albuns: Album[]) => {
				const albumsView = new AlbumsView(this.seletor);
				albumsView.update(albuns);
			});
	}
}
