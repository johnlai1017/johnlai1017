document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://script.google.com/macros/s/AKfycbyEclxQnA5J-c117TBRXUkF0V5Nnvw1n7MF_6NRQrhd0-tpF9xhcuiaa3UOpkF0qUqp7g/exec';

    // Handle form submission
    document.getElementById('order-form').addEventListener('submit', (e) => {
        e.preventDefault();

        const order = {
            "Order ID": new Date().getTime(),
            "Customer Name": document.getElementById('customer-name').value,
            "Menu Item": document.getElementById('menu-item').value,
            "Quantity": document.getElementById('quantity').value,
            "Drink": document.getElementById('drink').value,
            "Status": "Pending"
        };

        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(response => response.text())
        .then(data => {
            alert('Order placed successfully!');
            document.getElementById('order-form').reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to place order.');
        });
    });
});
