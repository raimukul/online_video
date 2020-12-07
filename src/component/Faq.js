import React, { useState } from 'react'
import { Card, Accordion } from 'react-bootstrap'
import { MDBIcon } from 'mdbreact';



const Faq = () => {
    
 const [first , setFirst]  = useState(true)
 const [second , setSecond]  = useState(true)
 const [third , setthird]  = useState(true)
 const [fourth , setFourth]  = useState(true)
 const [five , setFive]  = useState(true)
 const [six , setSix]  = useState(true)
  
 const toggle1 = ()=>{
  
    if(first){

      setFirst(false)  
    }else{
      setFirst(true)
    }
  
 }
 const toggle2 = ()=>{
  
    if(second){

      setSecond(false)  
    }else{
      setSecond(true)
    }
  
 }
 const toggle3 = ()=>{
  
    if(third){

      setthird(false)  
    }else{
      setthird(true)
    }
  
 }
 const toggle4 = ()=>{
  
    if(fourth){

      setFourth(false)  
    }else{
      setFourth(true)
    }
  
 }
 
 const toggle5 = ()=>{
  
    if(five){

      setFive(false)  
    }else{
      setFive(true)
    }
  
 }

 const toggle6 = ()=>{
  
    if(six){

      setSix(false)  
    }else{
      setSix(true)
    }
  
 }


  return (
    <div className='container mt-5'>
      <h3 className='text-center mb-4' style={{ fontWeight: 'bold' }}>Frequently asked questions</h3>
      <Accordion defaultActiveKey="1" className="mt-5">
        
        <Card onClick={()=>toggle1()}>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            <h6 style={{ fontWeight: "bold" }}>What is the qualification of the mentors available on your platform?<MDBIcon className="ml-5 orange-text float-right align-middle" 
            icon={first ? 'minus' : 'plus'} /></h6>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>We will be creating a platform that brings in well-experienced Mentors (who are students from different IITs, NITs, and other top engineering colleges. These mentors will guide the customer in a decision of choosing a college.
</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card onClick={()=>toggle2()}>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            <h6 style={{ fontWeight: "bold" }}>What kind of doubts should I ask on the video call?<MDBIcon className="ml-5 orange-text float-right align-middle" 
            icon={second ? 'plus' : 'minus'}/></h6>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>We have provided a separate section on our website/app that contains a list of question that you can ask the mentor. After going through the list, you will be able to frame your own questions.
</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card  onClick={()=>toggle3()}>
          <Accordion.Toggle as={Card.Header} eventKey="3">
            <h6 style={{ fontWeight: "bold" }}>How will instiBuddy be helpful in making a decision of joining a college based on my score? <MDBIcon className="ml-5 orange-text float-right align-middle" 
            icon={third ? 'plus' : 'minus'} /></h6>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>The score of your result throws you into the maze of decisions. Thoughts like, "Should I go for Mechanical Engineering in college A or should I perceive Computer Science in College B?" keep striking in your head. To get you out of this maze, Mentors from InstiBuddy will guide you. You can interact with a Mentor live through our app/website and have a proper discussion regarding your doubts. You choose the college that you wish to get in (IIT, NIT, BITS or another private engineering college) and the Mentor will tell you anything you want to know... as well as everything you should know.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card onClick={()=>toggle4()}>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            <h6 style={{ fontWeight: "bold" }}>What will I have to do in order to become a mentor in InstiBuddy?<MDBIcon className="ml-5 orange-text float-right align-middle" 
            icon={fourth ? 'plus' : 'minus'}/></h6>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>You will have to sign up to your Mentor account.
                       You can use a referral code if you have one.
                       After that, you will receive a notification if you have been selected.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card onClick={()=>toggle5()}> 
          <Accordion.Toggle as={Card.Header} eventKey="5">
            <h6 style={{ fontWeight: "bold" }}>How could I opt for mentorship if I am a student who's confused between 2 or more colleges?<MDBIcon className="ml-5 orange-text float-right align-middle" 
            icon={five ? 'plus' : 'minus'} /></h6>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="5">
            <Card.Body>You can sign up to your mentee account. For getting a free call offer, you can use a referral</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card onClick={()=>toggle6()}>
          <Accordion.Toggle as={Card.Header} eventKey="7">
            <h6 style={{ fontWeight: "bold" }}>Where should I reach in case I face any technical glitch during my mentorship session?<MDBIcon className="ml-5 orange-text float-right align-middle" 
            icon={six ? 'plus' : 'minus'}/></h6>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="7">
            <Card.Body>You can go to the “Contact Us” section of our website. There you’ll see some details through which you can contact us.
</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      
    </div>

  )
}

export default Faq;