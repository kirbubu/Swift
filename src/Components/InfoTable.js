import React, {Component} from 'react';
import {Table} from 'react-bootstrap';


/***
 * Function ThreadComponent(props)
 * 
 * This is a function that initalizes all the information within the InfoTable
 * As of now, it takes information from a reddit JSON file. In the future, it could
 * take posts from a onsite forum etc...
 */
function ThreadComponent(props){
    // For debugging in chrome 
    console.log(props);
    //Should move to a CSS file. This is CSS written within Javascript (bad practice)
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

    /**
     * ABOUT PROPS
     * 
     * Props allows us to create data objects within a component (even though this
     * is a function, we are essentially returning a component).
     * Given the input props props allows us to create new data objects we can refer to within
     * the component, for example when props.title is initialized below.
     */


    //Save the props to data object
    const {data} = props;
    //Return a component, specifically a table row <tr>
    return(
        <tr>
            {/* Props.index = current number */}
            <td style={styles.titleStyle}>{props.index}</td>
            
            {/* Table data <td> With a tertiary statement...
                if the thumbnail isn't equal to "self" (which is a default image/status
                subreddits have when an image isn't include with a post). If it isn't equal to self
                then it is equal to an image, so set the thumbnail equal to an image. Else, set it equal to 
                a default image.
            */}
            <td>
                {
                    (data.thumbnail !== "self") ? <img src={data.thumbnail}></img> : <img style={styles.imageStyle} src="Swiftionary Logo.png"></img>
                }
            </td>
            {/* Create a new table data,containing url for the link, the title of the post, etc... */}
            <td style={styles.postStyle}>
            <a href={data.url}>
                <p>{props.title}</p>
                </a>
                <p>{`${props.points} points - ${props.comments} comments - r/${props.subreddit} -Posted by u/${props.user}`}</p>
            </td>
            
        </tr>
    )
};

/***
 * InfoTable Component
 * 
 * InfoTable is a mockup of subreddit page. Any subreddit can be fetched
 * if the .json tag is added to the end of the main page of any subreddit.
 */
class InfoTable extends Component {


    
    // Create a constsructor for the class, where the props come from the original component
    // Data is set equal to a empty object
    constructor(props){
        super(props);
        this.state= {
            data : {},

        };
    }

    
    /**
     * Async ComponentDidMount
     * This is an asynchronous function, which allows other processes to continue while
     * this process fulfills its request of fetching from the .json file online
     */
    async componentDidMount(){
        // Using fetch, save the response information from this json 
        // Await must be used to call function within async that you need wait for.
        const response = await fetch('https://www.reddit.com/r/firefox/.json');
        // Type converting the response to json.
        const json = await response.json();
        // Now set the current state to the the const json and confirm the
        // data has now been received
        this.setState({
            data: json,
            gotData:true,
        });
    }

    render(){ 
        // Receive the data from the state
        const {data,gotData} = this.state;
        //Console information for chrome debugging
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
                            /**
                             * ThreadComponent, which is defined above, allows us 
                             * to map the information from child (which we saved into data)
                             * Therefore we're mapping all the data objects from the .json children data objects
                             * to the data objects (props) we defined within ThreadComponent
                             */
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