import { View } from "./view.js";
export class UserView extends View {
    template(model) {
        return `
		<h2 class="text-center">User</h2>        
		<div class="container">
			<div class="row">
				<div class="col">ID</div>
				<div class="col">${model.id}</div>
				<div class="w-100"></div>
				<div class="col">USER NAME</div>
				<div class="col">${model.username}</div>
				<div class="w-100"></div>
				<div class="col">NAME</div>
				<div class="col">${model.name}</div>
			</div>
			<div class="row">
				<div class="col">
					<a href="/users"  style="margin-top:10px;margin-bottom:10px;" class="btn btn-primary" type="button">Voltar para usuários</a>	
				</div>
			</div>
			<div class="row">
				<div class="col" id="albumsUser" >						
				</div>
			</div>
		</div>
        `;
    }
}
