const regex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/g;
let tasksUl
var divHora;
const reminderList = document.getElementById('reminder-list');

function addTask() {
	let hour;
	while (!regex.test(hour)) {
		hour = prompt('Digite a hora escolhida! (hh:mm)');
	}
	const message = prompt('Digite sua mensagem: ');
	document.getElementById('hidden').style.display = 'none'
	reminderList.appendChild(createLi(hour, message));
}
function createLi(hour, message) {
	const createItem = document.createElement('li');
	createItem.classList.add('reminder-item');
	createItem.classList.add(`date-${date.getFullYear()}${date.getMonth()}`);
	createItem.classList.add(`hour-${hour}`)
	createItem.innerHTML = `
  <div>${message}</div>
  <div id="hora">${hour}</div>
 `;
	createItem.classList;
	return createItem;
}

const date = new Date();

function updateDate() {
	document.getElementById("display-date").innerHTML = date.toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' });
	tasksUl = document.querySelectorAll("#reminder-list li");
	divHora = document.querySelectorAll("#hora");
	console.log(tasksUl);

	for (let t = 0; t < tasksUl.length; t++) {
		if (tasksUl[t].classList.contains(`date-${date.getFullYear()}${date.getMonth()}`)) {
			(() => {
				const frag = document.createDocumentFragment();
				const list = document.querySelector("ul");
				const items = list.querySelectorAll("li");
				const sortedList = Array.from(items).sort(function (a, b) {
					const c = a.lastElementChild.textContent,
						d = b.lastElementChild.textContent;
					return c < d ? -1 : c > d ? 1 : 0;
				});
				for (let item of sortedList) {
					frag.appendChild(item);
				}
				list.appendChild(frag);
			})();
			document.getElementById('hidden').style.display = 'none'
			tasksUl[t].style.display = "flex";
		} else {
			tasksUl[t].style.display = "none";
			document.getElementById('hidden').style.display = 'flex'
		}
	}

}

updateDate();

function addMonthInDate() {
	date.setMonth(date.getMonth() + 1);
	updateDate();
}

function minusMonthInDate() {
	date.setMonth(date.getMonth() - 1);
	updateDate();
}

function ordenaPorHora(arr) {
	let ordenaTask = arr.sort((a, b) => {
		let horaA = a.lastElementChild.textContent;
		let horaB = b.lastElementChild.textContent;
		return horaA.localeCompare(horaB);
	})
	console.log(ordenaTask);
	var ordenaTaskNodeList = document.createDocumentFragment();
	ordenaTask.forEach(element => {
		ordenaTaskNodeList.appendChild(element.cloneNode())
	});
	return ordenaTaskNodeList.childNodes;
}