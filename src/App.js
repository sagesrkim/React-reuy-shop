
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthContextProvider } from './context/AuthContext';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Navbar />
        <Outlet />
      </AuthContextProvider>
    </QueryClientProvider>
  )
}

export default App;
