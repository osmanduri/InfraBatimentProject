import React, { useEffect, useState } from 'react'
//import data from '../data/posts'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import DetailsPostsComponent from '../components/DetailsPostsComponent';
const axios = require('axios')
require('dotenv').config()

export default function DetailsPost() {
    const { id } = useParams();
    const [postsDb, setPostsDb] = useState()

    const getAllChantier = () => {
        axios.get(`${process.env.REACT_APP_API_URL}chantiers`)
        .then(function (response) {
        setPostsDb(response.data)
        })
        .catch(function (error) {
        // handle error
        console.log("error");
    })
    }


    const chantierUpdateVue = (id) => {
        axios.put(`${process.env.REACT_APP_API_URL}chantiers/vue/${id}`)
        .then(function (response) {
        })
        .catch(function (error) {
        // handle error
        console.log(error);
        })
    }

    useEffect(() => {

        getAllChantier();
        //getChantierById(id);
        chantierUpdateVue(id);
    },[id])

    if(!postsDb){
        return null;
    }
    return (
        <div>
            {
                postsDb.filter(post => post._id === id).map((post, index) => {
                    return(
                        <DetailsPostsComponent element={post} key={index}/>
                    )
                })
            }
        </div>
    )
}
