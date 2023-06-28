function ticket(arrayTickets: string[], sortBy: string): void {

    class Ticket {
        public destination: string;
        public price: number;
        public status: string;

        constructor(destination: string, price: number, status: string) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    };

    let ticketArray: Ticket[] = [];

    arrayTickets.forEach(
        (element) => {
            let [destination, price, status] = element.split('|');
            let ticket = new Ticket(destination, Number(price), status);
            ticketArray.push(ticket);
        }
    )

    ticketArray = ticketArray.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

    console.log(ticketArray);
}

console.log('Test 1:');
ticket([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
],
    'destination');

console.log('Test 2:');

ticket([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
],
    'status')