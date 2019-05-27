import React from 'react';
import Navbar from '../component/Navbar';
import header from '../images/badge-header.svg';
import './styles/BadgeNew.css';
import Badge from '../component/Badge';
import BadgeForm from '../component/BadgeForm';

class BadgeNew extends React.Component {
    render(){
        return(

         <div>
             <Navbar/>
             <div className="BadgeNew__hero">
             <img className="img-fluid" src={header} alt="Logo"></img>
             </div>

            <div className="container">
                <div className="row">
                    <div className="col-6">
                    <Badge firstName="aaa" 
lastName="Poncho" 
jobTitle="Frontend Engineer" 
twitter="Arroz con pollo🍚🐔"
avatarUrl="https://www.gravatar.com/avatar?d=identicon"
/>
                    </div>
                    <div className="col-6">
                <BadgeForm/>
                    </div>
                </div>
            </div>

         </div>

        )
    }
}

export default BadgeNew;