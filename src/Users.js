import React from 'react'
import { Link } from "react-router-dom";


function Users() {
    const userData = [
        {
            id : 1,
            name : "Anil",
            position : "Software Developer",
            salary : 18000
        },
        {
            id : 2,
            name : "Madhu",
            position : "Web Designer",
            salary : 55000
        },
        {
            id : 3,
            name : "Nithya",
            position : "Frontend Engineer",
            salary : 58000
        },
        {
            id : 4,
            name : "Jeevitha",
            position : "UI Developer",
            salary : 34000
        },
        {
            id : 5,
            name : "Ramesh",
            position : "Cloud Engineer",
            salary : 32000
        },
        {
            id : 6,
            name : "Mani",
            position : "Marketing Head",
            salary : 48000
        },
        {
            id : 7,
            name : "Praveen",
            position : "HR Recruiter",
            salary : 34000
        },
        {
            id : 8,
            name : "Naveen",
            position : "FullStack Developer",
            salary : 58000
        },
        {
            id : 9,
            name : "Anuj",
            position : "Digital markerting",
            salary : 28000
        },
        {
            id : 10,
            name : "Eshwar",
            position : "Course Counsler",
            salary : 23000
        },
    ];
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">User List</h1>
                <Link
                    className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                    to={"/form"}
                >
                    <i className="fa-sm text-white-50"></i> Create User
                </Link>
            </div>

            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                        DataTables Example
                    </h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table
                            className="table table-bordered"
                            id="dataTable"
                            width="100%"
                            cellSpacing="0"
                        >
                            <thead className="text-center">
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Salary</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {/* maping array data into table */}
                                {userData.map((data, id) => {
                                    return (
                                        <tr key={id}>
                                            <td className='text-center'>{data.id}</td>
                                            <td className='text-center'>{data.name}</td>
                                            <td className='text-center'>{data.position}</td>
                                            <td className='text-center'>{data.salary}</td>
                                            <td className="text-center ">
                                                <button type="button" class="btn btn-success" onClick={() => alert(data.id + "\n" + data.name + "\n" + data.position + "\n" + data.salary)}>
                                                    View
                                                </button>

                                                <button className="btn btn-primary m-1">Edit</button>
                                                <button className="btn btn-danger">Delete</button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Users