import { createContext, useEffect, useState } from "react";


export const AuthProviderContext = createContext(null);



const AuthContext = ({children}) => {

      const [items, setItems] = useState([]);

      useEffect(() => {
        fetch(
          "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
        )
          .then((res) => res.json())
          .then((data) => setItems(data.Items));
      }, []);



    const constInfo = {items, setItems}
    return (
        <AuthProviderContext.Provider value={constInfo}>
            {children}
        </AuthProviderContext.Provider>
    );
};

export default AuthContext;