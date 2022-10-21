export class PhotosService {
    constructor() {
        this.url = 'https://jsonplaceholder.typicode.com/photos';
    }
    getPhotos(albumId) {
        return fetch(this.url + '?albumId=' + albumId)
            .then(res => {
            return res.json();
        })
            .then((photos) => {
            return photos;
        });
    }
    getPhoto(id) {
        return fetch(this.url + '?id=' + id)
            .then(res => {
            return res.json();
        })
            .then((photos) => {
            if (photos.length > 0) {
                return photos[0];
            }
            else {
                return null;
            }
        });
    }
}
