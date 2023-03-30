import { Outlet, Navigate } from "react-router-dom";
import { useAdminStatus } from "../hooks/useAdminStatus";
import UOpenTicket from "../pages/ClientSide/UserOpenTickets";

export default function AdminRoute() {
  const { isAdmin, checkingStatus } = useAdminStatus();
  if (checkingStatus) {
    return (
      <>
        <h3>You are not allowed to access this page</h3>
        <h3>Please sign in</h3>
      </>
    )
  }
  return isAdmin ? <Outlet /> : <UOpenTicket/>;
}
