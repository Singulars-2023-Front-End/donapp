import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home from "./views/home";
import { Newsletter } from "./views/newsletter";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { NewDonation } from "./views/newdonation";
import DetailView from "./views/detailView";
import { SignUp } from "./views/signUp";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = import.meta.env.BASENAME || "";

  return (
    <div className="flow h-screen grid">
      <BrowserRouter>
        <ScrollToTop>
          <Navbar />

          <Routes>
           <Route path="/signUp" element={<SignUp/>}/>
            <Route path="/" element={<Home />} />
            <Route path="/newdonation" element={<NewDonation />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/product/:id" element={<DetailView />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
