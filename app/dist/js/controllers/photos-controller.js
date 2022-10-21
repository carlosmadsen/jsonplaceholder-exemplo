import { PhotosService } from "../services/photos-service.js";
import { PhotosView } from "../views/photos-view.js";
export class PhotoController {
    constructor(id, seletor) {
        this.id = id;
        this.seletor = seletor;
        this.photosService = new PhotosService();
    }
    render() {
        this.photosService.getPhotos(this.id)
            .then((photos) => {
            const photosView = new PhotosView(this.seletor);
            photosView.update(photos);
        });
    }
}
