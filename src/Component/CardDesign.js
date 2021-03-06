import React, {useState,useEffect} from 'react'
import {Card,Button} from 'react-bootstrap'

function CardDesign({ userId, id, title, body}) {

    const [showBody,setShowBody] = useState(false)

    const showDetails = (body) => {
        setShowBody(!showBody)
        console.log(`${body}`) 

    }


    return (
        <div>
            <Card style={{ width:'22rem', margin:'20px auto'}} >
                <Card.Body key={id}>
                    <Card.Title>User Id: {userId}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Id: {id}   </Card.Subtitle>
                    <Card.Text><i>Title:</i> {title} </Card.Text>
  
                    <div>{ showBody &&  <Card.Text>{body}<br></br></Card.Text> } </div>
                    <br></br>
                    
                    <Button style={{marginRight: '20px' }} variant="primary" onClick={() => showDetails(body)}>{ !showBody ? 'Show details' : 'Show less'}</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardDesign
