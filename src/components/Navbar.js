import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar(){
    return(
        <>
     <header>
        <nav>
          <div className='brand-name'>
            <p>Company name</p>
          </div>
          <div className='links'>
            <ul>
              <li>
                <a href='#'>Features</a>
              </li>
              <li>
                <a href='#'>Enterprise</a>
              </li>
              <li>
                <a href='#'>Support</a>
              </li>
              <li>
                <a href='#'>Pricing</a>
              </li>
              <li className='sign-up'>
                <a href='#'>Sign up</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
        </>
    );
}

export default Navbar;