import { useEffect, useState } from 'react';
import { db } from '../config/firebase-config';
import { getDocs, collection, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import UNavigationBar from './adminNavBar';
import '../App.css';

export default function UClosedTicket() {
    const [ticketList, setTicketList] = useState([])
    const ticketsColl = collection(db, "Test_Tickets2")
    const current = new Date()
    const [ticketType, setTicketType] = useState()
    const [ticketContent, setTicketContent] = useState()
    const [ticketContentCurrent, setTicketContentCurrent] = useState()
    const [months, setMonths] = useState(current.toLocaleString('default', {month: 'long'}))
    const [day, setDay] = useState(current.getDate())
    const [year, setYear] = useState(current.getFullYear())
    const [time, setTime] = useState(current.toLocaleTimeString())
    const [completeDate, setCompleteDate] = useState()
    const closeTickets = async(id) => {
        const ticketDoc = doc(db, "Test_Tickets2", id)
        await updateDoc(ticketDoc, {Status: false})
        getTickets()
      }
    
      const editTicket = async(id) => {
        const ticketDoc = doc(db, "Test_Tickets2", id)
        await updateDoc(ticketDoc, {Content: ticketContentCurrent})
        getTickets()
      }
    
      const getTickets = async() => {
        try{
          const data_tickets = await getDocs(ticketsColl)
          const filteredData = data_tickets.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id}))
          console.log({filteredData})
          setTicketList(filteredData)
        } catch(err) {
          console.error(err)
        }
      }
      
      useEffect(() =>{
         getTickets()
      }, [])
    
    return (
      <div>
        <UNavigationBar/>
        <div className="tickets-background">
            <h1>Closed Tickets</h1>
            <div className="ticket-container">
                {ticketList.sort((a, b) => (a.Timestamp > b.Timestamp) ? 1 : -1).map((ticks) => {
                  if(ticks.Status === false){
                    return(
                      <div className="ticket-card">
                        <h5>Date: {ticks.Timestamp} </h5>
                        <h5>Type: {ticks.Type}</h5>
                        <h5>Priority: {ticks.User_Priority}</h5>
                        <h5>Sender: {ticks.Sender}</h5>
                        <p>{ticks.Content}</p>
                        
                      </div>
                    )
                    
                  }
                })}
            </div>
        </div>
      </div>
    ) 
}
