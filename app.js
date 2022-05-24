import { menu, reqId, reqPizza } from "./inquirer/menu.js";
import { createPizza, deleteById, selectPizzaById, selectPizzas, updatePizza } from "./services/pizzas-services.js"



const main = async() => {

    let operation = await menu()

    while (operation !== 'exit') {
        
        switch (operation) {
            case 'select':
                const selectAll = await selectPizzas()
                console.log(selectAll.recordset)
                
                break;
            case 'selectById':
                const selId = await reqId()
                const selecetById = await selectPizzaById(selId)
                console.log(selecetById.recordset[0])
                
                break;
            case 'create':
                
                const pizzaToCreate = await reqPizza()
                await createPizza(pizzaToCreate)
                console.log(`Pizza ${pizzaToCreate.nombre} creada exitosamente!`)
    
                break;
            case 'update':
                const pizzaToUpdate = await reqPizza()
                const updateId = await reqId()
                await updatePizza(pizzaToUpdate, updateId)
                console.log("Pizza actualizada")
    
                break;
            case 'delete':
                    const deleteId = await reqId()
                    await deleteById(deleteId)
                    console.log(`Pizza ${deleteId} eliminada`)
    
                break;
            case 'exit':
                console.log("Proceso terminado exitosamente");
                break;
            default:
                console.log("Algo salio mal creo")
                break;
        }
        operation = await menu()
    }


}

main()