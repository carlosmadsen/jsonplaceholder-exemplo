import { View } from "./view.js";
export class MensagemView extends View {
    template(model) {
        return `
		<h2 class="text-center">Album</h2>        
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="alert alert-${model.tipo}" role="alert">
						${model.texto}
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col">
					${model.rota && `<a href="${model.rota}"  style="margin-top:10px;" class="btn btn-primary" type="button">Voltar</a>`}						
				</div>
			</div>
		</div>
        `;
    }
}
