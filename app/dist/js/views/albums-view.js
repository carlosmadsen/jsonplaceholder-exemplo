import { View } from "./view.js";
export class AlbumsView extends View {
    template(model) {
        return `
		<h2 class="text-center">Albums</h2>
		<a href="/"  style="margin-top:10px;margin-bottom:10px;" class="btn btn-primary" type="button">Voltar para o início</a>	
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>USER ID</th>
                    <th>TITLE</th>
                </tr>
            </thead>
            <tbody>
                ${model.map(album => {
            return `
						<tr>
							<td>
								<a href="/album?id=${album.id}">${album.id}</a>
							</td>
							<td>
								<a href="/user?id=${album.userId}">${album.userId}</a>
							</td>
							<td>
								<a href="/album?id=${album.id}">${album.title}</a>
							</td>
						</tr>
					`;
        }).join('')}
            </tbody>
        </table>
        `;
    }
}
