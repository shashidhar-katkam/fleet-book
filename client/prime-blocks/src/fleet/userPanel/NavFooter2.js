import React, { Component, useRef } from "react";
import "../../styles.css";
import "primeflex/primeflex.css";

import { withRouter } from "react-router-dom";

import { StyleClass } from "primereact/styleclass";
import { Ripple } from "primereact/ripple";

const NavFooter2 = (props) => {
    const btnRef33 = useRef(null);
    const btnRef34 = useRef(null);
    const btnRef35 = useRef(null);
    const btnRef36 = useRef(null);
    const btnRef37 = useRef(null);
    const btnRef38 = useRef(null);
    const btnRef39 = useRef(null);
    const btnRef40 = useRef(null);
    const btnRef41 = useRef(null);
    const btnRef42 = useRef(null);
    const btnRef43 = useRef(null);
    const btnRef44 = useRef(null);
    const btnRef45 = useRef(null);
    const btnRef46 = useRef(null);
    const btnRef47 = useRef(null);
    const btnRef48 = useRef(null);
    const btnRef49 = useRef(null);
    const btnRef50 = useRef(null);
    const btnRef51 = useRef(null);
    const btnRef52 = useRef(null);
    const btnRef53 = useRef(null);
    const btnRef54 = useRef(null);
    const btnRef55 = useRef(null);
    const btnRef56 = useRef(null);
    const btnRef57 = useRef(null);
    const btnRef58 = useRef(null);
    const btnRef59 = useRef(null);

    return (
        <div>
            <div
                className="min-h-screen flex relative lg:static"
                style={{
                    backgroundImage:
                        "linear-gradient(60deg, #29323c 0%, #485563 100%)",
                }}
            >
                <div
                    id="app-sidebar-8"
                    className="h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 select-none animation-duration-300 animation-ease-in-out border-white-alpha-10"
                    style={{
                        width: "280px",
                        backgroundImage:
                            "linear-gradient(60deg, #29323c 0%, #2f3844 100%)",
                    }}
                >
                    <div className="flex flex-column h-full">
                        <div
                            className="flex align-items-center px-5 flex-shrink-0"
                            style={{ height: "60px" }}
                        >
                            <img
                                src="assets/images/blocks/logos/lynx-logo.svg"
                                alt="Image"
                                height="30"
                            />
                        </div>
                        <div className="overflow-y-auto">
                            <ul className="list-none p-3 m-0">
                                <li>
                                    <StyleClass
                                        nodeRef={btnRef33}
                                        selector="@next"
                                        enterClassName="hidden"
                                        enterActiveClassName="slidedown"
                                        leaveToClassName="hidden"
                                        leaveActiveClassName="slideup"
                                    >
                                        <div
                                            ref={btnRef33}
                                            className="p-ripple p-3 flex align-items-center justify-content-between text-gray-500 cursor-pointer"
                                        >
                                            <span className="font-medium">
                                                FAVORITES
                                            </span>
                                            <i className="pi pi-chevron-down"></i>
                                            <Ripple />
                                        </div>
                                    </StyleClass>
                                    <ul className="list-none p-0 m-0 overflow-hidden">
                                        <li>
                                            <a
                                                className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors"
                                                style={{
                                                    borderRadius: "30px",
                                                }}
                                                onClick={() => {
                                                    props.history.push(
                                                        "/user-panel"
                                                    );
                                                }}
                                            >
                                                <i className="pi pi-home mr-2"></i>
                                                <span className="font-medium">
                                                    New booking
                                                </span>
                                                <Ripple />
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors"
                                                style={{
                                                    borderRadius: "30px",
                                                }}
                                                onClick={() => {
                                                    props.history.push(
                                                        "/customer-bookings"
                                                    );
                                                }}
                                            >
                                                <i className="pi pi-bookmark mr-2"></i>
                                                <span className="font-medium">
                                                    Bookings
                                                </span>
                                                <Ripple />
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a
                                        className="p-ripple flex align-items-center cursor-pointer p-3 hover:bg-bluegray-700 text-gray-300 transition-duration-150 transition-colors"
                                        style={{ borderRadius: "30px" }}
                                    >
                                        <i className="pi pi-sign-out mr-2"></i>
                                        <span className="font-medium">
                                            Sign Out
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                            </ul>
                            <StyleClass
                                nodeRef={btnRef37}
                                selector="@prev"
                                enterClassName="hidden"
                                enterActiveClassName="slidedown"
                                leaveToClassName="hidden"
                                leaveActiveClassName="slideup"
                            >
                                <a
                                    ref={btnRef37}
                                    className="p-ripple m-3 px-3 py-2 flex align-items-center hover:bg-bluegray-700 text-gray-300 cursor-pointer text-gray-300
                        transition-duration-150 transition-colors"
                                    style={{ borderRadius: "30px" }}
                                >
                                    <img
                                        src="assets/images/blocks/avatars/circle/avatar-f-1.png"
                                        className="mr-2"
                                        style={{
                                            width: "28px",
                                            height: "28px",
                                        }}
                                    />
                                    <span className="font-medium">
                                        Amy Elsner
                                    </span>
                                    <i className="pi pi-chevron-up ml-auto"></i>
                                    <Ripple />
                                </a>
                            </StyleClass>
                        </div>
                    </div>
                </div>
                <div className="min-h-screen flex flex-column relative flex-auto">
                    <div
                        className="flex justify-content-between align-items-center px-5 border-bottom-1 relative lg:static border-white-alpha-10"
                        style={{ height: "60px" }}
                    >
                        <div className="flex">
                            <StyleClass
                                nodeRef={btnRef38}
                                selector="#app-sidebar-8"
                                enterClassName="hidden"
                                enterActiveClassName="fadeinleft"
                                leaveToClassName="hidden"
                                leaveActiveClassName="fadeoutleft"
                                hideOnOutsideClick
                            >
                                <a
                                    ref={btnRef38}
                                    className="p-ripple cursor-pointer block lg:hidden text-gray-300 mr-3"
                                >
                                    <i className="pi pi-bars text-4xl"></i>
                                    <Ripple />
                                </a>
                            </StyleClass>
                        </div>
                        <StyleClass
                            nodeRef={btnRef39}
                            selector="@next"
                            enterClassName="hidden"
                            enterActiveClassName="fadein"
                            leaveToClassName="hidden"
                            leaveActiveClassName="fadeout"
                            hideOnOutsideClick
                        >
                            <a
                                ref={btnRef39}
                                className="p-ripple cursor-pointer block lg:hidden text-gray-300"
                            >
                                <i className="pi pi-ellipsis-v text-2xl"></i>
                                <Ripple />
                            </a>
                        </StyleClass>
                    </div>
                    <div className="p-5 flex flex-column flex-auto">
                        {props.children}
                        <div className="border-2 border-dashed border-round flex-auto border-white-alpha-10"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(NavFooter2);
