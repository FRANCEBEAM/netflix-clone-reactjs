import Navbar from "./components/Navbar";
import { AuthContextProvider } from './context/AuthContext';


function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
      </AuthContextProvider>
          
        {/* <Navbar /> */}
    
    </>
  );
}

export default App;
