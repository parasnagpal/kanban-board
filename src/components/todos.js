import React from 'react'
import {Row,Col} from 'reactstrap'
import {MdDone} from 'react-icons/md'




class Todos extends React.Component{
    constructor(props){
        super(props)

    }

    todo_card(data,index){
        return (
            <Row key={index}>
                <Col>{data.task}</Col>
                <Col xs="1">
                    <div className='button' onClick={()=>this.props.onDone(index)}><MdDone/></div>
                </Col>
            </Row>
        )
    }
    render(){
        return(
            <React.Fragment>
                {this.props.data.map((data,index)=>
                  this.todo_card(data,index)
                )}
            </React.Fragment>
        );
    }
}

export default Todos