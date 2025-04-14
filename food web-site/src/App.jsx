import Header from './Components/Header/Header.jsx';
import './App.css';
import Body_swiggy from "./Components/Body(Swiggy)/Body_swiggy.jsx";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import AboutPage from "./Components/Extra Pages/About.jsx";
import ErrorPage from "./Components/Extra Pages/ErrorPage.jsx";
import RestorentMenu from "./Components/Extra Pages/RestorentMenu.jsx";

function AppLayout() {
    return (
        <div className="app">
            <div className="header">
                <Header/>
            </div>
            <div className="body">
                <Outlet />
            </div>
        </div>
    );
}

// Create router with both paths
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path:"/",
                element: <Body_swiggy />
            },
            {
                path: "/about",
                element: <AboutPage />
            },
            {
                path:"/restorent/:resID",
                element: <RestorentMenu />
            }
        ],
        errorElement : <ErrorPage />
    },

]);

// Main App component
function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;