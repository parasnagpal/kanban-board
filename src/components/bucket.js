import React from 'react'
import {Container,Row,Col} from 'reactstrap'
import Todos from './todos.js'


class Bucket extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todos:[{task:"1"},{task:"2"}],
            done:[]
        }
    }
    render(){
        return(
            <div className="p-3 vh">
            <Container fluid className="board">
                <Row>
                    <Col><Todos data={this.state.todos}/></Col>
                    <Col></Col>
                </Row>
            </Container>
            </div>
        );
    }
}

export default Bucket