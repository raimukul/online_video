import React from 'react'
import { Card, Accordion } from 'react-bootstrap'
import { MDBIcon } from 'mdbreact';



const Faq = () => {
  return (
    <div className='container mt-5'>
      <h3 className='text-center mb-4' style={{ fontWeight: 'bold' }}>Frequently asked questions</h3>
      <Accordion defaultActiveKey="0" className="mt-5">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            <h6 style={{ fontWeight: "bold" }}>What is the size of your team? <MDBIcon className="ml-5 orange-text float-right align-middle" icon="plus" /> </h6>

          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Our team consists of 18 members.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>




          <Accordion.Toggle as={Card.Header} eventKey="1">
            <h6 style={{ fontWeight: "bold" }}>The people who initiated this startup belong to what background?<MDBIcon className="ml-5 orange-text float-right align-middle" icon="plus" /></h6>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>This startup is initiated by the Alumni of IIT Bombay and IIM Ahmedabad.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            <h6 style={{ fontWeight: "bold" }}>Why another website for counselling? There are a lot of other startups with your motive.<MDBIcon className="ml-5 orange-text float-right align-middle" icon="plus" /></h6>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>Our platform tries to connect well-experienced mentors (who have been students in their initial years) with the students who passed from 12th grade recently. Moreover, the interaction will happen through a live video call. This has never happened before.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3">
            <h6 style={{ fontWeight: "bold" }}>How will your platform - instiBuddy- benefit students? <MDBIcon className="ml-5 orange-text float-right align-middle" icon="plus" /></h6>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>When a student is promoted from 12th grade, they will need a well-designed medium to have a glimpse at the colleges that they wish to get in. There are thousands of colleges, and they are present far away from their reach. We are creating a better medium to understand the appearance & mechanism of the colleges before a student decides to get in.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            <h6 style={{ fontWeight: "bold" }}>What is the qualification of the mentors available on your platform?<MDBIcon className="ml-5 orange-text float-right align-middle" icon="plus" /></h6>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>We will be creating a platform that brings in well-experienced Mentors (who are students from different IITs, NITs, and other top engineering colleges. These mentors will guide the customer in a decision of choosing a college.</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      
    </div>

  )
}

export default Faq;