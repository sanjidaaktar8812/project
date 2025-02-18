import React from 'react'
import Swal from 'sweetalert2';

function TableData({ data, index, datas, setDatas }) {
    const { _id, platform, title, activist, link, date, tag } = data;


    const badge = (socialMedia) => {
        const media = socialMedia.toLowerCase();
        if (media === 'facebook') {
            return <span class="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">{media}</span>;

        } else if (media === 'twitter') {
            return <span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-gray-700 dark:text-gray-300">{media}</span>;
        } else if (media === 'youtube') {
            return <span class="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-red-900 dark:text-red-300">{media}</span>;
        }
    }

    // delete oparation 
    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/postdata/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your data has been deleted.",
                                icon: "success"
                            });
                            const remainingDatas = datas.filter(dat => dat._id !== id);
                            setDatas(remainingDatas)
                        }
                    })
            }
        });
    }


    return (
        <tr>
            <th>{index + 1}</th>
            <td>{badge(platform)}</td>
            <td>{title}</td>
            <td className='font-bold'>{activist}</td>
            <td className='text-blue-500 font-bold underline'><a href={link} target='_blank'>Link</a></td>
            <td>{date}</td>
            <td>{tag}</td>
            <td className='btn btn-sm my-1.5 bg-red-600 text-white' onClick={() => handleDelete(_id)}>Det</td>
        </tr>
    )
}

export default TableData