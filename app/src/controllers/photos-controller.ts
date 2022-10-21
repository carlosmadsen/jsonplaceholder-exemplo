import { PhotosService } from "../services/photos-service.js";
import { Photo } from "../models/photo.js";
import { Controller } from "./controller.js";
import { PhotosView } from "../views/photos-view.js";

export class PhotoController implements Controller {
	private photosService = new PhotosService();

	constructor(
		private readonly id: number,
		private readonly seletor: string
		) {
	}

	public render(): void {
		this.photosService.getPhotos(this.id)
			.then((photos: Photo[]) => {
				const photosView = new PhotosView(this.seletor);
				photosView.update(photos);
			});
	}
}
