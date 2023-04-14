export function serializeFormData (formID) {
	let out = {};
	let form = document.querySelector(formID);
	for (let i in form.elements) {
		let element = form.elements[i];
		if (!(element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement || element instanceof HTMLSelectElement)) {
			continue;
		}
		if (element.type === "checkbox") {
			out[element.name] = {
				type: element.type,
				value: element.checked
			};
		}
		else {
			out[element.name] = {
				type: element.type,
				value: element.value
			};
		}
	}
	return out;
}

export function deserializeFormData (form, data) {
	let area = document.querySelector(form);
	for (let key in data) {
		let element = data[key];
		if (element.type === "checkbox") {
			document.querySelector(`#${key}`).checked = element.value;
		}
		else {
			document.querySelector(`#${key}`).value = element.value;
		}
	}
}

export function storeData (data) {
	localStorage.setItem("character-data", JSON.stringify(data));
}

export function getData () {
	let data = JSON.parse(localStorage.getItem("character-data"));
	return data ? data : {};
}