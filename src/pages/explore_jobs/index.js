import React, { useEffect, useState } from 'react';
import axios from 'axios';

import JobCards from './JobCards';

import '../../styles/Explore.css';

function ExploreJobs() {
    const [data, setData] = useState([]);

    const getJobsList = () => {
        axios.get('https://www.themuse.com/api/public/jobs?page=1')
            .then((res) => {
                setData(res.data.results);
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        getJobsList();
    }, []);

    return (
        <div>
            <JobCards data={data} />
        </div>
    )
}

export default ExploreJobs
