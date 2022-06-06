import { createContext } from 'react';
import { GlobalContextType } from './types';
import { globalContextDefaultValues } from './defaults';

export const GlobalContext = createContext<GlobalContextType>(globalContextDefaultValues);