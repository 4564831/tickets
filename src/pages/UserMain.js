import { useEffect } from "react";
import UAbout from "./ClientSide/UserAbout";
import UClosedTicket from "./ClientSide/UserClosedTickets";
import UHome from "./ClientSide/UserHome";
import UNewTicket from "./ClientSide/UserNewTick";
import UOpenTicket from "./ClientSide/UserOpenTickets";

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
