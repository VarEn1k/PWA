
class App {

    constructor() {
        const container = document.createElement('div');
        document.body.appendChild(container);

		const title = document.createElement('h3')
		title.innerText = "Hello pinguin from madagaskar!"
		container.appendChild(title)
		
		this.info = document.createElement('p')
		container.appendChild(this.info)
		
        window.addEventListener('resize', this.resize.bind(this));
    }

	resize() {
		const aspect = (window.innerWidth / window.innerHeight).toFixed(3)
		this.info.innerHTML = `aspect: ${aspect}<br>` +
			`width: ${window.innerWidth}<br>` +
			`height: ${window.innerHeight}<br>`
	}
}

export {App};
