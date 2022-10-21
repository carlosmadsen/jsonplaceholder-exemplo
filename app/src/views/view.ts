export abstract class View<T> {
	private elemento: HTMLElement;
	
	constructor(seletor: string) {
		const elemento = document.querySelector(seletor);
		if (elemento) {
			this.elemento = elemento as HTMLElement;
		} else {
			throw Error(`Não possível encontrar o elemento com o seletor: ${seletor}.`);
		}		
	}

	protected abstract template(model: T): string;

	public update(model: T): void {
		let template = this.template(model);		
		this.elemento.innerHTML = template;
	}
}
