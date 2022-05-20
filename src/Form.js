import React from 'react'

function Form() {

    return (
        <div className="container">
            <h1 className="text-center">Create New User</h1>
            <form className="row g-3">
                <div className="col-lg-6 mb-2">
                    <label htmlFor="username" className="form-label">
                         First Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        aria-label="First name"
                    />
                </div>
                <div className="col-lg-6">
                <label htmlFor="username" className="form-label">
                        Last Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        aria-label="Last name"
                    />
                </div>
                <div className="col-lg-6 mb-2">
                    <label htmlFor="inputEmail4" className="form-label">
                        Position
                    </label>
                    <input type="email" className="form-control" id="inputPosition" />
                </div>
                <div className="col-lg-6">
                    <label htmlFor="inputPassword4" className="form-label">
                        Salary
                    </label>
                    <input type="password" className="form-control" id="inputSalary" />
                </div>
                <div className="col-lg-6 mb-2">
                    <label htmlFor="inputEmail4" className="form-label">
                        City
                    </label>
                    <input type="email" className="form-control" id="inputCity" />
                </div>
                <div className="col-lg-6">
                    <label htmlFor="inputPassword4" className="form-label">
                        State
                    </label>
                    <input type="password" className="form-control" id="inputState" />
                </div>
                <div className="col-12 mb-2">
                    <label htmlFor="inputAddress" className="form-label">
                        Address
                    </label>
                    <input type="text" className="form-control" id="inputAddress" />
                </div>
                <div className="col-6 mb-3">
                    <label htmlFor="inputZip" className="form-label">
                        Zip
                    </label>
                    <input type="text" className="form-control" id="inputZip" />
                </div>
                
                <div className="col-12 d-flex justify-content-center">
                    <button type="submit" className="btn btn-lg btn-primary">
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Form