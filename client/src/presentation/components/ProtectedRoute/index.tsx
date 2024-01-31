import IUser from "@domaine/IUser";
import { FC, ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  allowedRoles: string[];
  children: ReactNode;
}


const ProtectedRoute: FC<ProtectedRouteProps> = ({ allowedRoles, children }) => {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const auth: IUser = useSelector((state: any) => state.auth);
  const isAllowed = allowedRoles.includes(auth.role);
  console.log(allowedRoles, auth.role, isAllowed);
  if (!isAllowed) return <Navigate to="/unauthorized" />;
  else return children as JSX.Element;
};

export default ProtectedRoute;