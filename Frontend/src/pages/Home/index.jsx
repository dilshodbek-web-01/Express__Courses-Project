import React, { useState, useEffect } from 'react';

const index = () => {

    const [post, setPost] = useState([]);

    const baseURL = "http://localhost:3456/course";

    const getData = async () => {
        const response = await fetch(`${baseURL}/read`);
        const data = await response.json();
        setPost(data);
    }

    useEffect(() => {
        getData();
    }, []);

    console.log(post);

    return (
        <>
            <div className="row">
                <div className="col-md-4 p-3 shadow">
                    <h3 className='text-center text-success'>Add Course</h3>
                    <form action="#">
                        <label htmlFor="title" className='w-100 py-3'>
                            <input className='form-control' type="text"
                                placeholder='Enter title' id='title' />
                        </label>
                        <label htmlFor="price" className='w-100 py-3'>
                            <input className='form-control' type="text"
                                placeholder='Enter price' id='price' />
                        </label>
                        <label htmlFor="author" className='w-100 py-3'>
                            <input className='form-control' type="text"
                                placeholder='Enter author' id='author' />
                        </label>
                        <label htmlFor="file" className='w-100 py-3'>
                            <input className='form-control' type="file" id='file' />
                        </label>
                        <button className="btn w-100 my-2 btn-success">Add Course</button>
                    </form>
                </div>
                <div className="col-md-8 p-3 shadow-lg">
                    <h3 className='text-center text-success'>Latest courses list</h3>
                    <table className='mt-4 table table-hover table-bordered table-striped'>
                        <thead>
                            <tr>
                                <th>ID</th> <th>Title</th> <th>Price</th> <th>Author</th>
                                <th>Image</th> <th>Edit</th> <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td> <td>React</td> <td>800000</td>
                                <td>React Teacher</td> <td><img src="https://picsum.photos/id/159/40/30" alt="image" /></td>
                                <td><i className="fas fa-edit fa-lg text-primary"></i></td>
                                <td><i className="fas fa-trash-can fa-lg text-danger"></i></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default index;