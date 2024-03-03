import React from 'react'
import {Form , Row, Col ,Stack, Button, Alert} from 'react-bootstrap'


 const login = () => {
  return (
   <>
   <Form>
      <Row style = {{
        height : "100vh",
        justifyContent: "center",
        paddingTop : "10%"
      }}>
        <Col xs= {6}>
          <Stack gap={3}>
            <h2> Login</h2>
            {/* <Form.Control  type="text" placeholder = " Name"/>  */}
            <Form.Control  type="email" placeholder = "Email"/> 
            <Form.Control  type="password" placeholder = "password"/> 

            <Button variant='primary' type="submit">
              Login
            </Button>

            <Alert variant='danger'>
              <p>An error occured</p>
            </Alert>

          </Stack>
        </Col>
      </Row>
    </Form>
   </>
  )
}


export default login;