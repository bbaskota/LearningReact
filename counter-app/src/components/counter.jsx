import React, { Component } from 'react';

class Counter  extends Component {

    state = {
        count: 2,
        tags :['ag1' , 'ag2', 'tag3']
        
    };
    
    renderTags(){
        if (this.state.tags.length=== 0) return <p>There are no tags !</p>
        return <ul>{this.state.tags.map(Tag => <li key={Tag}>{Tag}</li>)} </ul>

    }

      render() { 
          
        return <div>{this.renderTags()}</div>;
    } 



    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {count} = this.state;
        const y = <h3>Zero</h3>
        return count == 0 ? y : count ;
    }
    }

 
export default Counter;