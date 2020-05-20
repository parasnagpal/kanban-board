import React from 'react'
import {Container,Row,Col} from 'reactstrap'
import Todos from './todos.js'
import Done from './done'
import Doing from './doing'


class Bucket extends React.Component{
    constructor(props){
        super(props)
        this.state={
            todos:[{task:"Code"},{task:"Sleep"},{task:"Eat"}],
            done:[],
            doing:[]
        }
        this.handledone=this.handledone.bind(this);
        this.handletodo=this.handletodo.bind(this);
        this.handleaddtodo=this.handleaddtodo.bind(this);
        this.handledoing=this.handledoing.bind(this);
    }

    handleaddtodo(data){
        this.setState({
            todos:[...this.state.todos,data]
        })
    }

    handledoing(index){
        console.log(index)
        let new_todos=this.state.todos;
        let new_doing=new_todos.splice(index,1);
        new_doing.push(...this.state.doing);
        this.setState({
            todos:new_todos,
            doing:new_doing    
        },()=>{
            console.log(this.state)
        })
    }

    handledone(index){
        console.log(index)
        let new_doing=this.state.doing;
        let new_done=new_doing.splice(index,1);
        new_done.push(...this.state.done);
        this.setState({
            doing:new_doing,
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
                <div className='d-flex flex-column fit-height'>
                <Row className="justify-content-center underline"><h3>Kanban Board</h3></Row>
                <Row className="fit-height flex-grow-1">
                    <Col className="right-border d-flex flex-column justify-content-between"><Todos data={this.state.todos} onDoing={this.handledoing} addTodo={this.handleaddtodo}/></Col>
                    <Col className="right-border"><Doing data={this.state.doing} onDone={this.handledone}/></Col>
                    <Col><Done data={this.state.done} onTodo={this.handletodo}/></Col>
                </Row>
                </div>
            </Container>
            </div>
        );
    }
}

export default Bucket