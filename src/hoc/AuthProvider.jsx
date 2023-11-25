import { createContext, useMemo, useState } from "react";
import { serviceLogin, serviceLogout, serviceMe } from "../api/authservice";
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(
    () => {
      const token = localStorage.getItem("token");
      const currentUser = JSON.parse(localStorage.getItem("user"));
      if (token && currentUser) {
          return currentUser;
      }
      else if (token) {
        return serviceMe().then(res => res);
      }
      else {return null}
    }
  );
  const is_master = useMemo(() => (user)? user.is_master : false, [user])
  // try to get user with localStorage token onload or set null
  // useEffect(() => {
  //       setLoading(true);
  //       const token = localStorage.getItem("token");
  //       const currentUser = JSON.parse(localStorage.getItem("user"));
  //       if (token && currentUser) {
  //           setUser(currentUser);
  //       }
  //       else if (token) {
  //         serviceMe();
  //       }
  //       else {setUser(null);}
  //       setLoading(false);
  //     }, []);


  console.log(user);
  const signIn = async (username, password, callback = () => {}) => {
    serviceLogin(username, password)
      .then(() => setUser(JSON.parse(localStorage.getItem("user"))))
      .then(callback());
  };

  const signOut = (callback = () => {}) => {
    serviceLogout()
      .then(() => setUser(null))
      .then(() => callback());
  };

  const value = { user, signIn, signOut, is_master };

  return(
    <>
    { loading?
  (<div>Loading...</div>) :
  (<AuthContext.Provider value={value}>{children}</AuthContext.Provider>)
}
  </>
  )
};

export default AuthProvider;
