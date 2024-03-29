export default class DarkModeController {
	#control;
	#button;
	#logo;

	constructor(_handlerMap) {
		this.#control = _handlerMap.get(`dark-mode-control`);
		this.#button = _handlerMap.get(`dark-mode-button`);
		this.#logo = _handlerMap.get(`logo`);

		this.#button.subscribe(`click`, () => this.#buttonClick());
		this.#logo.subscribe(`change`, () => this.#imageChange());
	}

	#buttonClick() {
		this.#control.toggle();
	}

	#imageChange() {
		console.log('success');
	}

	enable() {
		this.#control.check();
	}

	disable() {
		this.#control.uncheck();
	}
}