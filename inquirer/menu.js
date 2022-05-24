import inquirer from "inquirer"
import Pizza from "../models/Pizza.js"

export const menu = async() => {
    const options = [{
        type: 'list',
        name: 'selectFunction',
        message: 'Seleccione la operacion',
        choices: [
            {
                value: 'select',
                name: 'Seleccionar pizzas'
            },
            {
                value: 'selectById',
                name: 'Seleccionar pizza por Id'
            },
            {
                value: 'create',
                name: 'Crear una nueva pizza'
            },
            {
                value: 'update',
                name: 'Actualizar pizza por id'
            },
            {
                value: 'delete',
                name: 'Borrar pizza por id'
            },
            {
                value: 'exit',
                name: 'Salir'
            }


        ]
    }]

    const {selectFunction} = await inquirer.prompt(options)
    return selectFunction


}

export const reqId = async() => {
    const idOptions = [{
        type: 'number',
        name: 'id',
        message: 'Introduzca un Id'
    }]

    const {id} = await inquirer.prompt(idOptions)
    return id
}

export const reqPizza = async() => {
    console.log("======================")
    console.log("Rellene el formulario")
    console.log("======================")


    const nameOptions = [{
        type: 'input',
        name: 'nombre',
        message: 'Introduzca un nombre'
    }]

    
    const libreGlutenOptions = [{
        type: 'list',
        name: 'libreGluten',
        message: 'Es libre de gluten?',
        choices: [
            {
                value: true,
                name: 'Si'
            },
            {
                value: false,
                name: 'No'
            }
            
        ]
    }]
    
    
    const importeOptions = [{
        type: 'number',
        name: 'importe',
        message: 'Introduzca un importe'
    }]
    
    
    const descripcionOptions = [{
        type: 'input',
        name: 'descripcion',
        message: 'Introduzca una descripcion'
    }]
    
    const {nombre} = await inquirer.prompt(nameOptions)
    const {libreGluten} = await inquirer.prompt(libreGlutenOptions)
    const {importe} = await inquirer.prompt(importeOptions)
    const {descripcion} = await inquirer.prompt(descripcionOptions)

    const pizza = new Pizza(nombre, libreGluten, importe, descripcion)

    return pizza
}