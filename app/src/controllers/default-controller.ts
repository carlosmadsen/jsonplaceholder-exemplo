import { DefaultView } from "../views/default-view.js";
import { Controller } from "./controller.js";

export class DefaultController implements Controller {
	private defaultView = new DefaultView('#divApp');
	public render(): void {
		this.defaultView.update(null);
	}
}
