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
        },
        imageStyle:{
            width:105,
            height:105
        }
    }

    const {data} = props;
    return(
        <tr>
            
            <td style={styles.titleStyle}>{props.index}</td>
            
            <td>
                {
                    (data.thumbnail !== "self") ? <img src={data.thumbnail}></img> : <img style={styles.imageStyle} src="Swiftionary Logo.png"></img>
                }
            </td>
            <td style={styles.postStyle}>
            <a href={data.url}>
                <p>{props.title}</p>
                </a>
                <p>{`${props.points} points - ${props.comments} comments - r/${props.subreddit} -Posted by u/${props.user}`}</p>
            </td>
            
        </tr>
    )
};

//Data of all the information to be displayed in the UI
const data2= [
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

    constructor(props){
        super(props);
        this.state= {
            data : {},

        };
    }

    async componentDidMount(){
        const response = await fetch('https://www.reddit.com/r/firefox/.json');
        const json = await response.json();
        this.setState({
            data: json,
            gotData:true,
        });
    }

    render(){ 
        const {data,gotData} = this.state;
        console.log(gotData, data);
        return(
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
                // given the array data. Uses arrow function | gotData must be true for the filter to render
                gotData && data.data.children.map((child,index) => {
                        const {data } =child;
                        return(
                        <ThreadComponent
                            index={index+1}
                            title={data.title}
                            points={data.score}
                            comments={data.num_comments}
                            subreddit={data.subreddit}
                            user={data.author}
                            permalink ={data.permalink}
                            data={data}
                            thumbnail
                        />
                        );
                }
                )
            }
        </tbody>
      </Table>
    )
    }

}

export default InfoTable;