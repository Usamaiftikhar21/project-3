import React,{Component}from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import {BsCart2} from'react-icons/bs';
import {BsDoorClosed} from 'react-icons/bs';
import {Link}from 'react-router-dom';
import './css/Header.css';

export class Header extends Component{
    state= {
        toggle:false
    }
    menuToggle= () =>(
        this.setState({toggle :!this.state.toggle})
    )
    render(){
        const{toggle} =this.state;
        return(
           <header>
            <div className="menu" onClick ={this.menuToggle}>
             <AiOutlineMenu/>   
            </div>
            <div className="logo">
                <h1><Link to="/">Nike</Link></h1>
            </div>
            <nav>
               <ul className ={toggle ? "toggle" :""}>
               <li><Link to="/Home">Home</Link></li>
               <li><Link to="/Product">Product</Link></li>
               <li><Link to="/Contact">Contact</Link></li>
               <li><Link to="/About">About</Link></li>
               <li><Link to="/LogIn">LogIn/Rigister</Link></li>
               <li className ="close" onClick ={this.menuToggle}>
                <BsDoorClosed/>
               </li>
           </ul>
       <div className ="nav-cart">
        <span>0</span>
        <BsCart2/>
       </div>


            </nav>
           </header>
        );
    }
}

export default Header;