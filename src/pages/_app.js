import React from "react";
import { Global, css } from '@emotion/react';
import { Helmet } from "react-helmet";
// Components
import Navbar from "./../components/Navbar";
import IndexPage from "./index";
import AboutPage from "./about";
import FaqPage from "./faq";
import ContactPage from "./contact";
import PricingPage from "./pricing";
import DashboardPage from "./dashboard";
import AuthPage from "./auth";
import SettingsPage from "./settings";
import LegalPage from "./legal";
import { Switch, Route, Router } from "./../util/router";
import PurchasePage from "./purchase";
import FirebaseActionPage from "./firebase-action";
import NotFoundPage from "./404";
import Footer from "./../components/Footer";
import "./../util/analytics";
import { AuthProvider } from "./../util/auth";
import { ThemeProvider } from "./../util/theme";
import { QueryClientProvider } from "./../util/db";

function App(props) {
  return (
    <>
    <Helmet>
			{/* Favicons
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
			<link rel="manifest" href="/site.webmanifest" />
			<meta name="msapplication-TileColor" content="#2d89ef" />
			<meta name="theme-color" content="#ffffff" />
			<meta name="lang" content="en" />
			{/* facebook/Twiiter og site */}
			{/* <meta name="twitter:card" content="summary" />
			<meta name="twitter:site" content="chat" />
			<meta id="twitter-image" name="twitter:image" content="/favicon-32x32.png" />
			<meta property="og:url" content="" />
			<meta property="og:type" content="product" />
			<meta property="og:site_name" content=""/>
			<meta id="og-image" property="og:image" content="/favicon-32x32.png"/> */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
			<link
				rel="stylesheet"
				href="https://use.fontawesome.com/releases/v5.13.0/css/all.css"
				integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V"
				crossorigin="anonymous"
			/>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css" />
    </Helmet>
    <Global
			styles={css`
				html,
				body {
					padding: 0;
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
						Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
						sans-serif;
					overflow: auto;
				}
				* {
					box-sizing: border-box;
				}
			`}
		/>
    <QueryClientProvider>
      <ThemeProvider>
        <AuthProvider>
          <Router>
            <>
              <Navbar
                color="default"
                logo="https://uploads.divjoy.com/logo.svg"
                logoInverted="https://uploads.divjoy.com/logo-white.svg"
              />

              <Switch>
                <Route exact path="/" component={IndexPage} />

                <Route exact path="/about" component={AboutPage} />

                <Route exact path="/faq" component={FaqPage} />

                <Route exact path="/contact" component={ContactPage} />

                <Route exact path="/pricing" component={PricingPage} />

                <Route exact path="/dashboard" component={DashboardPage} />

                <Route exact path="/auth/:type" component={AuthPage} />

                <Route
                  exact
                  path="/settings/:section"
                  component={SettingsPage}
                />

                <Route exact path="/legal/:section" component={LegalPage} />

                <Route exact path="/purchase/:plan" component={PurchasePage} />

                <Route
                  exact
                  path="/firebase-action"
                  component={FirebaseActionPage}
                />

                <Route component={NotFoundPage} />
              </Switch>

              <Footer
                bgColor="default"
                size="medium"
                bgImage=""
                bgImageOpacity={1}
                description="A short description of what you do here"
                copyright={`© ${new Date().getFullYear()} Company`}
                logo="https://uploads.divjoy.com/logo.svg"
                logoInverted="https://uploads.divjoy.com/logo-white.svg"
                sticky={true}
              />
            </>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
    </>
  );
}

export default App;
