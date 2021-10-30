import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { ProgressSpinner } from 'primereact/progressspinner';

import JobCards from './JobCards';

import '../../styles/Explore.css';

function ExploreJobs() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getJobsList = () => {
        setLoading(true);
        axios.get('https://www.themuse.com/api/public/jobs?page=1')
            .then((res) => {
                setLoading(false);
                setData(res.data.results);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }

    useEffect(() => {
        getJobsList();
    }, []);

    return (
        <div>
            {loading ?
                <>
                    <h1 style={{ marginTop: '150px' }}>Loading...</h1>
                    <ProgressSpinner className="p-my-3" />
                </> :
                <JobCards data={data} />
            }
        </div>
    )
}

export default ExploreJobs
