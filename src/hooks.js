import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Hooks(props) {
    const [data, setData] = useState([])
    const [count, setCount] = useState(0);
    console.log("tvalue props", props);
    useEffect(() => {
        console.log("in use efffecys", count);
        getUser();

        // Update the document title using the browser API
        // document.title = `You clicked ${count} times`;
    },[]);

    const getUser = () => {
        Axios.get('https://jsonplaceholder.typicode.com/photos').then((response) => {
            console.log("response", response);
            setData(response.data)
        })
            .catch((error) => {
                console.log("error", error);

            })

        console.log("this.state.data", data);
    }

    return (
        <div>
            {/* <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
        </button> */}
            {
                data.slice(0,40).map((item, key) => {
                    return <img src={item.thumbnailUrl} style={{ height: 80, width: 120, borderRadius: 5 }} />


                })


            }
        </div>
    )
}
export default Hooks