import { useEffect } from "react";
import IHome from "./ITSide/ITHome";
import IOpenTicket from "./ITSide/ITOpenTickets";
import IClosedTicket from "./ITSide/ITClosedTickets";
import IAbout from "./ITSide/ITAbout";

export default function IMain() {
    // set site title
  useEffect(() => {
    document.title = "SCTicketing System";  
  }, []);

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