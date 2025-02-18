import React, { useState } from 'react'
import TableData from '../TableData/TableData'
import { useLoaderData } from 'react-router';

function Table() {

    const loadedPostData = useLoaderData();
    const [datas, setDatas] = useState(loadedPostData);


    return (
        <table className="table table-xs mt-5">
            <thead>
                <tr>
                    <th>SL</th>
                    <th>Platform</th>
                    <th>Title</th>
                    <th>Activist</th>
                    <th>Link</th>
                    <th>Date</th>
                    <th>Tag</th>
                </tr>
            </thead>
            <tbody>
                {
                    datas.map((data, index) => <TableData
                        key={data._id}
                        index={index}
                        data={data}
                        datas={datas}
                        setDatas={setDatas}
                    ></TableData>)
                }
            </tbody>
        </table>
    )
}

export default Table