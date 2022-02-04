import React, { Fragment } from "react";
import './CartWidget.css';


const CartWidget = ({image, title1, title2, title3}) => {
    return(
        <Fragment>

          <div className="card-group">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"> {title1} </h5>
                <img src={image} className="card-img-top" alt="..."/>
                {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"> {title2} </h5>
                <img src={image} className="card-img-top" alt="..."/>
                {/* <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title"> {title3} </h5>
                <img src={image} className="card-img-top" alt="..."/>
                {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
              </div>
            </div>
          </div>
          
        </Fragment>
    );
}

export default CartWidget;