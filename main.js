let obj = [
    {
        name: "Ali",
        surname: "Aliyev",
        age: 10,
        driving: true
    }, {
        name: "Veli",
        surname: "Aliyev",
        age: 17,
        driving: false,
    }, {
        name: "Mehman",
        surname: "Aliyev",
        age: 25,
        driving: true,
    }, {
        name: "Nicat",
        surname: "Aliyev",
        age: 26,
        driving: false
    }, {
        name: "Ayxan",
        surname: "Aliyev",
        age: 15,
        driving: true
    }, {
        name: "Nihad",
        surname: "Aliyev",
        age: 19,
        driving: true
    }
]

// function startN() {
//     obj.forEach(person => {
//         if (person.name.startsWith("N")) {
//             console.log(person);
//         }
//     });
// }
// startN();




// function older20() {
//     obj.forEach(person => {
//         if (person.age > 20 && person.age < 26) {
//             console.log(person);
//         }
//     });
// }
// older20();


function lisence() {
    obj.forEach(person => {
        if (person.age % 2 === 0 && person.driving) {
            console.log(person);
        }
    });
}
lisence();