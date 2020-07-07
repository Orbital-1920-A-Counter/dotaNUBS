import React from 'react'
import { Navbar, NavItem, Nav, Button, FormControl, FormGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = ({ onChangeSearchText, text, onLogin }) => {
  
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to='/'>DotaNUBS</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse> 
        <Nav activeKey={1}>
          <NavItem componentClass={Link} to={`/heroes`} href={`/heroes`}>Heroes      
          </NavItem>
        </Nav>
        <Nav activeKey={2}>
          <NavItem componentClass={Link} to={`/about`} href={`/about`}>About      
          </NavItem>
        </Nav>
        <Nav activeKey={3}>
          <NavItem componentClass={Link} to={`/pro`} href={`/pro`}>Pro Players      
          </NavItem>
        </Nav>
        <Navbar.Form pullRight>
          <FormGroup>
            <FormControl type="text" placeholder="Search Steam32 ID" value={text} onChange={onChangeSearchText}/>
          </FormGroup>          
            <Link to={`/match/${text}`}><Button type="submit" onClick={onLogin}>My Profile</Button></Link>
        </Navbar.Form>
        
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header