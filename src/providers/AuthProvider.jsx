import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true);


    const [user,setUser]=useState();

  
    
 

  
    const authInfo = { 
        user,setUser
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;