import React, { Component, useRef } from "react";
import NavFooter from "./navFooter";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useState } from "react";
import "../../styles.css";
import 'primeflex/primeflex.css';
import { DataView } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { Avatar } from 'primereact/avatar';
import truckimage from './truck-image.png';
import { StyleClass } from "primereact/styleclass";
import { Ripple } from "primereact/ripple";
import { Badge } from "primereact/badge";
import DetailScreen from "../../components/application/detailscreen/DetailScreen";

import { DataViewLayoutOptions } from 'primereact/dataview';
        

import { Dropdown } from 'primereact/dropdown';

import { Calendar } from 'primereact/calendar';


const UserPanel = () => { 
    const btnRef3 = useRef(null);

    const btnRef1 = useRef(null);
    const btnRef2 = useRef(null);
    const btnRef4 = useRef(null);
    const btnRef5 = useRef(null);
    const btnRef6 = useRef(null);
    const btnRef7 = useRef(null);
    const btnRef8 = useRef(null);
    const btnRef9 = useRef(null);
    const btnRef10 = useRef(null);
    const btnRef11 = useRef(null);
    const btnRef12 = useRef(null);
    const btnRef13 = useRef(null);
    const btnRef14 = useRef(null);
    const btnRef15 = useRef(null);
    const btnRef16 = useRef(null);
    const btnRef17 = useRef(null);
    const btnRef18 = useRef(null);
    const btnRef19 = useRef(null);
    const btnRef20 = useRef(null);
    const btnRef21 = useRef(null);
    const btnRef22 = useRef(null);
    const btnRef23 = useRef(null);
    const btnRef24 = useRef(null);
    const btnRef25 = useRef(null);
    const btnRef26 = useRef(null);
    const btnRef27 = useRef(null);
    const btnRef28 = useRef(null);
    const btnRef29 = useRef(null);
    const btnRef30 = useRef(null);
    const btnRef31 = useRef(null);
    const btnRef32 = useRef(null);
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
                                                >
                                                    <i className="pi pi-bookmark mr-2"></i>
                                                    <span className="font-medium">
                                                        Bookings
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li>
                                            <li>
                                                {/* <StyleClass
                                                    nodeRef={btnRef34}
                                                    selector="@next"
                                                    enterClassName="hidden"
                                                    enterActiveClassName="slidedown"
                                                    leaveToClassName="hidden"
                                                    leaveActiveClassName="slideup"
                                                >
                                                    <a
                                                        ref={btnRef34}
                                                        className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors"
                                                        style={{
                                                            borderRadius:
                                                                "30px",
                                                        }}
                                                    >
                                                        <i className="pi pi-chart-line mr-2"></i>
                                                        <span className="font-medium">
                                                            Reports
                                                        </span>
                                                        <i className="pi pi-chevron-down ml-auto"></i>
                                                        <Ripple />
                                                    </a>
                                                </StyleClass>
                                                <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                    <li>
                                                        <StyleClass
                                                            nodeRef={btnRef35}
                                                            selector="@next"
                                                            enterClassName="hidden"
                                                            enterActiveClassName="slidedown"
                                                            leaveToClassName="hidden"
                                                            leaveActiveClassName="slideup"
                                                        >
                                                            <a
                                                                ref={btnRef35}
                                                                className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors"
                                                                style={{
                                                                    borderRadius:
                                                                        "30px",
                                                                }}
                                                            >
                                                                <i className="pi pi-chart-line mr-2"></i>
                                                                <span className="font-medium">
                                                                    Revenue
                                                                </span>
                                                                <i className="pi pi-chevron-down ml-auto"></i>
                                                                <Ripple />
                                                            </a>
                                                        </StyleClass>
                                                        <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                                            <li>
                                                                <a
                                                                    className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors"
                                                                    style={{
                                                                        borderRadius:
                                                                            "30px",
                                                                    }}
                                                                >
                                                                    <i className="pi pi-table mr-2"></i>
                                                                    <span className="font-medium">
                                                                        View
                                                                    </span>
                                                                    <Ripple />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors"
                                                                    style={{
                                                                        borderRadius:
                                                                            "30px",
                                                                    }}
                                                                >
                                                                    <i className="pi pi-search mr-2"></i>
                                                                    <span className="font-medium">
                                                                        Search
                                                                    </span>
                                                                    <Ripple />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a
                                                            className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors"
                                                            style={{
                                                                borderRadius:
                                                                    "30px",
                                                            }}
                                                        >
                                                            <i className="pi pi-chart-line mr-2"></i>
                                                            <span className="font-medium">
                                                                Expenses
                                                            </span>
                                                            <Ripple />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li> */}
                                            {/* <li> */}
                                                {/* <a
                                                    className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors"
                                                    style={{
                                                        borderRadius: "30px",
                                                    }}
                                                >
                                                    <i className="pi pi-users mr-2"></i>
                                                    <span className="font-medium">
                                                        Team
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
                                                >
                                                    <i className="pi pi-comments mr-2"></i>
                                                    <span className="font-medium">
                                                        Messages
                                                    </span>
                                                    <span
                                                        className="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle"
                                                        style={{
                                                            minWidth: "1.5rem",
                                                            height: "1.5rem",
                                                        }}
                                                    >
                                                        3
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
                                                >
                                                    <i className="pi pi-calendar mr-2"></i>
                                                    <span className="font-medium">
                                                        Calendar
                                                    </span>
                                                    <Ripple />
                                                </a>
                                            </li> */}
                                            {/* <li> */}
                                                <a
                                                    className="p-ripple flex align-items-center cursor-pointer p-3 text-gray-300 hover:bg-bluegray-700 transition-duration-150 transition-colors"
                                                    style={{
                                                        borderRadius: "30px",
                                                    }}
                                                >
                                                    <i className="pi pi-cog mr-2"></i>
                                                    <span className="font-medium">
                                                        Settings
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

                            {/* <ul
                                className="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static px-3 py-3 lg:py-0 mr-3 lg:mr-0"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(60deg, #29323c 0%, #485563 100%)",
                                    borderRadius: "30px",
                                    display: 'hidden'
                                }}
                            >
                                <li className="mr-0 lg:mr-3">
                                    <a
                                        className="p-ripple flex p-3 lg:p-2 align-items-center text-gray-300 hover:bg-bluegray-700 font-medium cursor-pointer
                            transition-duration-150 transition-colors"
                                        style={{ borderRadius: "30px" }}
                                    >
                                        <i className="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
                                        <span className="block lg:hidden font-medium">
                                            Inbox
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="mr-0 lg:mr-3">
                                    <a
                                        className="p-ripple flex p-3 lg:p-2  align-items-center text-gray-300 hover:bg-bluegray-700 font-medium cursor-pointer
                            transition-duration-150 transition-colors"
                                        style={{ borderRadius: "30px" }}
                                    >
                                        <i
                                            className="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0"
                                            severity="danger"
                                        >
                                            <Badge severity="danger" />
                                        </i>
                                        <span className="block lg:hidden font-medium">
                                            Notifications
                                        </span>
                                        <Ripple />
                                    </a>
                                </li>
                                <li className="border-top-1 lg:border-top-none lg:mt-0 mt-2 lg:pt-0 pt-2 border-white-alpha-10">
                                    <a
                                        className="p-ripple flex p-3 lg:p-2  align-items-center hover:bg-bluegray-700 font-medium cursor-pointer
                            transition-duration-150 transition-colors"
                                        style={{ borderRadius: "30px" }}
                                    >
                                        <img
                                            src="assets/images/blocks/avatars/circle/avatar-f-1.png"
                                            className="mr-3 lg:mr-0"
                                            style={{
                                                width: "32px",
                                                height: "32px",
                                            }}
                                        />
                                        <div className="block lg:hidden">
                                            <div className="text-gray-300 font-medium">
                                                Josephine Lillard
                                            </div>
                                            <span className="text-gray-500 font-medium text-sm">
                                                Marketing Specialist
                                            </span>
                                        </div>
                                        <Ripple />
                                    </a>
                                </li>
                            </ul> */}
                        </div>
                        <div className="p-5 flex flex-column flex-auto">
                          <UserPanel1 />
                            <div className="border-2 border-dashed border-round flex-auto border-white-alpha-10"></div>
                        </div>
                    </div>
                </div>
            </div>
    );
}



