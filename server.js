const express = require("express");
const app = express();
const faker = require('faker');
const port =8000;

class User {
    constructor(){
        this._id=faker.datatype.number();
        this.firstName=faker.name.findName();
        this.lastName=faker.name.lastName();
        this.phoneNumber=faker.phone.phoneNumber();
        this.email=faker.internet.email();
        this.password=faker.internet.password();
    }
}

class Company {
    constructor(){
        this._id=faker.datatype.number();
        this.name=faker.company.companyName();
        this.address={
            street : this.street=faker.address.streetName(),
            city : this.city=faker.address.cityName(),
            state : this.state=faker.address.state(),
            zipCode : this.zipCode=faker.address.zipCode(),
            country : this.country=faker.address.country()
        }
    }
}
app.get("/api/users/new", (req, res) => {
    let user= new User();
    console.log(user);
    res.json( user );
});
app.get("/api/company/new", (req, res) => {
    let company= new Company();
    console.log(company);
    res.json( company );
});
app.get("/api/user/company", (req, res) => {
    res.json({
        user : new User(),
        company : new Company()
    });
});
const server = app.listen(port, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);