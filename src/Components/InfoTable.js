import React, {Component} from 'react';
import {Table} from 'react-bootstrap';

function ThreadComponent(props){
    console.log(props);
    const styles ={
        titleStyle:{
            color:'blue',
            'font-family':'Montserrat'
        },
        postStyle:{
            'font-family':'Montserrat',
            'text-align':'left'
        }
    }
    return(
        <tr>
            <td style={styles.titleStyle}>{props.index}</td>
            <td style={styles.postStyle}>
                <p>{props.title}</p>
                <p>{`${props.points} points - ${props.comments} comments - r/${props.subreddit} -Posted by u/${props.user}`}</p>
            </td>
        </tr>
    )
};

//Data of all the information to be displayed in the UI
const data= [
    {
        title:"Hello World",
        points:"4.6k",
        comments: 40,
        subreddit:"Swiftionary",
        user:"User"
    },
    {
        title:"Cool Update",
        points:"3.2k",
        comments: 90,
        subreddit:"Swiftionary2",
        user:"blubba"
    },
    {
        title:"Whats Up",
        points:"9.9k",
        comments: 210,
        subreddit:"Swiftionary2",
        user:"mrbones"
    },


];

class InfoTable extends Component {
    render(){ return(
        <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Posts</th>
          </tr>
        </thead>
        <tbody>
            {
                // Map takes in anonymous function. The function will return thread components for each index in the array
                // given the array data. Uses arrow function
                data.filter(value=> value.comments > 50).map((dataObject,index) =>
                        <ThreadComponent
                            index={index+1}
                            title={dataObject.title}
                            points={dataObject.points}
                            comments={dataObject.comments}
                            subreddit={dataObject.subreddit}
                            user={dataObject.user}
                        />
                )
            }
        </tbody>
      </Table>
    )
    }

}

export default InfoTable;