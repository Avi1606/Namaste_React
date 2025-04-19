import Header from './Components/Header/Header.jsx';
import './App.css';
import Body_swiggy from "./Components/Body(Swiggy)/Body_swiggy.jsx";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
// import AboutPage from "";
import ErrorPage from "./Components/Extra Pages/ErrorPage.jsx";
import RestorentMenu from "./Components/Extra Pages/RestorentMenu.jsx";
import {lazy, Suspense} from "react";
import UserContext from "./Components/userContext.jsx";


const About = lazy(() => import("./Components/Extra Pages/About.jsx"))

function AppLayout() {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
            <div>
                <Header/>
            </div>
            <div className="flex-grow">
                <Outlet/>
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
                element: <Suspense fallback={<h2>Loading....</h2>}><About /></Suspense>
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