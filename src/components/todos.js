import React from 'react'
import {Row,Col} from 'reactstrap'
import {MdDone,MdAdd} from 'react-icons/md'


class Todos extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value:""
        }
        this.updateinputstate=this.updateinputstate.bind(this);
        this.addtodo=this.addtodo.bind(this);
    }
    addtodo(){
        let todo={
            task:this.state.value,
        }
        this.props.addTodo(todo);
        this.setState({
            value:""
        })
    }

    updateinputstate(e){
        this.setState({
            value:e.target.value
        })
    }

    todo_card(data,index){
        return (
            <Row key={index}>
                <Col>{data.task}</Col>
                <Col xs="1">
                    <div className='button' onClick={()=>this.props.onDoing(index)}><MdDone/></div>
                </Col>
            </Row>
        )
    }
    render(){
        return(
            <React.Fragment>
                <div>
                    <Row>
                        <Col className="underline"><h5>To-Do</h5></Col>
                    </Row>
                    {this.props.data.map((data,index)=>
                      this.todo_card(data,index)
                    )}
                    </div>
                <Row>
                    <Col><input value={this.state.value} onChange={this.updateinputstate}/></Col>
                    <Col sm="1"><div><MdAdd onClick={this.addtodo}/></div></Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Todos