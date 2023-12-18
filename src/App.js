import './App.module.scss';
import Signup2 from "./pages/signup2";
import Login2 from "./pages/login2";
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import Layout from "./pages/layout";
import styles from './App.module.scss';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route index path="/sign-in" element={<Login2 />}/>
    <Route path="/sign-up" element={<Signup2 />}/>
  </Route>
));

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}


export default App;


