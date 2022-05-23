import sql from "mssql"
import { sqlConfig } from "../database/sqlConfig.js"

export const selectPizzas = async() => {
    try {
        const pool = await sql.connect(sqlConfig)
        const result = await pool.request()
                                    .query("SELECT * FROM Pizzas")                             
        return result
    } catch (error) {
        console.log(error)
    }

}

export const selectPizzaById = async(Id) => {
    try {
        const pool = await sql.connect(sqlConfig)
        const result = await pool.request()
                                    .input("Id", sql.Int, Id ?? 1)
                                    .query("SELECT * FROM Pizzas WHERE Id = @Id")
        return result
    } catch (error) {
        console.log(error)
    }
    
}

export const updatePizza = async(pizza, Id) => {
    try {
        const pool = await sql.connect(sqlConfig)
        const result = await pool.request()
                                    .input("Id", sql.Int, Id ?? 1)
                                    .input("Nombre", sql.VarChar, pizza?.nombre ?? '')
                                    .input("LibreGluten", sql.Bit, pizza?.libreGluten ?? false)
                                    .input("Importe", sql.Float, pizza?.importe ?? 200)
                                    .input("Descripcion", sql.VarChar, pizza?.descripcion ?? '')
                                    .query("UPDATE Pizzas SET Nombre=@Nombre, LibreGluten=@LibreGluten, Importe=@Importe, Descripcion=@Descripcion WHERE Id=@Id")
        return result
    } catch (error) {
        console.log(error)
    }
                            
}

export const createPizza = async(pizza) => {

    try {
        const pool = await sql.connect(sqlConfig)
        const result = await pool.request()
                                    .input("Nombre", sql.VarChar, pizza?.nombre ?? '')
                                    .input("LibreGluten", sql.Bit, pizza?.libreGluten ?? false)
                                    .input("Importe", sql.Float, pizza?.importe ?? 200)
                                    .input("Descripcion", sql.VarChar, pizza?.descripcion ?? '')
                                    .query("INSERT INTO Pizzas (Nombre, LibreGluten, Importe, Descripcion) Values(@Nombre, @LibreGluten, @Importe, @Descripcion)")
        return result
    } catch (error) {
        console.log(error)
    }
                            
}

export const deleteById = async(Id) => {
    try {
        const pool = await sql.connect(sqlConfig)
        const result = await pool.request()
                                    .input("Id", sql.Int, Id ?? 1)
                                    .query("DELETE FROM Pizzas WHERE Id = @Id")
        return result
    } catch (error) {
        console.log(error)
    }
}