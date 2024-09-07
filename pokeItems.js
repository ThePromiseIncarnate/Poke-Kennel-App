console.log("Hello from poke-items.js!")

async function submitItem() {
    itemEntry.innerHTML = "";
    let itemText = ``;
    let itemValue = itemID.value;
    console.log(itemValue);
    let itemFetch 
    try {
        itemFetch = await fetch(`https://pokeapi.co/api/v2/item/${itemValue}/`);
        console.log(itemFetch);
    } catch (error) {
        alert("Error fetching data!");
        return
    }
    let itemData;
    if (itemFetch.ok === true) {
        itemData = await itemFetch.json();
    } else {
        alert(`Error: ${itemFetch.status}`)
        return
    }
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