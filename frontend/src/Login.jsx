import React from 'react'
import {
  Button
} from 'react-bootstrap'

const Login = ({ getGenericID }) => {
  return (
    <div className='login'>
      <h1 className='welcome'> {' '}Welcome to DotaNUBS</h1>

      <div className='info'><div className='info-bckgrnd'> Enter your steam 32 ID in the box above to access your profile. </div></div>

      <div>
        <a
          href='https://steamid.xyz/'
          target='_blank'
          rel='noopener noreferrer'
          style={{marginBottom: 20, fontSize: 25}}
        >
          <Button bsStyle="success" bsSize="large" style={{marginTop: 30, marginBottom: 15, borderRadius: 5}} >Get your steam32 ID</Button>          
        </a>
        <div>
          <Button bsStyle="info" bsSize="large" onClick={getGenericID} style={{borderRadius: 5}} >I don't have Steam ID</Button>
        </div>
      </div>
    </div>

  )
}

export default Login
