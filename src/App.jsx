import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./MainLayout";
import Home from "./components/Home";
import Products from "./components/Products";
import News from "./components/News";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
function App() {
 
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />
        }, {
          path: 'products/',
          element: <Products />
        }, {
          path: 'news/',
          element: <News />
        }, {
          path: 'services/',
          element: <Services />
        }, {
          path: 'about',
          element: <About />
        }, {
          path: 'contact/',
          element: <Contact />
        }
      ]
    }
  ])
  return <RouterProvider router={routes} />
}

export default App;
