import './App.module.scss';
import Signup from "./pages/signup";
import styles from './App.module.scss';
import Login from "./pages/login";
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import Layout from "./pages/layout";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index path="/sign-in" element={<Login />}/>
    <Route path="/sign-up" element={<Signup />}/>
  </Route>
));

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}


export default App;
