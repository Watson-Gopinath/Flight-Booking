
 //Flight adding function
document.getElementById('add-flight-btn').addEventListener(('click'), (e) => {
    e.preventDefault();
    const flightnumber = document.getElementById('f-num').value;
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    addflight(flightnumber, from, to, date, time);
    alert('Flight added successfully!');
});
let flights = [];
function addflight(flightnumber, from, to, date, time) {
    flights.push({
        flightnumber,
        from,
        to,
        date,
        time
    });
}

//Flight bookng function
document.getElementById('book-ticket-btn').addEventListener(('click'), (e) => {
    e.preventDefault();
    const flightnumber = document.getElementById('flightnum').value;
    const pessengername = document.getElementById('passenger').value;
    bookingticket(flightnumber, pessengername);
});
let bookings = [];
function bookingticket(flightnumber, pessengername) {
    const flight = flights.find(flights => flights.flightnumber === flightnumber);
    if (flight) {
        const bookingid = Math.floor(Math.random() * 1000000);
        bookings.push({
            bookingid,
            flightnumber,
            pessengername
        });
        alert(`Ticket booked successfully! Your booking ID is ${bookingid}.`);
    } else {
        alert('Flight not found!');
    }
};
//Flight cancel function
document.getElementById('cancell-booking-btm').addEventListener(('click'), (e) => {
    e.preventDefault();
    const bookingid = document.getElementById('booking-id').value;
    cancelbooking(bookingid);
})
function cancelbooking(bookingid) {
    const bookingindex = bookings.findIndex(bookings => bookings.bookingid === parseInt(bookingid));
    if (bookingindex !== -1) {
        bookings.splice(bookingindex, 1);
        alert('Booking cancelled successfully!');
    } else {
        alert('Booking not found!');
    }
};
//View booking function
document.getElementById('view').addEventListener(('click'), (e) => {
    e.preventDefault();
    viewbookings();
});

function viewbookings() {
    const bookinglist = document.getElementById('view-booking-list');
    bookinglist.innerHTML = "";
    bookings.forEach(bookings => {
        const flight = flights.find(flights => flights.flightnumber === bookings.flightnumber);
        const bookinghtml = `
        <div class="booking">
            <p>Booking ID: ${bookings.bookingid}</p>
            <p>Flight Number: ${bookings.flightnumber} </p>
            <p>Passenger Name: ${bookings.pessengername} </p>
            <p>From: ${flight.from} </p>
            <p>To: ${flight.to} </p>
            <p>Date: ${flight.date} </p>
            <p>Time: ${flight.time} </p>
            </div>
            `;
        bookinglist.insertAdjacentHTML("beforeend", bookinghtml);
    });
}