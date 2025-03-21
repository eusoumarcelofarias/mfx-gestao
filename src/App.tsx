
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Financeiro from "./pages/Financeiro";

const queryClient = new QueryClient();

const App = () => {
  // Verificação básica se o usuário está autenticado (em produção, use um sistema de autenticação real)
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route 
              path="/" 
              element={isAuthenticated ? <Layout><Index /></Layout> : <Navigate to="/login" replace />} 
            />
            <Route
              path="/financeiro"
              element={isAuthenticated ? <Layout><Financeiro /></Layout> : <Navigate to="/login" replace />}
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
