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
import FleetFooter from "../fleetFooter";

const NavFooter = (props) => {
    const btnRef1 = useRef(null);
    const btnRef2 = useRef(null);

    return (
        <>
            <div className="surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static">
                <h3 style={{ width: "140px" }}>Fleet Booking</h3>

                <div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 px-6 lg:px-0 z-2 shadow-2 lg:shadow-none">
                    <section></section>
                    <ul className="list-none p-0 m-0 flex lg:align-items-center text-900 select-none flex-column lg:flex-row cursor-pointer">
                        <li className="relative">
                            <StyleClass
                                nodeRef={btnRef1}
                                selector="@next"
                                enterClassName="hidden"
                                enterActiveClassName="scalein"
                                leaveToClassName="hidden"
                                leaveActiveClassName="fadeout"
                                hideOnOutsideClick
                            >
                                <a
                                    ref={btnRef1}
                                    className="p-ripple flex px-0 lg:px-5 py-3 align-items-center hover:text-blue-600 font-medium transition-colors transition-duration-150 w-full"
                                >
                                    <span>Trucks</span>
                                    <i className="pi pi-chevron-down ml-auto lg:ml-3"></i>
                                    <Ripple />
                                </a>
                            </StyleClass>
                            <ul className="list-none p-0 m-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem">
                                <li>
                                    <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-list text-2xl mr-2 text-blue-600"></i>
                                        <span>Master</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-shield text-2xl mr-2 text-blue-600"></i>
                                        <span>Bookings</span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li>
                                    <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 w-full">
                                        <i className="pi pi-users text-2xl mr-2 text-blue-600"></i>
                                        <span>Transactions</span>
                                        <Ripple />
                                    </a>
                                </li>
                                {/* <li className="relative">
                                    <StyleClass
                                        nodeRef={btnRef2}
                                        selector="@next"
                                        enterClassName="hidden"
                                        enterActiveClassName="scalein"
                                        leaveToClassName="hidden"
                                        leaveActiveClassName="fadeout"
                                        hideOnOutsideClick={true}
                                    >
                                        <a
                                            ref={btnRef2}
                                            className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 w-full"
                                        >
                                            <i className="pi pi-question-circle text-2xl mr-2 text-blue-600"></i>
                                            <span>Support</span>
                                            <i className="pi pi-chevron-down ml-auto lg:-rotate-90"></i>
                                            <Ripple />
                                        </a>
                                    </StyleClass>
                                    <ul className="list-none py-3 pl-3 pr-0 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                                        <li>
                                            <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 w-full">
                                                <i className="pi pi-cloud mr-2"></i>
                                                <span className="font-medium">
                                                    Help Center
                                                </span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li className="relative">
                                            <a className="p-ripple flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 w-full">
                                                <i className="pi pi-question-circle mr-2"></i>
                                                <span className="font-medium">
                                                    Faq
                                                </span>
                                                <Ripple />
                                            </a>
                                        </li>
                                    </ul>
                                </li> */}
                            </ul>
                        </li>
                        <li>
                            <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                                <span>New Bookings</span>
                                <Ripple />
                            </a>
                        </li>
                        {/* <li>
                            <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                                <span>Resources</span>
                                <Ripple />
                            </a>
                        </li>
                        <li>
                            <a className="p-ripple flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150">
                                <span>Pricing</span>
                                <Ripple />
                            </a>
                        </li> */}
                    </ul>
                    <div className="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
                      
                    </div>
                </div>
            </div>
            <div style={{ minHeight: "calc(100vh - 110px)" }}>
                {props.children}
            </div>
            <FleetFooter />
        </>
    );
};

export default withRouter(NavFooter);
