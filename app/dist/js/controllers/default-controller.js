import { DefaultView } from "../views/default-view.js";
export class DefaultController {
    constructor() {
        this.defaultView = new DefaultView('#divApp');
    }
    render() {
        this.defaultView.update(null);
    }
}
