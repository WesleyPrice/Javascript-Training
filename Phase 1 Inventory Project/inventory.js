// starter data to populate the inventory with some initial items.
let inventory = [
    {
        id: 1001,
        name: "HP ProLiant DL380",
        category: "server",
        location: "Server Room A",
        status: "active",        // active, spare, decommissioned, repair
        assignedTo: "Production",
        purchaseDate: "2022-03-15",
        notes: "Primary Oracle database server"
    },
    {
        id: 1002,
        name: "Dell PowerEdge R740",
        category: "server",
        location: "Server Room A",
        status: "spare",        // active, spare, decommissioned, repair
        assignedTo: "backup",
        purchaseDate: "2019-02-12",
        notes: "Backup oracle database server"
    },
    {
        id: 1003,
        name: "Sharp MX-3070",
        category: "printer",
        location: "IT Office",
        status: "active",        // active, spare, decommissioned, repair
        assignedTo: "Production",
        purchaseDate: "2021-02-01",
        notes: "Printer for IT department"
    },
    {
        id: 1004,
        name: "Synology RS2423RP+ ",
        category: "server",
        location: "Server Room A",
        status: "active",        // active, spare, decommissioned, repair
        assignedTo: "Production",
        purchaseDate: "2026-01-28",
        notes: "Network attached storage server for archival data"
    }
]

// function to add equipment to the inventory
function addEquipment(equipmentObject) {
    //validate equipment object to make sure it includes certain fields
    if (!equipmentObject.name || !equipmentObject.location || !equipmentObject.status || !equipmentObject.assignedTo) {
        return(
            console.log("Missing arguments")
        );
    }
    // generate a new unique ID for the equipment and assign it to the new equipment
    let maxId = Math.max(...inventory.map(obj => obj.id));
    let newId = maxId + 1;
    equipmentObject.id = newId;
    //add the equipment to the inventory
    inventory.push(equipmentObject);
    return(console.log(inventory));
}

// check the input of 

// function to remove equipment by ID
function removeById(id) {
    // validate the data type of the id
    if (typeof(id) !== "number") {
        return (
            console.log("This function only accepts numbers.")
        );
    }
    
    // make sure the id exists in the array
    const inventoryIds = inventory.map(obj => obj.id);
    if (!inventoryIds.includes(id)){
        return (
            console.log("ID not found")
        );
    }
    
    // remove the item from inventory
    let newInventory = inventory.filter(obj => obj.id !== id);
    inventory = newInventory;
    return (
        console.log(inventory)
    );
}

function searchReturn(filteredInventory) {
    if (filteredInventory.length > 0) {
        return (
            console.log(filteredInventory)
        );
    }
    else {
        return(console.log("No items in inventory that match this id."));
    }
}

// find an inventory item by id
function findById(id) {
    if (typeof(id) !== "number") {
        return (
            console.log("This function only accepts numbers.")
        );
    }
    
    // return only the objects in the array that match the filter and return an error message if none match
    let filteredInventory = inventory.filter(obj => obj.id === id);
    return(searchReturn(filteredInventory));
}

// function to find an inventory item by category
function findByCategory(category) {
    if (typeof(category) !== "string") {
        return (
            console.log("This function only accepts strings")
        );
    }

    // return only the objects in the array that match the filter and return an error message if none match
    let filteredInventory = inventory.filter(obj => obj.category === category);
    return(searchReturn(filteredInventory));
}

// function to find an inventory item by status
function findByStatus(status) {
    if (typeof(status) !== "string") {
        return (
            console.log("This function only accepts strings")
        );
    }
    
    // return only the objects in the array that match the filter and return an error message if none match
    let filteredInventory = inventory.filter(obj => obj.status === status);
    return(searchReturn(filteredInventory));
}

//
function findByName(name) {
    if (typeof(name) !== "string") {
        return (
            console.log("This function only accepts strings")
        );
    }
    
    // return only the objects in the array that match the filter
    let filteredInventory = inventory.filter(obj => obj.name.includes(name));
    return(searchReturn(filteredInventory));
}

function updateEquipment(id, obj) {
    // validate the id is the correct data type
    if (typeof(id) !== "number") {
        return (
            console.log("The id must be a number.")
        );
    }

    // validate the obj is the correct data type
    if (typeof(obj) !== "object" && obj !== null) {
        return (
            console.log("The properties must be an object.")
        );
    }

    // find the index of the object requesting the update and then update the item in inventory
    let index = inventory.findIndex(obj => obj.id === id);
    if (index !== -1) {
        let updatedInventory = {...inventory[index], ...obj}
        inventory[index] = updatedInventory;
        return(console.log(inventory))
    }
    else {
        console.log("An object with that id does not exist.")
    }
}

function listAllInventory() {
    return console.log(inventory);
}

function countByCategory() {
    let countsArray = inventory.reduce((counts, obj) => {
        counts[obj.category] = (counts[obj.category] || 0) + 1;
        return counts;
    }, {});

    return console.log(countsArray);
}

function countByStatus() {
    let countsArray = inventory.reduce((counts, obj) => {
        counts[obj.status] = (counts[obj.status] || 0) + 1;
        return counts;
    }, {});

    return console.log(countsArray);
}

// new item to add to the inventory and the function call to add it
const newItem = {
    name: "HPE Alletra 5030",
    category: "SAN",
    location: "Server Room B",
    status: "active",
    assignedTo: "Production",
    notes: "Storage server for virtualization"
}

addEquipment(newItem);
removeById(1005);
findById(1004);
findByCategory("server");
findByStatus("spare");
findByName("Synology")
updateEquipment(1004, {name: "synology"});
listAllInventory();
countByCategory();
countByStatus();