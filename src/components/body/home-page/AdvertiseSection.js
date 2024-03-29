import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import {CardTitle} from "reactstrap";
import './css/banner.css'

const AdvertiseSection = (props) => {
    return (
        <div>

            <div className="container" style={{ backgroundColor: "none", textAlign: "left", paddingTop: "25px" }}>
                <div className="row">
                    <div className="col-6 col-sm-3 col-md-2" style={{ backgroundColor: "none", padding: "20px", marginBottom: "20px", textAlign: "left", color: "tomato" }} >
                        <img className="img-fluid" src={props.imageUrl} />
                    </div>
                    <div className="col-6 col-sm-9 col-md-10">
                        <CardTitle tag="h5">{props.AdvertiseTitle}</CardTitle>
                        <span>{props.AdvertiseDetails}
                        </span><br />

                        <button class="btn btn-outline-danger" style={{ backgroundColor: "none", borderColor: "tomato" }}>
                            {props.button.text}
                        </button>
                    </div>
                </div>


            </div>


            <div className="container" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
                <div className="row">

                </div>
            </div>
        </div>
    );

}

export default AdvertiseSection;