import React, { Component } from "react";
import { Tag } from "primereact/tag";
import { InputSwitch } from "primereact/inputswitch";
import { Dropdown } from "primereact/dropdown";
import { Dialog } from "primereact/dialog";
import { END_POINT } from "../../config";
import axios from "axios";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";

import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";

import { Calendar } from "primereact/calendar";
import { InputNumber } from "primereact/inputnumber";
import { europeCities } from "../../constants";
import { RadioButton } from "primereact/radiobutton";

export default class BlockingTruckInternal extends Component {
    constructor(props) {
        super(props);

        this.toast = React.createRef();
        this.state = {
            selectedTruck: this.props.selectedTruck,

            booking: {
                truckModeForBooking: "full",
                fromDate: null,
                toDate: null,
                capacity: null,
                fromLocation: null,
                toLocation: null,
                allowExternalBooking: false,
                liveTrackingEnabled: false,
            },
        };
    }
    blockTruck = async () => {
        const { booking, selectedTruck } = this.state;

        const payload = {
            truckId: selectedTruck._id,
            ...booking,
        };

        try {
            const url = `${END_POINT}/bookings/book`;

            const response = await axios.post(url, payload);
            if (response?.data) {
                this.toast.current.show({
                    severity: "success",
                    ///summary: "Sticky",
                    detail: "Fleet booked successfully",
                    //sticky: true,
                });
                this.props.onCancel();
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
        console.log(payload, "payload");
    };

    render() {
        const { booking, selectedTruck } = this.state;
        console.log(this.state.selectedTruck, "selectedTruck");
        return (
            <Dialog
                draggable={false}
                header="Book Fleet"
                visible={true}
                onHide={this.props.onCancel}
                style={{ width: "90vw", height: "90vh" }}
                // footer={() => (
                //     <>
                //         <div>
                //             <Button
                //                 label="No"
                //                 icon="pi pi-times"
                //                 onClick={this.props.onCancel}
                //                 className="p-button-text"
                //             />
                //             <Button
                //                 label="Yes"
                //                 icon="pi pi-check"
                //                 onClick={() => blockTruck(false)}
                //                 autoFocus
                //             />
                //         </div>
                //     </>
                // )}
            >
                <div>
                    <div className="surface-card p-4 shadow-2 border-round">
                        <div className="font-medium text-3xl text-900 mb-3">
                            Fleet Information
                        </div>

                        <ul className="list-none p-0 m-0 border-top-1 border-300">
                            <li className="flex align-items-center py-3 px-2 flex-wrap surface-ground">
                                <div className="text-500 w-full md:w-2 font-medium">
                                    Name
                                </div>
                                <div className="text-900 w-full md:w-10">
                                    {selectedTruck.name}
                                </div>
                            </li>
                            <li className="flex align-items-center py-3 px-2 flex-wrap">
                                <div className="text-500 w-full md:w-2 font-medium">
                                    Compartments
                                </div>
                                <div className="text-900 w-full md:w-10 line-height-3">
                                    {selectedTruck.campartments}
                                </div>
                            </li>
                            <li className="flex align-items-center py-3 px-2 flex-wrap surface-ground">
                                <div className="text-500 w-full md:w-2 font-medium">
                                    Mileage
                                </div>
                                <div className="text-900 w-full md:w-10">
                                    {selectedTruck.mileage}
                                </div>
                            </li>
                            <li className="flex align-items-center py-3 px-2 flex-wrap">
                                <div className="text-500 w-full md:w-2 font-medium">
                                    Fuel Type
                                </div>
                                <div className="text-900 w-full md:w-10">
                                    {selectedTruck.fuelType}
                                </div>
                            </li>
                          
                        </ul>
                    </div>

                    <div className="surface-card p-4 mt-6 shadow-2 border-round p-fluid">
                        <div className="font-medium text-3xl text-900 mb-3">
                            Update Fleet
                        </div>
                        <div className="config-title">Truck For Booking</div>
                        <div className="formgroup-inline">
                            <div className="field-radiobutton">
                                <RadioButton
                                    name="inputstyle"
                                    value="full"
                                    checked={
                                        booking.truckModeForBooking === "full"
                                    }
                                    onChange={(e) => {
                                        this.setState((prevState) => {
                                            return {
                                                booking: {
                                                    ...prevState.booking,
                                                    truckModeForBooking:
                                                        e.value,
                                                },
                                            };
                                        });
                                    }}
                                    inputId="input_outlined"
                                ></RadioButton>
                                <label htmlFor="input_outlined">Full</label>
                            </div>
                            <div className="field-radiobutton">
                                <RadioButton
                                    name="inputstyle"
                                    value="partially"
                                    checked={
                                        booking.truckModeForBooking ===
                                        "partially"
                                    }
                                    onChange={(e) => {
                                        this.setState((prevState) => {
                                            return {
                                                booking: {
                                                    ...prevState.booking,
                                                    truckModeForBooking:
                                                        e.value,
                                                },
                                            };
                                        });
                                    }}
                                    inputId="input_outlined"
                                ></RadioButton>
                                <label htmlFor="input_filled">Partially</label>
                            </div>
                        </div>

                        <div className="grid formgrid p-fluid">
                            <div className="field mb-4 col-12 md:col-6">
                                <label
                                    htmlFor="company_name"
                                    className="font-medium text-900"
                                >
                                    From Date
                                </label>
                                <Calendar
                                    value={booking.fromDate}
                                    onChange={(e) => {
                                        this.setState((prevState) => {
                                            return {
                                                booking: {
                                                    ...prevState.booking,
                                                    fromDate: e.value,
                                                },
                                            };
                                        });
                                    }}
                                    showIcon
                                />
                            </div>
                            <div className="field mb-4 col-12 md:col-6">
                                <label
                                    htmlFor="invoice_id"
                                    className="font-medium text-900"
                                >
                                    To Date
                                </label>
                                <Calendar
                                    value={booking.toDate}
                                    onChange={(e) => {
                                        this.setState((prevState) => {
                                            return {
                                                booking: {
                                                    ...prevState.booking,
                                                    toDate: e.value,
                                                },
                                            };
                                        });
                                    }}
                                    showIcon
                                />
                            </div>

                            <div className="field mb-4 col-12 md:col-6">
                                <label
                                    htmlFor="invoice_date"
                                    className="font-medium text-900"
                                >
                                    From Location
                                </label>
                                <Dropdown
                                    value={booking.fromLocation}
                                    onChange={(e) =>
                                        this.setState((prevState) => {
                                            return {
                                                booking: {
                                                    ...prevState.booking,
                                                    fromLocation: e.value,
                                                },
                                            };
                                        })
                                    }
                                    options={europeCities}
                                    optionLabel="name"
                                    optionValue="code"
                                    placeholder="Select from location"
                                />
                            </div>
                            <div className="field mb-4 col-12 md:col-6">
                                <label
                                    htmlFor="invoice_date"
                                    className="font-medium text-900"
                                >
                                    To Location
                                </label>
                                <Dropdown
                                    value={booking.toLocation}
                                    onChange={(e) => {
                                        if (!booking.fromLocation) {
                                            return this.toast.current.show({
                                                severity: "error",
                                                ///summary: "Sticky",
                                                detail: "Please select From Location",
                                                //sticky: true,
                                            });
                                        }
                                        if (booking.fromLocation == e.value) {
                                            return this.toast.current.show({
                                                severity: "error",
                                                ///summary: "Sticky",
                                                detail: "From location and To location should not be same",
                                                //sticky: true,
                                            });
                                        }

                                        this.setState((prevState) => {
                                            return {
                                                booking: {
                                                    ...prevState.booking,
                                                    toLocation: e.value,
                                                },
                                            };
                                        });
                                    }}
                                    options={europeCities}
                                    optionLabel="name"
                                    optionValue="code"
                                    placeholder="Select from location"
                                />
                            </div>
                            {booking.truckModeForBooking == "full" && (
                                <>
                                    <div className="field mb-4 col-12 md:col-6">
                                        <label
                                            htmlFor="customer_name"
                                            className="font-medium text-900"
                                        >
                                            Capacity
                                        </label>
                                        <InputNumber
                                            onChange={(e) => {
                                                this.setState((prevState) => {
                                                    return {
                                                        booking: {
                                                            ...prevState.booking,
                                                            capacity: e.value,
                                                        },
                                                    };
                                                });
                                            }}
                                            type="text"
                                            value={booking.capacity}
                                            className="flex-1"
                                            min={0}
                                            max={selectedTruck.capacity || 100}
                                        />
                                    </div>
                                </>
                            )}

                            <div className="field mb-4 col-12 md:col-6">
                                <label
                                    htmlFor="customer_name"
                                    className="font-medium text-900"
                                    style={{ display: "block" }}
                                >
                                    Allow to Book
                                </label>
                                <InputSwitch
                                    checked={booking.allowExternalBooking}
                                    onChange={(e) => {
                                        this.setState((prevState) => {
                                            return {
                                                booking: {
                                                    ...prevState.booking,
                                                    allowExternalBooking:
                                                        e.value,
                                                },
                                            };
                                        });
                                    }}
                                />
                            </div>
                            <div className="field mb-4 col-12 md:col-6">
                                <label
                                    htmlFor="customer_name"
                                    className="font-medium text-900"
                                    style={{ display: "block" }}
                                >
                                    Live Tracking enabled
                                </label>
                                <InputSwitch
                                    checked={booking.liveTrackingEnabled}
                                    onChange={(e) => {
                                        this.setState((prevState) => {
                                            return {
                                                booking: {
                                                    ...prevState.booking,
                                                    liveTrackingEnabled:
                                                        e.value,
                                                },
                                            };
                                        });
                                    }}
                                />
                            </div>
                            <div className="surface-border border-top-1 opacity-50 mb-4 col-12"></div>
                        </div>
                        <Button
                            label={
                                booking.truckModeForBooking == "full"
                                    ? "Update"
                                    : "Update"
                            }
                            icon="pi pi-file"
                            className="w-auto"
                            onClick={this.blockTruck}
                        />
                    </div>
                </div>
                <Toast ref={this.toast} position="bottom-right" />
            </Dialog>
        );
    }
}
