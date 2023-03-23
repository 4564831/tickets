import { useEffect } from "react";
import IHome from "./adminHome";
import IOpenTicket from "./adminOpenTickets";
import IClosedTicket from "./adminClosedTickets";
import IAbout from "./adminAbout";

export default function IMain() {
  let component
  switch(window.location.pathname){
    case "/aXRob21l":
        component = <IHome/>
        break
    case "/aXRvcGVudGlja2V0cw==":
        component = <IOpenTicket/>
        break
    case "/aXRjbG9zZWR0aWNrZXRz":
        component = <IClosedTicket/>
        break
    case "/aXRhYm91dA==":
        component = <IAbout/>
        break
    default:
        component = <IHome/>
        break
  }

  return (
    <>
        <div>
            {component}
        </div>
    </>
  )
}
