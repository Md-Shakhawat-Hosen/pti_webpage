import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "./Root/MainLayout";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            
        ]
        
    }
])

export default router;