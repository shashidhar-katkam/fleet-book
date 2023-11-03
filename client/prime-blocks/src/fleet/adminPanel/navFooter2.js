import React, { Component, useRef } from "react";
import "../../styles.css";
import "primeflex/primeflex.css";

import { withRouter } from "react-router-dom";

import { StyleClass } from "primereact/styleclass";
import { Ripple } from "primereact/ripple";

const NavFooter2 = (props) => {
    const btnRef33 = useRef(null);
    const btnRef37 = useRef(null);
    const btnRef38 = useRef(null);
    const btnRef39 = useRef(null);

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
                                                        "/truck-ingestion"
                                                    );
                                                }}
                                            >
                                                <i className="pi pi-bookmark mr-2"></i>
                                                <span className="font-medium">
                                                    Truck Ingestion
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
                                                        "/truck-management"
                                                    );
                                                }}
                                            >
                                                <i className="pi pi-home mr-2"></i>
                                                <span className="font-medium">
                                                    Truck Management
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
                                        Truck Owner
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
                        {/* <div className="border-2 border-dashed border-round flex-auto border-white-alpha-10"></div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(NavFooter2);
