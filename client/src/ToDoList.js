import React, {Component} from 'react';

var forAnotherFunction = this.props.arr.map(
    eachItem => {
        return(
            <div>
                <p>

                    {eachItem._id} {eachItem.username } has to { eachItem.todo} {eachItem.isDone}
                </p>
                <button onClick={()=>this.props.delete(eachItem._id)}>Delete</button>
                <hr/>
                <h2>{this.props.arr.todo}</h2>
                <h2>{forAnotherFunction}</h2>
            </div>
        )
    }



);

class ToDoList extends Component {


    render() {
        //console.log("Array")
        //console.log(this.props.arr)

        var forEachItem = this.props.arr.map(
            eachItem => {
                //console.log(eachItem.isDone)
                if (eachItem.isDone === true) {
                    (eachItem.isDone) = "is Done"
                }
                else if (eachItem.isDone === false)
                    (eachItem.isDone) = "is not Done"


                return (
                    <div>
                        <p>

                            {eachItem._id} {eachItem.username} has to {eachItem.todo} {eachItem.isDone}
                        </p>
                        <button onClick={() => this.props.deleteFunction(eachItem._id)}>Delete</button>
                        <hr/>
                    </div>

                )

            }
        );
        //
        //     return (
        //
        //         <div>
        //
        //             <h2>{this.props.arr.todo}</h2>
        //             <h2> {forEachItem}</h2>
        //
        //         </div>
        //
        //
        //     );
        //
        //
        // }
        //
        //


    }
}
export default ToDoList;