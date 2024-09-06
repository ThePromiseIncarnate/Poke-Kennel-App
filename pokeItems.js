console.log("Hello from poke-items.js!")
let itemText = ``;

async function submitItem() {
    let itemValue = itemID.value;
    console.log(itemValue);
    let itemFetch = await fetch(`https://pokeapi.co/api/v2/item/${itemValue}/`);
    console.log(itemFetch);
    let itemData = await itemFetch.json();
    let itemNames = itemData.names;

    let itemArray = itemData.name;
    itemEntry.textContent = itemArray;

    for (let i = 0; i < itemNames.length; i++) {
        let itemList = itemNames[i];
        itemText += `<li>${itemList.name}</li> \n`;
    }
    console.log(itemText);
    itemEntry.innerHTML = itemText;
}

itemButton.addEventListener("click", submitItem);