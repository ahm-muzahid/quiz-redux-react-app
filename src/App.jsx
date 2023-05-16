import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Settings from './components/pages/Settings'
import Questions from './components/pages/Questions'
import FinalScreen from './components/pages/FinalScreen'
import { Box, Container, Typography } from "@mui/material";
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Settings></Settings>,
    },
    {
      path: '/questions',
      element: <Questions />,
    },
    {
      path: '/score',
      element: <FinalScreen />,
    }
  ]);

  return (
    <>
      {/* <Router>
        <Switch>
          <Route path='/'>
            <Settings />
          </Route>
          <Route path='/questions'>
            <Questions />
          </Route>
          <Route path='/score'>
            <FinalScreen />
          </Route>
        </Switch>
      </Router> */}
      <Container maxWidth="sm">
      <Box textAlign="center" mt={5} >
      <Typography variant="h2" fontWeight="bold">Quiz App</Typography>
      <RouterProvider
        router={router}
        ></RouterProvider>
        </Box>
        </Container>
    </>
  )
}

export default App
