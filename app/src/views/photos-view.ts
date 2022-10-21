import { Photo } from "../models/photo.js";
import { View } from "./view.js";

export class PhotosView extends View<Photo[]> {

	protected template(model: Photo[]) {
		return `
		<h2 class="text-center">Photos</h2>
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>ALBUM ID</th>
                    <th>TITLE</th>
                </tr>
            </thead>
            <tbody>
                ${model.map(photo => {
					return `
						<tr>
							<td>
								<a href="/photo?id=${photo.id}">${photo.id}</a>
							</td>
							<td>
								${photo.albumId}
							</td>
							<td>
								<a href="/photo?id=${photo.id}">${photo.title}</a>
							</td>
						</tr>
					`;
				}).join('')}
            </tbody>
        </table>
        `;
	}
}