const UserPanel1 = () => { 
    const [source, setSource] = useState(null);
    const [loadType, setLoadType] = useState(null);
    const [destination, setDestination] = useState(null);
    const [rows, setRows] = useState([10, 10, 10]);
   const countries = [
    { name: 'Paris', code: 'PAR' },
    { name: 'Berlin', code: 'BER' },
    { name: 'Madrid', code: 'MAD' },
    { name: 'London', code: 'LON' },
    { name: 'Rome', code: 'ROM' },
    { name: 'Amsterdam', code: 'AMS' },
    { name: 'Athens', code: 'ATH' },
    { name: 'Lisbon', code: 'LIS' },
    { name: 'Vienna', code: 'VIE' },
    { name: 'Dublin', code: 'DUB' },
    // Add more cities as needed
];
 

 const [loading, setLoading] = useState(false);
 const [date, setDate] = useState(null);

 const [data, setData] = useState(false);
    const onSubmit = () => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setData(true);
        }, 2000);

        //call API here
    };

//     QuickCargo.
// Speedy Shipments.
// Express Haulers.
// Superior Shipping.
// Dynamic Delivery.
// Rapid Transports.
// Cargo Kings.
// SmartShip Logistics.

    const products = [
        {
           name: 'Quick Cargo',
           compartments: 3,
           fuelType: 'Diesel',
           load: 25,
           location: 'Berlin',
           age: '5y',
           tracking: true
        },
        {
           name: 'Speedy shipments',
           compartments: 2,
           fuelType: 'Electric',
           load: 25,
           location: 'London',
           age: '4y',
           tracking: false
        },
        {
           name: 'Express Haulers',
           compartments: 3,
           fuelType: 'Diesel',
           load: 25,
           location: 'London',
           age: '3y',
           tracking: false
        },
        {
           name: 'Superior Shipping',
           compartments: 2,
           fuelType: 'Hybrid',
           load: 25,
           location: 'Paris',
           age: '5y',
           tracking: true
        },
        {
           name: 'Dynamic Delivery',
           compartments: 2,
           fuelType: 'Hybrid',
           load: 25,
           location: 'Paris',
           age: '5y',
           tracking: true
        },
        {
           name: 'Rapid transporters',
           compartments: 2,
           fuelType: 'Hybrid',
           load: 25,
           location: 'Paris',
           age: '5y',
           tracking: true
        },
        {
           name: 'Cargo king',
           compartments: 2,
           fuelType: 'Hybrid',
           load: 25,
           location: 'Paris',
           age: '5y',
           tracking: true
        },
    ];

    const itemTemplate = (product) => {
        return (
            <div className="col-12">
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={truckimage} alt={product.name} style={{width:'30px'}}/>
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <div className="text-2xl font-bold text-900">{product.name}</div>
                            {/* <Rating value={product.rating} readOnly cancel={false}></Rating> */}
                            <div className="flex align-items-center gap-3">
                          <Avatar label={"Compartments " + product.compartments} style={{ backgroundColor: '#9c27b0', width: '130px', color: '#ffffff' }} />
                          <Avatar label={product.fuelType} style={{ backgroundColor: product.fuelType === 'Diesel' ? 'grey' : 'green', width: '70px', color: '#ffffff' }} />
                          <Avatar label={product.load} style={{ backgroundColor: 'orange', width: '50px', color: '#ffffff' }} />
                          <Avatar label={product.age + ' old'} style={{ width: '50px', color: '#000000' }} />
                           </div>
                            {/* <div className="flex align-items-center gap-3">
                           <span className='pi pi-map-marker'> Paris </span>
                            </div> */}
                        </div>
                        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                            <Button icon='pi pi-chevron-right' className="p-button-rounded" disabled={product.inventoryStatus === 'OUTOFSTOCK'}></Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option) => {
        return (
            <div className="flex align-items-center">
                {/* <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} /> */}
                <div>{option.name}</div>
            </div>
        );
    };

    return (
      <>
      <div>
      <div className='flex container'>
        <div className='select-src-dst'>
        <div className="card flex justify-content-center" style={{margin: '10px'}}>
            <Dropdown value={source} onChange={(e) => setSource(e.value)} options={countries} optionLabel="name" placeholder="Source City" 
                filter valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="w-full md:w-20rem md:h-4rem" />
        </div>    
        <div className="card flex justify-content-center" style={{margin: '10px'}} >
            <Dropdown value={destination} onChange={(e) => setDestination(e.value)} options={countries} optionLabel="name" placeholder="Destination City" 
                filter valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="w-full md:w-20rem md:h-4rem" />
        </div>
        <div className="card flex justify-content-center" style={{margin: '10px'}} >
            <Dropdown value={loadType} onChange={(e) => setLoadType(e.value)} options={[{name: "full load", code: ""},{name: "partial load", code: ""}]} optionLabel="name" placeholder="Load type" 
                filter valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="w-full md:w-18rem md:h-4rem" />
        </div>
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={(e) => setDate(e.value)} />
        </div>
        <div className="card flex flex-wrap justify-content-center gap-3" style={{margin: '10px'}}>
            <Button label="Submit" icon="pi pi-check" loading={loading} onClick={onSubmit} />
        </div>
        </div>
        <br />
        <br />

        </div>
        <br/>
        <br/>
        <br/>
        <div style={{width:'60%', marginLeft: '10%'}}>
       
       {data && (
        <div className="card">
            <DataView value={products} itemTemplate={itemTemplate} />
        </div>)}
        </div>
                        {/* <DataView
                            value={products}
                            paginator={true}
                            rows={rows[1]}
                            rowsPerPageOptions={[10, 25, 50]}
                            paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                            itemTemplate={listItemTemplate}
                        /> */}
        {/* <DetailScreen /> */}
        </div>
      </>)
}


