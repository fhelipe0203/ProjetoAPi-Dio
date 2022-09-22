import express, {Request, Response, NextFunction}from "express";
import statusRoutes from "./routes/status.route";
import usersRoutes from "./routes/users.route";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(statusRoutes);
app.use(usersRoutes);




app.listen(3000,() =>{
    console.log("aplicação executando na porta 3000!")
});
