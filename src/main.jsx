import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from './Components/Routes/Routes.jsx';
import AddCardProvider from './Components/heardAndAddCardContext/AddCardProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <AddCardProvider>
    <RouterProvider router={router} ></RouterProvider>

    </AddCardProvider>

  </StrictMode>
)
