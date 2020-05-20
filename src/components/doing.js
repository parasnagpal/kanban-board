import React from 'react'
import {Row,Col} from 'reactstrap'
import {MdDoneAll} from 'react-icons/md'

class Doing extends React.Component{
    constructor(props){
        super(props)

    }

    todo_card(data,index){
        return (
            <Row key={index}>
                <Col>{data.task}</Col>
                <Col xs="1">
                    <div className='button' onClick={()=>this.props.onDone(index)}><MdDoneAll/></div>
                </Col>
            </Row>
        )
    }
    render(){
        return(
            <React.Fragment>
                <Row>
                    <Col className="underline"><h5>Doing</h5></Col>
                </Row>
                {this.props.data.map((data,index)=>
                  this.todo_card(data,index)
                )}
            </React.Fragment>
        );
    }
}

export default Doing