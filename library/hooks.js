import { useContext } from 'react';
import { ButtonContext } from './context';

export const useButton = () => useContext(ButtonContext);
