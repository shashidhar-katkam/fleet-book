import React, { Component } from "react";
import { END_POINT } from "../../config";
import axios from "axios";
import NavFooter2 from "./NavFooter2";
import "../../styles.css";
import "primeflex/primeflex.css";
import { DataView } from "primereact/dataview";
import { Avatar } from "primereact/avatar";
import truckimage from "./truck-image.png";

export default class Bookings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            bookings: [],
        };
    }

    getTrucks = async () => {
        try {
            const url = `${END_POINT}bookings/customer`;
            const dataToSend = {};
            const response = await axios.post(url, dataToSend);
            console.log(response?.data?.data, "rs");
            if (response?.data) {
                this.setState({
                    bookings: response?.data?.data,
                });
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    componentDidMount() {
        this.getTrucks();
    }

    itemTemplate = (product) => {
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
                                    label={`${product.load || 20} load`}
                                    style={{
                                        backgroundColor: "orange",
                                        width: "50px",
                                        color: "#ffffff",
                                    }}
                                />
                                <Avatar
                                    label={product.age + " old"}
                                    style={{ width: "50px", color: "#000000" }}
                                />
                            </div>
                            {/* <div className="flex align-items-center gap-3">
                           <span className='pi pi-map-marker'> Paris </span>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    render() {
        console.log(this.state);
        const { bookings } = this.state;
        return (
            <NavFooter2>
                <div className="p-card p-5">
                    <h2>User Bookings</h2>
                    <div>
                        {bookings && (
                            <div className="card p-5">
                                <DataView
                                    value={bookings}
                                    itemTemplate={this.itemTemplate}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </NavFooter2>
        );
    }
}
