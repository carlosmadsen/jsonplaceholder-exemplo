import { AlbumsService } from "../services/albums-service.js";
import { AlbumsView } from "../views/albums-view.js";
export class AlbumsController {
    constructor(id = null, seletor = '#divApp') {
        this.id = id;
        this.seletor = seletor;
        this.albumsService = new AlbumsService();
    }
    render() {
        this.albumsService.getAlbums(this.id)
            .then((albuns) => {
            const albumsView = new AlbumsView(this.seletor);
            albumsView.update(albuns);
        });
    }
}
