import React from 'react';

const List = props => {
    
    const{items, markAsCompleted, removeTask} = props;

    return (
        <ul>
        {
            items.map( (item, key) => (
                <li 
                    key={key} 
                    className={item.complete ? 'complete' : 'pending'}
                >
                    {item.task}

                    <div className= 'action'>
                        <span 
                            className = {item.complete ? 'hide': 'done'}
                            onClick = {() => markAsCompleted(item.id)}
                        >
                            <i className=" fa fa-check"></i>
                        </span>
                        <span 
                            className = {item.complete ? 'done': 'hide'}
                            onClick = {() => markAsCompleted(item.id)}
                        >
                            X
                        </span>
                        <span className = "trash"
                            onClick = {() => removeTask(item.id)}
                        >
                            <i className=" fa fa-trash"></i>
                        </span>
                    </div>
                </li> 
            ))
        }
    </ul>
    );
}

export default List;