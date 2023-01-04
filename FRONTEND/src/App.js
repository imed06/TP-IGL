import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Authentification from './Pages/Authentification';
import DetailsAnnonce from './Pages/DetailsAnnonce';
import Home from './Pages/Home';
import RemplirInfoUser from './Pages/RemplirInfoUser';
import SuperTokens, { SuperTokensWrapper, getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react";
import ThirdParty, { Github, Google, Facebook, Apple } from "supertokens-auth-react/recipe/thirdparty";
import Session from "supertokens-auth-react/recipe/session";
import * as reactRouterDom from "react-router-dom";

SuperTokens.init({
  appInfo: {
    appName: "tpigl",
    apiDomain: "http://localhost:5000",
    websiteDomain: "http://localhost:3000",
    apiBasePath: "/auth",
    websiteBasePath: "/auth"
  },
  recipeList: [
    ThirdParty.init({
      signInAndUpFeature: {
        providers: [
          Google.init(),
        ]
      }
    }),
    Session.init()
  ]
});


function App() {
  return (
    <SuperTokensWrapper>
      <BrowserRouter>
        <Routes>
          {/*This renders the login UI on the /auth route*/}
          {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
          {/*Your app routes*/}
          <Route path='/InfoUser' element={<RemplirInfoUser />}></Route>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/Details' element={<DetailsAnnonce />}></Route>
        </Routes>
      </BrowserRouter>
    </SuperTokensWrapper>
  );
}
export default App;
