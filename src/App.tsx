import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { GlobalTheme } from './styles/GlobalTheme'
import PetShareRoutes from './routes'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function App() {
  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalTheme />
        <PetShareRoutes />
        <ToastContainer />
      </QueryClientProvider>
    </>
  )
}

export default App
