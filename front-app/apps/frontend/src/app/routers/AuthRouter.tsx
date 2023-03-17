import {ReactNode} from "react";
import {useAuth} from "../hooks/useAuth";
import {Navigate} from "react-router-dom";

type Props = {
  children: ReactNode;
}

export const PrivateRoute = ({ children }: Props) => {
  const check = useAuth();

  if (!check.checked) {
    return <div>Loading...</div>;
  }

  if (check.isAuthenticated) {
    return <>{children}</>;
  }

  return <Navigate to={"/"} />;
}

export const GuestRoute = (props: Props) => {
  const { children } = props;
  const check = useAuth();

  if (!check.checked) {
    return <div>Loading...</div>;
  }

  if (check.isAuthenticated) {
    return <Navigate to={"/home"} />;
  }

  return <>{children}</>;
}
