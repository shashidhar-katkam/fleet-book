import React, { useState, useRef } from "react";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
import { withRouter } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Link } from "react-router-dom";
import { InputTextarea } from "primereact/inputtextarea";
import { InputSwitch } from "primereact/inputswitch";
import { StyleClass } from "primereact/styleclass";
import { Ripple } from "primereact/ripple";
import FleetFooter from "./fleetFooter";

const LandingPage = (props) => {
    const [value, setValue] = useState(false);
    const rootBtnRef = useRef(null);
    const btnRef1 = useRef(null);
    const btnRef2 = useRef(null);
    const btnRef3 = useRef(null);
    const btnRef4 = useRef(null);

    return (
        <>
            <div className="surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static">
                                <img
                                    src="assets/images/blocks/logos/lynx-logo.svg"
                                    alt="Image"
                                    height="30"
                                />
                <h3 style={{ width: "500px", fontSize: '20px', marginLeft: '10px', marginTop: '30px' }}>Fleet Booking System</h3>

                <div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 px-6 lg:px-0 z-2 shadow-2 lg:shadow-none">
                    <section></section>
                    <div className="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
                        <Button
                            label="Login"
                            className="ml-3 p-button-outlined font-bold"
                            onClick={() => {
                                props.history.push("/login");
                            }}
                        />
                        <Button
                            label="Register"
                            onClick={() => {
                                props.history.push("/login");
                            }}
                            className="ml-3 p-button-outlined font-bold"
                        />
                    </div>
                </div>
            </div>
            <div className="relative p-6 overflow-hidden">
                <img
                    src="assets/images/blocks/hero/hero-2.jpg"
                    alt="hero-2"
                    className="absolute top-0 left-0 w-auto h-full block md:w-full"
                />

                <div className="text-center my-6 relative">
                    <div className="text-6xl text-white font-bold mb-1">
                        Passion for Customers
                    </div>
                    <div className="text-6xl text-primary font-bold mb-4">
                        We win when our customers win
                    </div>
                    <p
                        className="mt-0 mb-4 line-height-3 text-center mx-auto text-white"
                        style={{ maxWidth: "500px", fontSize: "18px" }}
                    >
                        Book carrier fleets from our trusted customers
                    </p>

                    {/* <Button label="Learn More" type="button" /> */}

                    <div className="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
                        <Button
                            label="Book now"
                            className="ml-3 p-button-outlined font-bold"
                            onClick={() => {
                                props.history.push("/login");
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="surface-section px-4 py-8 md:px-6 lg:px-8 text-center">
                <div className="grid">
                    <div className="col-12 md:col-4 mb-4 px-5">
                        <span
                            className="p-3 shadow-2 mb-3 inline-block surface-card"
                            style={{ borderRadius: "10px" }}
                        >
                            <i className="pi pi-desktop text-4xl text-blue-500"></i>
                        </span>
                        <div className="text-900 text-xl mb-3 font-medium">
                            API Support
                        </div>
                    </div>
                    <div className="col-12 md:col-4 mb-4 px-5">
                        <span
                            className="p-3 shadow-2 mb-3 inline-block surface-card"
                            style={{ borderRadius: "10px" }}
                        >
                            <i className="pi pi-check-circle text-4xl text-blue-500"></i>
                        </span>
                        <div className="text-900 text-xl mb-3 font-medium">
                            Easy to Use
                        </div>
                    </div>
                    <div className="col-12 md:col-4 mb-4 px-5">
                        <span
                            className="p-3 shadow-2 mb-3 inline-block surface-card"
                            style={{ borderRadius: "10px" }}
                        >
                            <i className="pi pi-globe text-4xl text-blue-500"></i>
                        </span>
                        <div className="text-900 text-xl mb-3 font-medium">
                            Fast & Global Support
                        </div>
                    </div>
                </div>
            </div>
            {/* <FleetFooter /> */}
        </>
    );
};

export default withRouter(LandingPage);
