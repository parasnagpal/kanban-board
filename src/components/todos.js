import React from 'react'
import {Row,Col} from 'reactstrap'
import {MdDone} from 'react-icons/md'




class Todos extends React.Component{

    todo_card(data){
        return (
            <Row>
                <Col>{data.task}</Col>
                <Col xs="1"><MdDone/></Col>
            </Row>
        )
    }
    render(){
        return(
            <React.Fragment>
                {this.props.data.map((data)=>
                  this.todo_card(data)
                )}
            </React.Fragment>
        );
    }
}

export default Todos