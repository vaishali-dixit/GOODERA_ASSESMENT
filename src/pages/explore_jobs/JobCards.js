import React, { useState } from 'react';

import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

function JobCards({ data }) {
    const [display, setDisplay] = useState(false);

    return (
        <div className="p-d-flex p-flex-wrap p-jc-evenly">
            {data.map((d, i) =>
                <>
                    <div className="p-d-flex p-col-4 job-card p-m-3" key={i}>
                        <div className="p-col-4">
                            <img alt={"image" + i} className="card-img"
                                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2940&q=80" />
                        </div>
                        <div className="p-d-flex p-col-8 p-flex-wrap p-text-left">
                            <div className="p-col-12">{d.name}</div>
                            <div className="p-col-12">
                                Location: {d.locations.map(l => l.name).join(', ').slice(0, 12) + '...'}
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            Comapny: {d.company.name}
                            </div>
                            <div className="p-col-12">{d.contents.slice(0, 100) + '...'}</div>
                            <div className="p-col-12 p-text-right">
                                <Button label="View Details" onClick={() => setDisplay(true)}></Button>
                            </div>
                        </div>
                    </div>
                    <Dialog header={d.name} visible={display} style={{ width: '50vw' }}>
                        <p>Job ID: {d.id}</p>
                        <p>Description: {d.contents}</p>
                    </Dialog>
                </>
            )}
        </div>
    )
}

export default JobCards
