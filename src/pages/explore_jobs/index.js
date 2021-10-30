import React, { useEffect } from 'react'

function ExploreJobs() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getJobsList();
    }, []);

    return (
        <div>
            here
            <JobCards />
        </div>
    )
}

export default ExploreJobs
