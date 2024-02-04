import { createContext, useEffect, useMemo, useState } from "react";
import { serviceLogin, serviceLogout, serviceMe } from "../api/authservice";
export const AuthContext = createContext(null);

const fetchUserData = async () => {
  const token = localStorage.getItem("token");
  const currentUser = JSON.parse(localStorage.getItem("user"));
  let user;
  // if (token && currentUser) {
  //   user = currentUser;
  // } else 
  if (token) {
    user = await serviceMe()//.then((res) => res);
  } else {
    user = null;
  }
  return user;
};

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  // const [user, setUser] = useState(fetchUserData());
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetchUserData().then(user => setUser(user)) 
  },[])
  const is_master = useMemo(() => (user ? user.is_master : false), [user]);

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

  const refetchUser = async () => {
    const refreshedUser = await serviceMe();
    setUser(refreshedUser);
  };

  const value = { user, signIn, signOut, is_master, refetchUser };
  console.log(user)
  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
      )}
    </>
  );
};

export default AuthProvider;
