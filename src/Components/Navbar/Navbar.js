function Navbar() {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">TITLE</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">BIOGRAPHY</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        COURSES  </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">COURSES</a></li>
                                        <li><a className="dropdown-item" href="#"> WORKSHOPS </a></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><a className="dropdown-item" href="#">TALKS</a></li>
                                    </ul>
                                </li>
                            </ul>
                                <form className="d-flex">
                                    <input className="inputt me-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button className="Btn" type="submit">Search</button>
                                </form>
                        </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;
