interface vehicle{
    make:string
    model:string
    year:number
}
interface Electricvehicle extends vehicle{
    battery :number
}

const newElectricVehicle :Electricvehicle={
    make:"Tesla",
    model:"S",
    year:2024,
    battery:100

}
console.log(newElectricVehicle);