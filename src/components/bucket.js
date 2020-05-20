import React from 'react'
import {Container,Row,Col} from 'reactstrap'
import Todos from './todos.js'
import Done from './done'


class Bucket extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todos:[{task:"Code"},{task:"Sleep"},{task:"Eat"}],
            done:[]
        }
        this.handledone=this.handledone.bind(this);
        this.handletodo=this.handletodo.bind(this);
    }

    handledone(index){
        console.log(index)
        let new_todos=this.state.todos;
        let new_done=new_todos.splice(index,1);
        new_done.push(...this.state.done);
        this.setState({
            todos:new_todos,
            done:new_done    
        },()=>{
            console.log(this.state)
        })
    }

    handletodo(index){
        console.log(index)
        let new_done=this.state.done;
        let new_todos=this.state.done.splice(index,1);
        new_todos.push(...this.state.todos);
        this.setState({
            todos:new_todos,
            done:new_done    
        })
    }

    render(){
        return(
            <div className="p-3 vh">
            <Container fluid className="board">
                <Row className="justify-content-center underline"><h3>Kanban Board</h3></Row>
                <Row>
                    <Col className="right-border"><Todos data={this.state.todos} onDone={this.handledone}/></Col>
                    <Col><Done data={this.state.done} onTodo={this.handletodo}/></Col>
                </Row>
            </Container>
            </div>
        );
    }
}

export default Bucket