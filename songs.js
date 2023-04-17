import {serializeFormData, deserializeFormData, storeData, getData} from "./utils.js";
import {combatModifiers, rpModifiers, features, spellSlots} from "./songs-meta.js"

window.addEventListener("DOMContentLoaded", init);

function init () {
	buildModifiers("#combat-modifiers", combatModifiers);
	buildModifiers("#rp-modifiers", rpModifiers);
	buildFeatures("#features", features);
	buildSpells("#spellcasting-spells", spellSlots);

	let data = getData();
	deserializeFormData("#character-data", data);

	calculateModifiers(combatModifiers);
	calculateModifiers(rpModifiers)
	calculateSpellCasting();;

	let inputs = document.querySelectorAll("input, select, textarea");
	for (let i = 0; i < inputs.length; i++) {
		inputs[i].addEventListener("input", refresh);
	}
}

function refresh () {
	calculateModifiers(combatModifiers);
	calculateModifiers(rpModifiers);
	calculateSpellCasting();

	let data = serializeFormData("#character-data");
	storeData(data);
}

function buildModifiers(container, data) {
	let area = document.querySelector(container);
	for (let i in data) {
		let category = data[i];
		let categoryDiv = document.createElement("div");
		area.append(categoryDiv);
		categoryDiv.style = "display: contents;";
		categoryDiv.innerHTML = `<p style="grid-column: 1 / span 4;"><b>${category.category}</b></p>`;
		for (let j in data[i].items) {
			let item = data[i].items[j];
			if (item.type === "full") {
				categoryDiv.innerHTML += `
					<div style="display: contents;">
						<p>${item.display ? item.display : item.name}</p>
						<label>Training<input id="${category.category}-${item.name}-training" name="${category.category}-${item.name}-training" type="number"></label>
						<label>MB<input id="${category.category}-${item.name}-mb" name="${category.category}-${item.name}-mb" type="checkbox"></label>
						<output id="${category.category}-${item.name}-result"></output>
					</div>
				`;
			}
			else if (item.type === "training-only"){
				categoryDiv.innerHTML += `
					<div style="display: contents;">
						<p>${item.display ? item.display : item.name}</p>
						<label style="grid-column: 2 / span 3;">Training<input id="${category.category}-${item.name}-training" name="${category.category}-${item.name}-training" type="checkbox"></label>
						<input id="${category.category}-${item.name}-mb" name="${category.category}-${item.name}-mb" type="checkbox" hidden>
						<output class="none" id="${category.category}-${item.name}-result"></output>
					</div>
				`;
			}
		}
	}
}

function buildFeatures (container) {
	let area = document.querySelector(container);
	for (let i in features) {
		let feature = features[i];
		area.innerHTML += `
			<p class="w3-hide-small">${feature.name}</p>
			<p class="w3-hide-small">${feature.level}</p>
			<div class="grow-wrap">
				<textarea id="features-${i}" name="features-${i}" placeholder="Feature Name & Description" onInput="this.parentNode.dataset.replicatedValue = this.value" rows="1"></textarea>
			</div>
		`;
	}
}

function buildSpells (container, numSpells) {
	let area = document.querySelector(container);
	for (let i = 0; i < numSpells; i++) {
		area.innerHTML += `
			<input id="spell-${i}-prep" name="spell-${i}-prep" aria-label="Spell ${i} Prepared" type="checkbox" style="margin-left: auto; margin-right: auto;">
			<div class="grow-wrap">
				<textarea id="spell-${i}-info" name="spell-${i}-info" placeholder="Spell Name & Description" onInput="this.parentNode.dataset.replicatedValue = this.value" rows="1"></textarea>
			</div>
		`;
	}
}

function calculateModifiers (data) {
	for (let i in data) {
		let category = data[i];
		for (let j in data[i].items) {
			let item = data[i].items[j];
			setModifierVal(category.category, item.name, item.value);
		}
	}
}

function calculateSpellCasting () {
	let attribute = document.querySelector("#spellcasting-attribute").value;
	let baseVal = 0;
	if (attribute === "int") { baseVal =  Number(document.querySelector("#int").value); }
	else if (attribute === "cha") { baseVal =  Number(document.querySelector("#cha").value); }
	let training = Number(document.querySelector("#spellcasting-training").value);
	let mb = Number(document.querySelector("#spellcasting-mb").checked);
	let mastery = Number(document.querySelector("#mastery").value);
	let modifier = baseVal + training + (mb * mastery);
	document.querySelector("#spellcasting-modifier").innerHTML = `=&nbsp;${modifier}`;
	document.querySelector("#spellcasting-dc").innerHTML = `=&nbsp;${8 + modifier}`;
}

function setModifierVal (category, name, value) {
	let e = {};
	e.STR = Number(document.querySelector("#str").value);
	e.END = Number(document.querySelector("#end").value);
	e.AGI = Number(document.querySelector("#agi").value);
	e.WIT = Number(document.querySelector("#wit").value);
	e.INT = Number(document.querySelector("#int").value);
	e.CHA = Number(document.querySelector("#cha").value);
	e.training = Number(document.querySelector(`#${category}-${name}-training`).value);
	e.mb = Number(document.querySelector(`#${category}-${name}-mb`).checked);
	e.mastery = Number(document.querySelector("#mastery").value);
	document.querySelector(`#${category}-${name}-result`).innerHTML = `=&nbsp;${value(e)}`;
}