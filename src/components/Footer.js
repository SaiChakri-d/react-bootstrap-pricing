import 'bootstrap/dist/css/bootstrap.min.css';

function Footer(){
    return(
        <>
         <footer>
          <div className='BS-logo'>
            <img
              src='https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg' width='25' height='25'></img>
            <p>&copy; 2017-2018</p>
          </div>
          <div className='footer-data'>
            <div className='features'>
              <h5>Features</h5>
              <ul>
                <li>
                  <a href='#'>Cool stuff</a>
                </li>
                <li>
                  <a href='#'>Random feature</a>
                </li>
                <li>
                  <a href='#'>Team feature</a>
                </li>
                <li>
                  <a href='#'>Stuff for developers</a>
                </li>
                <li>
                  <a href='#'>Another one</a>
                </li>
                <li>
                  <a href='#'>Last time</a>
                </li>
              </ul>
            </div>
            <div className='resources'>
              <h5>Resources</h5>
              <ul>
                <li>
                  <a href='#'>Resource</a>
                </li>
                <li>
                  <a href='#'>Resource name</a>
                </li>
                <li>
                  <a href='#'>Another resource</a>
                </li>
                <li>
                  <a href='#'>Final resource</a>
                </li>
              </ul>
            </div>
            <div className='about'>
              <h5>About</h5>
              <ul>
                <li>
                  <a href='#'>Team</a>
                </li>
                <li>
                  <a href='#'>Locations</a>
                </li>
                <li>
                  <a href='#'>Privacy</a>
                </li>
                <li>
                  <a href='#'>Terms</a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        </>
    );
}

export default Footer;