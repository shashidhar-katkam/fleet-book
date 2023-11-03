import React, { Component } from "react";
import NavFooter from "./navFooter";
import { END_POINT } from "../../config";
import axios from "axios";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputSwitch } from "primereact/inputswitch";
import { ConfirmDialog } from "primereact/confirmdialog";
import { Button } from "primereact/button";
import BlockingTruckInternal from "./blockingTruckInternal";
import NavFooter2 from "./navFooter2";

export default class TruckManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trucks: [],
            isShowTruckBooking: false,
        };
    }

    changeTruckStatus = async () => {
        const { selectedTruck } = this.state;

        try {
            const url = `${END_POINT}/truck/update`;
            const response = await axios.post(url, {
                _id: selectedTruck._id,
                enabledForBooking: !selectedTruck.enabledForBooking,
            });
            if (response?.data) {
                this.setState(
                    {
                        //  iShowConfirmDialog: false,
                    },
                    this.getTrucks
                );
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    getTrucks = async () => {
        try {
            const url = `${END_POINT}/truck/get-fleet-for-booking`;
            const dataToSend = {};
            const response = await axios.post(url, dataToSend);
            if (response?.data) {
                this.setState({
                    trucks: response?.data?.data,
                });
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    componentDidMount() {
        this.getTrucks();
    }

    render() {
        const { trucks, isShowTruckBooking } = this.state;
        console.log(this.state, "trucks");
        return (
            <NavFooter2>
                <div className="p-card p-5">
                    <h2>Truck Management</h2>
                    <DataTable
                        value={trucks}
                        key="_id"
                        stripedRows
                        tableStyle={{ minWidth: "50rem" }}
                        paginator
                        rows={5}
                        rowsPerPageOptions={[5, 10, 25, 50]}
                    >
                        <Column field="name" header="Name"></Column>
                        <Column
                            field="enabledForBooking"
                            header="Actions"
                            body={(rowData) => {
                                return (
                                    <>
                                        <Button
                                            icon="pi pi-book"
                                            aria-label="Book"
                                            onClick={() => {
                                                this.setState({
                                                    isShowTruckBooking: true,
                                                    selectedTruck: rowData,
                                                });
                                            }}
                                        />
                                    </>
                                );
                            }}
                        ></Column>
                    </DataTable>
                </div>
                {isShowTruckBooking && (
                    <BlockingTruckInternal
                        selectedTruck={this.state.selectedTruck}
                        onCancel={() => {
                            this.setState({
                                isShowTruckBooking: false,
                            });
                        }}
                    />
                )}
            </NavFooter2>
        );
    }
}
