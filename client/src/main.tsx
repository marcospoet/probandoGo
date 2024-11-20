import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {ChakraProvider} from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import theme from "./chakra/theme.ts";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
            <ChakraProvider value={theme} >
                <QueryClientProvider client={queryClient}>
                    <App />
                </QueryClientProvider>
            </ChakraProvider>
    </React.StrictMode>
);
