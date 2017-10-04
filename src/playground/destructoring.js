//Object destructoring
// const person = {
// name: 'Elijah',
//   age: 21,
//   location: {
//     city: 'Las Vegas',
//     temp: 92
//   }
// };

//Picks of values from object
//The name value is set to a default if there isn't value passed in and is renamed to firstName
// const {
//   name: firstName = 'Anonymouse',
//   age
// } = person;
//
// console.log(`${firstName} is ${age}`);

//Picks of values from the location object inside the person object.
//The temp value is renamed to temperature.
// const {
//   city,
//   temp: temperature
// } = person.location
//
// if (city && temperature) {
//   console.log(`it's ${temperature} in ${city}`);
// }


//Challenge

// const book = {
//   title: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }
//
// const {
//   title,
//   author
// } = book;
//
// const {
//   name: publisherName = 'Self Published'
// } = book.publisher
//
// console.log(`${publisherName}`);



//
//Array destructoring
//

// const address = ['1299 S Juniper Street', 'Las vegas', 'Nevada', '89123']
//
// const [, city, state = 'Texas'] = address
//
// console.log(`You are in ${city} ${state}`);

// const item = ['Coffee (hot)', '$2.00', '$3.50', '$4.00']
//
// const [name, , medium, ] = item
//
// console.log(`A medium ${name} cost ${medium} `);
