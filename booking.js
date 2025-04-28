// Sample train data (in a real app, this would come from an API)
const trains = [
    {
        id: 1,
        name: "Express 101",
        from: "Karachi",
        to: "Lahore",
        departure: "08:00",
        arrival: "20:00",
        date: "2023-12-15",
        seats: 120,
        price: 2500,
        class: "Economy"
    },
    {
        id: 2,
        name: "Business 202",
        from: "Karachi",
        to: "Lahore",
        departure: "12:00",
        arrival: "23:30",
        date: "2023-12-15",
        seats: 50,
        price: 4500,
        class: "Business"
    }
];

document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;
    
    searchTrains(from, to, date);
});

function searchTrains(from, to, date) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
    
    // Filter trains based on search criteria
    const filteredTrains = trains.filter(train => 
        train.from.toLowerCase().includes(from.toLowerCase()) &&
        train.to.toLowerCase().includes(to.toLowerCase()) &&
        train.date === date
    );
    
    if (filteredTrains.length === 0) {
        resultsContainer.innerHTML = '<p class="no-results">No trains found matching your criteria.</p>';
        return;
    }
    
    filteredTrains.forEach(train => {
        const trainCard = document.createElement('div');
        trainCard.className = 'train-card';
        trainCard.innerHTML = `
            <div class="train-info">
                <h3>${train.name}</h3>
                <p>${train.from} to ${train.to}</p>
                <p class="time">${train.departure} - ${train.arrival}</p>
                <p>Class: ${train.class} | Seats: ${train.seats}</p>
            </div>
            <div class="train-actions">
                <div class="train-price">Rs. ${train.price}</div>
                <a href="booking.html?trainId=${train.id}" class="btn btn-book">Book Now</a>
            </div>
        `;
        resultsContainer.appendChild(trainCard);
    });
}