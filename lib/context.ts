import { createContext } from 'react';
import { globalContextType } from './types';
import { globalContextDefaultValues } from './defaults';

export const GlobalContext = createContext<globalContextType>(globalContextDefaultValues);