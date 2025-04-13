import Header from './Components/Header/Header.jsx';
import './App.css';
import Body_swiggy from "./Components/Body(Swiggy)/Body_swiggy.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./Components/About.jsx";

function AppLayout() {
    return (
        <div className="app">
            <div className="header">
                <Header/>
            </div>
            <div className="body">
                <Body_swiggy/>
            </div>
        </div>
    )
}

// Create router with both paths
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />
    },
    {
        path: "/about",
        element: <AboutPage />
    }
]);

// Main App component
function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;