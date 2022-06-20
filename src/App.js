import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './components/Card';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  let Data = [
    {
      title: 'Free',
      price: 0,
      features: [
        {
          content: '10 users included',
        },
        {
          content: '2 GB of storage',
        },
        {
          content: 'Email support',
        },
        {
          content: 'Help center access',
        },
      ],
      button: [
        {
          btnText: 'Sign up for free',
          btnEnable: true,
        },
      ],
    },
    {
      title: 'Pro',
      price: 15,
      features: [
        {
          content: '20 users included',
        },
        {
          content: '10 GB of storage',
        },
        {
          content: 'Priority email support',
        },
        {
          content: 'Help center access',
        },
      ],
      button: [
        {
          btnText: 'Get started',
          btnEnable: false,
        },
      ],
    },
    {
      title: 'Enterprise',
      price: 29,
      features: [
        {
          content: '30 users included',
        },
        {
          content: '15 GB of storage',
        },
        {
          content: 'Phone and email support',
        },
        {
          content: 'Help center access',
        },
      ],
      button: [
        {
          btnText: 'Contact us',
          btnEnable: false,
        },
      ],
    },
  ]
  return (
    <div className='container-fluid'>
      <Navbar></Navbar>
      <div className='container'>
        <div className='main-content'>
          <div className='headind-text'>
            <h1 className='display-4'>Pricing</h1>
            <p>
              Quickly build an effective pricing table for your potential
              customers with this
              <br />
              Bootstrap example. It's built with default Bootstrap components
              and utilities with
              <br />
              little customization.
            </p>
          </div>
          <div className='cards-section row'>
            {Data.map((item) => {
              return <Card details={item}></Card>
            })}
          </div>
        </div>
        <hr />
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App;