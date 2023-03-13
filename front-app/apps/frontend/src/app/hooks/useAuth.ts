import {useEffect, useState} from "react";
import {validateJwtToken} from "../api";

export const useAuth = () => {
  const [check, setCheck] = useState<{
    checked: boolean;
    isAuthenticated: boolean;
  }>({ checked: false, isAuthenticated: false });

  useEffect(() => {
    const handleCheckJwt = async () => {
      try {
        const response = await validateJwtToken();
        setCheck({
          checked: true, isAuthenticated: response.data.isAuthenticated
        });
      } catch (error) {
        setCheck({ checked: true, isAuthenticated: false });
      }
    };
    handleCheckJwt();
  }, []);

  return check;
}
