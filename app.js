import { menu, reqId, reqPizza } from "./inquirer/menu.js";
import { createPizza, deleteById, selectPizzaById, selectPizzas, updatePizza } from "./services/pizzas-services.js"



const main = async() => {
    // const {recordset} = await selectPizzas()

    const operation = await menu()

    switch (operation) {
        case 'select':
            const selectAll = await selectPizzas()
            console.log(selectAll.recordset)
            
            break;
        case 'selectById':
            const selId = await reqId()
            const selecetById = await selectPizzaById(selId)
            console.log(selecetById.recordset)
            
            break;
        case 'create':
            
            const pizzaToCreate = await reqPizza()
            const crePizza = await createPizza(pizzaToCreate)
            console.log(crePizza)


            break;
        case 'update':
            const pizzaToUpdate = await reqPizza()
            const updateId = await reqId()

            const updPizza = await updatePizza(pizzaToUpdate, updateId)
            console.log(updPizza)

            break;
        case 'delete':
                const deleteId = await reqId()
                const delId = await deleteById(deleteId)
                console.log(delId)

            break;
        
        default:
            console.log("Algo salio mal creo")
            break;
    }

}

main()