import React, {useState,useEffect} from 'react'
import Axios from 'axios'
import CardDesign from './CardDesign';

function Ajax() {

    const [posts, setPosts] = useState([])
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            console.log(res)
            setIsLoaded(true);
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
            setIsLoaded(true);
            setError(error);
        })
    },[])

    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
            <div>
                {
                    posts.map(post =>
                    <CardDesign key={post.id} userId={post.userId} id={post.id} title={post.title} body={post.body}/>)       
                }
            
            </div>
        );
      }

}

export default Ajax