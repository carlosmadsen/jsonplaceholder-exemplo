import { Album } from "../models/album.js";

export class AlbumsService {
	private url: string = 'https://jsonplaceholder.typicode.com/albums';

	public getAlbums(id: number | null = null): Promise<Album[]> {
		
		return fetch(this.url + (id ? '?userId=' + id  : ''))
			.then(res => {
				return res.json();
			})
			.then((albuns: Album[]) => {
				return albuns;
			});
	}

	public getAlbum(id: number): Promise<Album | null> {
		return fetch(this.url + '?id='+id)
			.then(res => {
				return res.json();
			})
			.then((albums: Album[]) => {
				if (albums.length > 0) {
					return albums[0];
				} else {
					return null;
				}
			});
	}
}