import { Photo } from "../models/photo.js";
import { View } from "./view.js";

export class PhotoView extends View<Photo> {

	protected template(model: Photo) {
		return `
		<h2 class="text-center">Photo</h2>
        <a href="/album?id=${model.albumId}"  style="margin-top:10px;margin-bottom:10px;" class="btn btn-primary" type="button">Voltar para o album</a>	
		<div class="card" style="width: 18rem;">
			<img class="card-img-top" src="${model.url}">
			<div class="card-body">
				${model.title}
			</div>
		</div>		
        `;
	}
}
