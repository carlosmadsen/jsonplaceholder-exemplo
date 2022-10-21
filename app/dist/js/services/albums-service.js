export class AlbumsService {
    constructor() {
        this.url = 'https://jsonplaceholder.typicode.com/albums';
    }
    getAlbums(id = null) {
        return fetch(this.url + (id ? '?userId=' + id : ''))
            .then(res => {
            return res.json();
        })
            .then((albuns) => {
            return albuns;
        });
    }
    getAlbum(id) {
        return fetch(this.url + '?id=' + id)
            .then(res => {
            return res.json();
        })
            .then((albums) => {
            if (albums.length > 0) {
                return albums[0];
            }
            else {
                return null;
            }
        });
    }
}
