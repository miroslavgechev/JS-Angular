function ticket(arrayTickets, sortBy) {
    var Ticket = /** @class */ (function () {
        function Ticket(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
        return Ticket;
    }());
    ;
    var ticketArray = [];
    arrayTickets.forEach(function (element) {
        var _a = element.split('|'), destination = _a[0], price = _a[1], status = _a[2];
        var ticket = new Ticket(destination, Number(price), status);
        ticketArray.push(ticket);
    });
    ticketArray = ticketArray.sort(function (a, b) { return a[sortBy].localeCompare(b[sortBy]); });
    console.log(ticketArray);
}
console.log('Test 1:');
ticket([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'destination');
console.log('Test 2:');
ticket([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
], 'status');
