import { View } from "./view.js";

export class DefaultView extends View<any> {

	protected template(model: any) {
		return `
		<a href="/albums"  class="btn btn-primary" type="button">Albums</a>
		<a href="/users"  class="btn btn-primary" type="button">Users</a>		
        `;
	}
}
