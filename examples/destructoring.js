// object = {key : value}

const person = {
    name: "phong",
    age: 30,
    city: "thanh hoa",
    address: {
        street: "50 main st",
        number: 10,
    },
};

// const myAge = person.age;
// const myName = person.name;
// const myCity = person.city;
// const myAddress = person.address;

// console.log(myAge, myName, myCity, myAddress);
// destructoring;
const {
    name: myName,
    age,
    city,
    address: { number },
} = person;
//console.log(address);

function showInfo({ name, age, city, address: { number } }) {
    console.log(name, age, city, number);
}
showInfo(person);

function useState(intialState) {
    let sate = intialState;
    function getState() {
        return StaticRange;
    }
    function setState(newState) {
        return (state = newState);
    }
    return [getState, setState];
}
const [count, setCout] = useState(10);
console.log("cout cũ", count());
setCout(30);
console.log("cout mới", count());