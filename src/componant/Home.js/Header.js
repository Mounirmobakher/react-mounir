import React from "react";
import './Header.css';
const Header = () => {
    return (
        <header className="Container">
            <div className="row">
                <div className="col-md-6">
                    <h2>Good Food Choices are good investments</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsa delectus voluptas expedita aperiam unde sapiente harum neque nemo quaerat, soluta sequi iure quia corrupti dolores, quam aspernatur officiis magnam.</p>
                    <button>Order Now</button>
                    <button> More About</button>

                    <div className="col-md-6">
                    </div>
                </div>
            </div>
        </header>
    )
};
export default Header;