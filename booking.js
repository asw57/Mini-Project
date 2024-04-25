document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let vehicle = document.getElementById('vehicle').value;
    let date = document.getElementById('date').value;
    console.log('Name: ' + name + ', Email: ' + email + ', Phone: ' + phone + ', Vehicle Number: ' + vehicle + ', Date: ' + date);
    
});