const bookingModal = () => {
  
return (
  <div>
   <span className="p-input-icon-left">
    <i className="pi-map-marker" />
    <InputText placeholder="" />
   </span>   
   <span className="p-input-icon-left">
    <i className="pi-map-marker" />
    <InputText placeholder="Search" />
   </span>   
   <span className="p-input-icon-left">
    <i className="pi-map-marker" />
    <InputText placeholder="Search" />
   </span>   
  </div>
)

}


// const UserPanel = () => { 
//     const [sourceCity, setSourceCity] = useState();
//     const [destinationCity, setDestinationCity] = useState();

//     const onSourceCityChange = (e) => {
//       console.log(e.target.value);
//       setSourceCity(e.target.value);
//     }

//     const onDestinationChange = (e) => {
//       console.log(e.target.value);
//       setDestinationCity(e.target.value)
//     }
//         return (
//             <NavFooter>
//                <div class='container'>
//                   <div class="select-src-dst">
//                     <div>
//                     <InputText placeholder="Enter source city" onChange={(e) => onSourceCityChange(e)} />
//                     <InputText placeholder="Enter destination city" onChange={(e) => onDestinationChange(e)}/>
//                     <Button label="submit" onClick={submit} />
//                     </div>
//                 </div>
//                </div>
//             </NavFooter>
//         );
// }

export default UserPanel;