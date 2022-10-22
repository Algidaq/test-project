import { createContext } from 'react';
import AuthService from './AuthService';
/**
 * @type {import('react').Context<AuthService | null>}
 */
const AuthServiceContext = createContext(null);
export default AuthServiceContext;
