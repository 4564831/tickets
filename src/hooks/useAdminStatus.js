import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export function useAdminStatus() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      console.log('user.displayName:', user.displayName);
      if (user.displayName === "admin") {
        setIsAdmin(true);
      }
      setCheckingStatus(false);
    });
  }, []);
  return { isAdmin, checkingStatus };
}
