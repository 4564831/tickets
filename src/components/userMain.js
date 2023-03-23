import { useEffect } from "react";
import UAbout from "./userAbout";
import UClosedTicket from "./userClosedTickets";
import UHome from "./userHome";
import UNewTicket from "./userNewTickets";
import UOpenTicket from "./userOpenTickets";

export default function UMain() {
        // set site title
  useEffect(() => {
    document.title = "SCTicketing System";  
  }, []);

  let component
  switch(window.location.pathname){
    case "/Y2xpZW50aG9tZQ==":
        component = <UHome/>
        break
    case "/Y2xpZW50bmV3dGlja2V0":
        component = <UNewTicket/>
        break
    case "/Y2xpZW50b3BlbnRpY2tldA==":
        component = <UOpenTicket/>
        break
    case "/Y2xpZW50Y2xvc2VkdGlja2V0":
        component = <UClosedTicket/>
        break
    case "/Y2xpZW50YWJvdXQ=":
        component = <UAbout/>
        break
    default:
        component = <UHome/>
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
