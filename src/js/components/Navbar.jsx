export const Navbar = () => {
    return (

        <>
          
            {/* Navbar que colapsa  */}
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Start Boostrap</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            
                                

                           
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

