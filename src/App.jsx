import { Container, createTheme, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";


const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <body>
      <Container maxWidth="auto" >
        <Navbar />        
      </Container>
      
      </body>
    </ThemeProvider>
  );
}
