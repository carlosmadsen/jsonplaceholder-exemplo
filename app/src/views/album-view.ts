import { Album } from "../models/album.js";
import { View } from "./view.js";

export class AlbumView extends View<Album> {

	protected template(model: Album) {
		return `
		<h2 class="text-center">Album</h2>        
		<div class="container">
			<div class="row">
				<div class="col">ID</div>
				<div class="col">${model.id}</div>
				<div class="w-100"></div>
				<div class="col">USER ID</div>
				<div class="col"><a href="/user?id=${model.userId}">${model.userId}</a></div>
				<div class="w-100"></div>
				<div class="col">TITLE</div>
				<div class="col">${model.title}</div>
			</div>
			<div class="row">
				<div class="col">
					<a href="/albums"  style="margin-top:10px;margin-bottom:10px;" class="btn btn-primary" type="button">Voltar para os albums</a>	
				</div>
			</div>
			<div class="row">
				<div class="col" id="albumPhotos" >						
				</div>
			</div>
		</div>
        `;
	}
}
