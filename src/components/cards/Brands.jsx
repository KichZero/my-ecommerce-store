import React from "react";
import '../../styles/allCard/brands.css'

const Brands = () => {
    return (
        <div className="brands-container">
            <h2 className="brands-title">Favorite Brands</h2>
            <div className="brands-grid">
                <img src="../public/Cards/blogo1.svg" alt="Brand 1" className="brand-image" />
                <img src="../public/Cards/blogo2.svg" alt="Brand 2" className="brand-image" />
                <img src="../public/Cards/blogo3.svg" alt="Brand 3" className="brand-image" />
                <img src="../public/Cards/blogo4.svg" alt="Brand 4" className="brand-image" />
            </div>
        </div>
    );
};

export default Brands;
