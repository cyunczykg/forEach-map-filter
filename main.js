const passengersWithoutTicketPrice = [
	{
		name: 'Jan',
		lastName: 'Kowalski',
		seat: '1A',
		passengerID: '1231qe93',
	},
	{
		name: 'Mateusz',
		lastName: 'Kowalski',
		seat: '1B',
		passengerID: '123wqe293',
	},
	{
		name: 'Katarzyna',
		lastName: 'Kowalski',
		seat: '1C',
		passengerID: '1231293',
	},
	{
		name: 'Katarzyna',
		lastName: 'Kowal',
		seat: '1D',
		passengerID: '1231293',
	},
	{
		name: 'Anna',
		lastName: 'Popławska',
		seat: '1F',
		passengerID: '1231293',
	},
];

const ticketPrices = [
	{ticketPrice: '100'},
	{ticketPrice: '200'},
	{ticketPrice: '150'},
	{ticketPrice: '100'},
	{ticketPrice: '400'},
];

const passengers = passengersWithoutTicketPrice.map((passenger, index) => 
   ({...passenger, ...ticketPrices[index]})
);

console.log(passengers);

const logPersonSeat = (person, index, arr) => {
	console.log(
		`${index + 1} z ${arr.length}: ${person.name} ${
			person.lastName
		}, miejsce: ${person.seat}, bilet za ${person.ticketPrice}zł`
	);
};

const logPersonSeatPriceInEuro = (person, index, arr) => {
	console.log(
		`${index + 1} z ${arr.length}: ${person.name} ${
			person.lastName
		}, miejsce: ${person.seat}, bilet za ${person.ticketPriceInEuro}euro`
	);
};


//pętla for
// for (let i = 0; i < passengers.length; i++) {
// 	const person = passengers[i];
// 	logPersonSeat(person, i, passengers);
// }

//.forEach z ciałem funkcji
// passengers.forEach((passenger, index, arr) => {
// 	logPersonSeat(passenger, index, arr);
// });

//.forEach z wywołaniem definicji funkcji bez argumentów
passengers.forEach(logPersonSeat);

// const windowSeaters = [];

// for (let i = 0; i < passengers.length; i++) {
// 	const person = passengers[i];
// 	if (
// 		person.seat.charAt(person.seat.length - 1) === 'A' ||
// 		person.seat.charAt(person.seat.length - 1) === 'F'
// 	) {
// 		console.log(
// 			`${person.name} ${person.lastName} zajmuje miejsce przy oknie o nr ${person.seat}`
// 		);
// 		windowSeaters.push(person);
// 	}
// }

// console.log(windowSeaters);

const filteredWindowSeaters = passengers.filter((passenger) => passenger.seat.charAt(passenger.seat.length - 1) === 'A' ||
passenger.seat.charAt(passenger.seat.length - 1) === 'F');

// console.log(filteredWindowSeaters);

console.log(`Pasażerowie siedzący przy oknie:`);
// filteredWindowSeaters.forEach(logPersonSeat);

passengers.filter((passenger) => passenger.seat.charAt(passenger.seat.length - 1) === 'A' ||
passenger.seat.charAt(passenger.seat.length - 1) === 'F').forEach(logPersonSeat);

console.log(`Pasażerowie z najtańszymi biletami:`);

passengers.filter ((passenger) => (passenger.ticketPrice <= 100)).forEach(logPersonSeat);

console.log(`co stanowi w Euro:`);
const kursEuro = parseFloat(4.56);
passengers.filter ((passenger) => (passenger.ticketPrice <= 100)).map((passenger) => ({...passenger,ticketPriceInEuro: (passenger.ticketPrice/kursEuro).toFixed(2)})).forEach(logPersonSeatPriceInEuro);


