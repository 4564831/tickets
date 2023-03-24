import { useEffect, useState, useCallback } from 'react';
import '../../App.css';
import {db} from '../../config/firebase-config'
import { getDocs, collection, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import * as React from 'react'
import UNavigationBar from '../../ClientNavBar';

export default function UNewTicket() {
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
    const [buttonClick, setButtonClick] = useState(false)

    const getTicketType = (event) => {
        setTicketType(event.target.value)
    }

    const submitTicket = useCallback(async() => {
        setMonths(current.toLocaleString('default', {month: 'long'}))
        setDay(current.getDate())
        setYear(current.getFullYear())
        setTime(current.toLocaleTimeString())
        setCompleteDate(months + " " + day + " " + year + " " + time)
       
        try {
            await addDoc(ticketsColl, {
              Content: ticketContent,
              Read: false,
              Timestamp: completeDate,
              Type: ticketType,
              Type_Priority: 1,
              User_Priority: 1,
              Status: true,
              Sender: "testeremail@gmail.com"
            })
            setTicketContent("")
        } catch (err) {
            console.error(err)
        }

      });
    
    useEffect(() => {
        if(buttonClick) {
            submitTicket();
            setButtonClick(false)
        }
    })


    return (
        <div>
            <UNavigationBar/>
            <div className='overall-background'>
                <div className="new-ticket">
                    <div>
                        <label>
                            Ticket Type: 
                            <select style={{margin: 10, padding: 5, fontSize: 16}}
                                onChange={getTicketType}>
                                <option>--Choose--</option>
                                <option value="Alert">Alert</option>
                                <option value="Event">Event</option>
                                <option value="Incident">Incident</option>
                                <option value="Request">Request</option>
                            </select>
                        </label>
                    </div>
                    <textarea placeholder='Content'
                        cols="50"
                        value={ticketContent}
                        style={{width: '85%', height: '70%', justifyContent: 'left', margin: '10px'}}
                        onChange={(e) => setTicketContent(e.target.value)}></textarea>          
                    <button style={{width: '50%', alignSelf: 'center', height: '10%', fontSize: '20px'}}
                        onClick={() => setButtonClick(true)}> Submit Ticket </button>
                </div>   
            </div> 
        </div>
    ) 
}