import React from "react";

import { Button } from "primereact/button";
import { withRouter } from "react-router-dom";

const LandingPage = (props) => {
    return (
        <>
            <div className="surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static">
                <span
                    onClick={() => {
                        props.history.push("/");
                    }}
                >
                    <svg
                        width="222"
                        height="30"
                        viewBox="0 0 222 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clipPath="url(#clip0)">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M199.504 0H218.666L200.611 26.5598L191.061 12.421L199.504 0ZM163.682 0.000226394H158.666L179.085 30.0385L155.999 63.9998H161L183.904 30.0957L163.682 0.000226394ZM191.085 47.6917L202.171 64H221.333L200.647 33.5701L191.085 47.6917Z"
                                fill="white"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M100 0H116L140 36V0H156V60V64H140L116 28V64H100V4V0Z"
                                fill="white"
                            />
                            <path
                                d="M15.9999 50.5726V0H0V63.9998H36.1081L45.3332 50.5726H15.9999Z"
                                fill="white"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M99.9996 0H80.0225L67.4931 17.6797L76.4038 33.295L99.9996 0ZM73.5938 37.2601H58.6665L56.414 33.3129L34.6665 63.9998H54.6437L73.5938 37.2601Z"
                                fill="white"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M52.304 0H32.3005L53.5663 37.191H53.7045L34.6665 64H54.6472L73.6333 37.2641H73.5235L73.482 37.191H73.5698L52.304 0Z"
                                fill="white"
                            />
                            <path
                                d="M177.821 0H158.694L179.064 30.0957L155.993 64H175.173L198.298 30.0957L177.821 0Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect
                                    width="221.333"
                                    height="64"
                                    fill="white"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                </span>
                <h3
                    style={{
                        width: "500px",
                        fontSize: "20px",
                        marginLeft: "10px",
                        marginTop: "30px",
                    }}
                >
                    Fleet Booking System
                </h3>

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
