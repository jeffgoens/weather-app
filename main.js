let car = {
    model: 'Toyota',
    type: 'Camry',
    exteriorColor: 'silver',
    interiorColor: 'gray',
    engine: ['4cyl', 'V6', 'hybrid'],
}

car.engine.push('water')


console.log(car);
console.log(car.model);
console.log(car.engine);
console.log(car.engine[0]);


