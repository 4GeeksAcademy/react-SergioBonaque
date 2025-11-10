export const Navbar = () => {
    return (

        <>
          
            {/* Navbar que colapsa  */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Start Boostrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            
                                

                           
                        </ul>
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            <a className="nav-link" href="#">About</a>
                            <a className="nav-link" href="#">Services</a>
                            <a className="nav-link disabled" aria-disabled="true">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

