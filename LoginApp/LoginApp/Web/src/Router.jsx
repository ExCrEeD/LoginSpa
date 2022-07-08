
import {
  BrowserRouter,
  Switch,
  Route,
 
} from "react-router-dom";
import App from "./App";
import PaginaNoEncontrada from "./Paginas/PaginaNoEncontrada";
import {msalInstance } from './InstanciaMSAL'

export default function CustomLinkExample() {
  return (
    <BrowserRouter >
      <Switch>
        <Route exact path="/" >
          <App instance={msalInstance} />
        </Route>
        <Route path="/PaginaNoEncontrada" >   
          <PaginaNoEncontrada>PaginaNoEncontrada</PaginaNoEncontrada>      
        </Route>              
        <Route path="*" component={PaginaNoEncontrada}/>              
      </Switch>
    </BrowserRouter>
  );
}