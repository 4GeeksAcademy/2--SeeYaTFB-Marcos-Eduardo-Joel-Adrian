import Homepage from "../pages/Homepage";
import { PaginaVuelos } from "../pages/PaginaVuelos";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { PaginaHoteles } from "../pages/PaginaHoteles";


const routerConfig = [
  {
    path: "/",
    element: <Homepage />,
  },{
    path: "/vuelos",
    element: <PaginaVuelos />,
  },{
    path: "/hoteles",
    element: <PaginaHoteles />,
  },{
    path: "/login",
    element: <Login />,
  },{
    path: "/register",
    element: <Register />,
  },
];

export default routerConfig;
