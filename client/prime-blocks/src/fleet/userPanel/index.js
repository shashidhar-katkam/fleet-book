import React, { Component, useRef } from "react";
import NavFooter from "./navFooter";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import axios from "axios";
import { useState } from "react";
import "../../styles.css";
import "primeflex/primeflex.css";
import { DataView } from "primereact/dataview";
import { withRouter } from "react-router-dom";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { Avatar } from "primereact/avatar";
import truckimage from "./truck-image.png";
import { StyleClass } from "primereact/styleclass";
import { Ripple } from "primereact/ripple";
import { Badge } from "primereact/badge";
import DetailScreen from "../../components/application/detailscreen/DetailScreen";

import { DataViewLayoutOptions } from "primereact/dataview";

import { Dropdown } from "primereact/dropdown";

import { Calendar } from "primereact/calendar";
import { END_POINT } from "../../config";
import BookFleet from "./bookFleet";
import NavFooter2 from "./NavFooter2";

const UserPanel = (props) => {
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
        <NavFooter2>
            <UserPanel1 />
        </NavFooter2>
    );
};

const UserPanel1 = () => {
    const [source, setSource] = useState(null);
    const [loadType, setLoadType] = useState(null);
    const [destination, setDestination] = useState(null);
    const [rows, setRows] = useState([10, 10, 10]);
    const countries = [
        { name: "Paris", code: "PAR" },
        { name: "Berlin", code: "BER" },
        { name: "Madrid", code: "MAD" },
        { name: "London", code: "LON" },
        { name: "Rome", code: "ROM" },
        { name: "Amsterdam", code: "AMS" },
        { name: "Athens", code: "ATH" },
        { name: "Lisbon", code: "LIS" },
        { name: "Vienna", code: "VIE" },
        { name: "Dublin", code: "DUB" },
        // Add more cities as needed
    ];

    const [loading, setLoading] = useState(false);
    const [date, setDate] = useState(null);

    const [data, setData] = useState(false);

    const [selectedTruck, setSelectedTruck] = useState(null);
    const [showBooking, setShowBooking] = useState(false);
    const onSubmit = async () => {
        // setLoading(true);
        // setTimeout(() => {
        //     setLoading(false);
        //     setData(true);
        // }, 2000);
        //call API here

        try {
            const url = `${END_POINT}bookings/get-fleet-for-booking`;
            const response = await axios.post(url, {});
            if (response?.data?.data) {
                setData(response?.data?.data);
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    const showFleetBooking = (product) => {
        setSelectedTruck(product);
        setShowBooking(true);

        debugger;
    };
    //     QuickCargo.
    // Speedy Shipments.
    // Express Haulers.
    // Superior Shipping.
    // Dynamic Delivery.
    // Rapid Transports.
    // Cargo Kings.
    // SmartShip Logistics.

    // const products = [
    //     {
    //         name: "Quick Cargo",
    //         compartments: 3,
    //         fuelType: "Diesel",
    //         load: 25,
    //         location: "Berlin",
    //         age: "5y",
    //         tracking: true,
    //     },
    //     {
    //         name: "Speedy shipments",
    //         compartments: 2,
    //         fuelType: "Electric",
    //         load: 25,
    //         location: "London",
    //         age: "4y",
    //         tracking: false,
    //     },
    //     {
    //         name: "Express Haulers",
    //         compartments: 3,
    //         fuelType: "Diesel",
    //         load: 25,
    //         location: "London",
    //         age: "3y",
    //         tracking: false,
    //     },
    //     {
    //         name: "Superior Shipping",
    //         compartments: 2,
    //         fuelType: "Hybrid",
    //         load: 25,
    //         location: "Paris",
    //         age: "5y",
    //         tracking: true,
    //     },
    //     {
    //         name: "Dynamic Delivery",
    //         compartments: 2,
    //         fuelType: "Hybrid",
    //         load: 25,
    //         location: "Paris",
    //         age: "5y",
    //         tracking: true,
    //     },
    //     {
    //         name: "Rapid transporters",
    //         compartments: 2,
    //         fuelType: "Hybrid",
    //         load: 25,
    //         location: "Paris",
    //         age: "5y",
    //         tracking: true,
    //     },
    //     {
    //         name: "Cargo king",
    //         compartments: 2,
    //         fuelType: "Hybrid",
    //         load: 25,
    //         location: "Paris",
    //         age: "5y",
    //         tracking: true,
    //     },
    // ];

    const itemTemplate = (product) => {
        return (
            <div className="col-12">
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <img
                        className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
                        src={truckimage}
                        alt={product.name}
                        style={{ width: "30px" }}
                    />
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <div className="text-2xl font-bold text-900">
                                {product.name}
                            </div>
                            {/* <Rating value={product.rating} readOnly cancel={false}></Rating> */}
                            <div className="flex align-items-center gap-3">
                                <Avatar
                                    label={
                                        "Compartments " + product.campartments
                                    }
                                    style={{
                                        backgroundColor: "#9c27b0",
                                        width: "130px",
                                        color: "#ffffff",
                                    }}
                                />
                                <Avatar
                                    label={product.fuelType}
                                    style={{
                                        backgroundColor:
                                            product.fuelType === "Diesel"
                                                ? "grey"
                                                : "green",
                                        width: "70px",
                                        color: "#ffffff",
                                    }}
                                />
                                <Avatar
                                    label={`${product.load || 20} tons`}
                                    style={{
                                        backgroundColor: "orange",
                                        width: "50px",
                                        color: "#ffffff",
                                    }}
                                />
                                <Avatar
                                    label={product.age + "yrs old"}
                                    style={{ width: "50px", color: "#000000" }}
                                />
                            </div>
                            {/* <div className="flex align-items-center gap-3">
                           <span className='pi pi-map-marker'> Paris </span>
                            </div> */}
                        </div>
                        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                            <Button
                                icon="pi pi-chevron-right"
                                className="p-button-rounded"
                                disabled={
                                    product.inventoryStatus === "OUTOFSTOCK"
                                }
                                onClick={() => {
                                    showFleetBooking(product);
                                }}
                            ></Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center" style={{fontSize:'large'}}>
                    {/* <img
                        alt={option.name}
                        src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
                        className={`mr-2 flag flag-${option.code.toLowerCase()}`}
                        style={{ width: "18px" }}
                    /> */}
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
            <div className="p-card p-5">
                <h2>New Booking</h2>
                <div>
                    <div className="flex container">
                        <div className="select-src-dst">
                            <div
                                className="card flex justify-content-center"
                                style={{ margin: "10px" }}
                            >
                                <Dropdown
                                    value={source}
                                    onChange={(e) => setSource(e.value)}
                                    options={countries}
                                    optionLabel="name"
                                    placeholder="Source City"
                                    filter
                                    valueTemplate={selectedCountryTemplate}
                                    itemTemplate={countryOptionTemplate}
                                    className="w-full md:w-20rem md:h-4rem"
                                />
                            </div>
                            <div
                                className="card flex justify-content-center"
                                style={{ margin: "10px" }}
                            >
                                <Dropdown
                                    value={destination}
                                    onChange={(e) => setDestination(e.value)}
                                    options={countries}
                                    optionLabel="name"
                                    placeholder="Destination City"
                                    filter
                                    valueTemplate={selectedCountryTemplate}
                                    itemTemplate={countryOptionTemplate}
                                    className="w-full md:w-20rem md:h-4rem"
                                />
                            </div>
                            <div
                                className="card flex justify-content-center"
                                style={{ margin: "10px" }}
                            >
                                <Dropdown
                                    value={loadType}
                                    onChange={(e) => setLoadType(e.value)}
                                    options={[
                                        { name: "full load", code: "" },
                                        { name: "partial load", code: "" },
                                    ]}
                                    optionLabel="name"
                                    placeholder="Load type"
                                    filter
                                    valueTemplate={selectedCountryTemplate}
                                    itemTemplate={countryOptionTemplate}
                                    className="w-full md:w-18rem md:h-4rem"
                                />
                            </div>
                            <div className="card flex justify-content-center">
                                <Calendar
                                    value={date}
                                    onChange={(e) => setDate(e.value)}
                                />
                            </div>
                            <div
                                className="card flex flex-wrap justify-content-center gap-3"
                                style={{ margin: "10px" }}
                            >
                                <Button
                                    label="Submit"
                                    icon="pi pi-check"
                                    loading={loading}
                                    onClick={onSubmit}
                                />
                            </div>
                        </div>
                        <br />
                        <br />
                    </div>
                    <br />
                    <br />
                    <br />
                    <div 
                    // style={{ width: "60%", marginLeft: "10%" }}
                    >
                        {data && (
                            <div className="card">
                                <DataView
                                    value={data}
                                    itemTemplate={itemTemplate}
                                />
                            </div>
                        )}
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
                    {showBooking && (
                        <BookFleet
                            selectedTruck={selectedTruck}
                            onCancel={() => {
                                setShowBooking(false);
                            }}
                        />
                    )}
                </div>
            </div>
        </>
    );
};

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

export default withRouter(UserPanel);
