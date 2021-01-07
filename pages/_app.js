/* We create "_app.js" to override the default `App` component provided by Next. Here, we can add any sort of components that will 
   get passed to a multiple component tree. For example, this is the best place to add Themes, GlobalStyles, Auths etc. 
*/

import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Global, css } from "@emotion/core";
import theme from "styles/theme";
import NavBar from "components/NavBar";

const GlobalStyle = ({ children }) => {
  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          :root {
            background: #0e141b;
            //background: rgb(32,32,32);
            //background: linear-gradient(90deg, rgba(32,32,32,1) 0%, rgba(26,26,26,1) 33%, rgba(19,19,19,1) 66%);
            *::selection {
              color: #0099ff;
            }
          }
          html {
            scroll-behavior: smooth;
          }
        `}
      />
      <NavBar />
    </>
  );
};

/* Here, our App component receives two props: Component and pageProps. 
   - The Component prop is the active page, so whenever we navigate between routes, Component will change to the new page. Therefore, 
     any props we send to Component will be received by the page.

   - pageProps is something that 
*/
const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
