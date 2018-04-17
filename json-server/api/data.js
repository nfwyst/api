let faker = require('faker');


let generateCustomers = () => {
  let customers = [];

  for (let i = 0; i < 50;  i++) {
    let firstName = faker.name.firstName();
    let lastName = faker.name.firstName();
    let phoneNumber = faker.phone.phoneNumberFormat();


    customers.push({
      "id": i,
      "first_name": firstName,
      "last_name": lastName,
      "hone": phoneNumber
    });
  }

  return { customers };
}

let generateComments = () => {
  let comments = [];

  for (let i = 0; i < 50; i++) {
    let comment = faker.random.words();

    comments.push({
      id: i,
      comment,
      customerId: i
    });
  }

  return { comments };
}

let api = () => {
  return {
    ...generateCustomers(),
    ...generateComments()
  };
}

module.exports =  api;
