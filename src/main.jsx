import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Layout/AppLayout.jsx";
import PortfolioLayout from "./Layout/PortfolioLayout.jsx";
import App from "./App.jsx";
import BuildPortfolio from "./Pages/BuildPortfolio.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Privacy from "./Pages/Privacy.jsx";
import Education from "./Pages/Education.jsx";
import Work from "./Pages/Work.jsx";
import Summary from "./Pages/Summary.jsx";
import Skills from "./Pages/Skills.jsx";
import Projects from "./Pages/Projects.jsx";
import Services from "./Pages/Services.jsx";
import PortfolioWebsite from "./Pages/PortfolioWebsite.jsx";
import PAboutus from "./Pages/Ppages/PAboutus.jsx";
// import Pcontact from "./Pages/Ppages/Pcontact.jsx";
// import Pportfolio from "./Pages/Ppages/Pportfolio.jsx";
import Presume from "./Pages/Ppages/Presume.jsx";
import Pservices from "./Pages/Ppages/Pservices.jsx";
import { Forms } from "./context/FormContext.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/privacypolicy",
        element: <Privacy />,
      },
      {
        path: "/buildportfolio",
        element: <BuildPortfolio />,
      },
      {
        path: "/buildportfolio/edu",
        element: <Education />,
      },
      {
        path: "/buildportfolio/edu/wordhistory",
        element: <Work />,
      },
      {
        path: "/buildportfolio/edu/wordhistory/summary",
        element: <Summary />,
      },
      {
        path: "/buildportfolio/edu/wordhistory/summary/skills",
        element: <Skills />,
      },
      {
        path: "/buildportfolio/edu/wordhistory/summary/skills/projects",
        element: <Projects />,
      },
      {
        path: "/buildportfolio/edu/wordhistory/summary/skills/projects/services",
        element: <Services />,
      },
    ]
  },
  {
    path: "/buildportfolio/edu/wordhistory/summary/skills/projects/services/portfoliowebsite",
    element: <PortfolioLayout />,
    children: [
        {
          path: "/buildportfolio/edu/wordhistory/summary/skills/projects/services/portfoliowebsite",
          element: <PortfolioWebsite />
        },
        {
          path: "pabout",
          element: <PAboutus />
        },
        {
          path: "resume",
          element: <Presume />
        },
        // {
        //   path: "portfolio",
        //   element: <Pportfolio />
        // },
        {
          path: "pservices",
          element: <Pservices />
        },
        // {
        //   path: "pcontact",
        //   element: <Pcontact />
        // },
      ]
  }
  
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <Forms>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
      </Forms>
  </StrictMode>
);
