// Define product variables using var, let, and const
const productName = "Smartphone";
let productModel = "S21";
var productCost = 799.99;

// Create an array to hold the inventory of store items
let inventory = [];

// Create product objects
let product1 = {
    name: "Smartphone",
    model: "S21",
    cost: 799.99,
    quantity: 10
};

let product2 = {
    name: "Laptop",
    model: "XPS 15",
    cost: 1499.99,
    quantity: 5
};

let product3 = {
    name: "Tablet",
    model: "iPad Air",
    cost: 599.99,
    quantity: 8
};

// Add the product objects to the inventory array
inventory.push(product1, product2, product3);

// Function to display the inventory data in the HTML table
function displayInventory() {
    let productList = document.getElementById('product-list');
    productList.innerHTML = '';

    inventory.forEach(product => {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.model}</td>
            <td>$${product.cost.toFixed(2)}</td>
            <td>${product.quantity}</td>
        `;
        productList.appendChild(row);
    });
}

// Initial display of inventory
displayInventory();

// Event listener for form submission to add a new product
let addProductForm = document.getElementById('add-product-form');
addProductForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    let name = document.getElementById('name').value;
    let model = document.getElementById('model').value;
    let cost = parseFloat(document.getElementById('cost').value);
    let quantity = parseInt(document.getElementById('quantity').value);

    // Create new product object
    let newProduct = {
        name: name,
        model: model,
        cost: cost,
        quantity: quantity
    };

    // Add the new product to the inventory array
    inventory.push(newProduct);

    // Clear the form
    addProductForm.reset();

    // Update the displayed inventory
    displayInventory();
});

