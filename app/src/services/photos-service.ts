import { Photo } from "../models/photo.js";

export class PhotosService {
	private url: string = 'https://jsonplaceholder.typicode.com/photos';

	public getPhotos(albumId: number): Promise<Photo[]> {
		return fetch(this.url + '?albumId=' + albumId)
			.then(res => {
				return res.json();
			})
			.then((photos: Photo[]) => {
				return photos;
			});
	}

	public getPhoto(id: number): Promise<Photo | null> {
		return fetch(this.url + '?id=' + id)
			.then(res => {
				return res.json();
			})
			.then((photos: Photo[]) => {
				if (photos.length > 0) {
					return photos[0];
				} else {
					return null;
				}
			});
	}
}