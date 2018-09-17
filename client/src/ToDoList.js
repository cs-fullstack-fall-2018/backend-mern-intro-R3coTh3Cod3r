import React, {Component} from 'react';


class ToDoList extends Component {



    var forEachItem = this.props.arr.map(
    eachItem => {
        //console.log(eachItem.isDone)
        if(eachItem.isDone === true){
            (eachItem.isDone) = "is Done"}
        else if(eachItem.isDone ===false)
            (eachItem.isDone) = "is not Done"



    render() {
        //console.log("Array")
        //console.log(this.props.arr)



                return(
                    <div>
                        <p>

                            {eachItem._id} {eachItem.username } has to { eachItem.todo} {eachItem.isDone}
                        </p>
                        <button onClick={()=>this.props.deleteFunction(eachItem._id)}>Delete</button>
                        <hr/>
                    </div>

                )

            }


        );
}

        return (

            <div>

                <h2>{this.props.arr.todo}</h2>
                <h2> {forEachItem}</h2>

            </div>
        )











}
export default ToDoList