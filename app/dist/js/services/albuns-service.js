export class AlbunsService {
    constructor() {
        this.url = 'https://jsonplaceholder.typicode.com/albums';
    }
    obtemAlbuns() {
        return fetch(this.url)
            .then(res => {
            return res.json();
        })
            .then((albuns) => {
            return albuns;
        });
    }
    obtemAlbum(id) {
        return fetch(this.url + '?id=' + id)
            .then(res => {
            return res.json();
        })
            .then((albuns) => {
            return albuns[0];
        });
    }
}
