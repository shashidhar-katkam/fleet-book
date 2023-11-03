import React, { Component } from "react";
import NavFooter from "./navFooter";
import { END_POINT } from "../../config";
import axios from "axios";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputSwitch } from "primereact/inputswitch";
import { ConfirmDialog } from "primereact/confirmdialog";

export default class TruckIngestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trucks: [],
            iShowConfirmDialog: false,
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
                        iShowConfirmDialog: false,
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
            const url = `${END_POINT}/truck/get-fleets`;
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
        const { trucks, iShowConfirmDialog } = this.state;
        console.log(this.state, "trucks");
        return (
            <NavFooter>
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
                        header="Booking enabled"
                        body={(rowData) => {
                            return (
                                <InputSwitch
                                    checked={rowData.enabledForBooking}
                                    onChange={() => {
                                        this.setState({
                                            selectedTruck: rowData,
                                            iShowConfirmDialog: true,
                                        });
                                    }}
                                />
                            );
                        }}
                    ></Column>
                    <Column
                        field="Actions"
                        bodyStyle={() => {
                            return <></>;
                        }}
                        header="Quantity"
                    ></Column>
                </DataTable>
                <ConfirmDialog
                    message="Are you sure you want to proceed?"
                    header="Confirmation"
                    visible={iShowConfirmDialog}
                    reject={() => {
                        this.setState({
                            iShowConfirmDialog: false,
                        });
                    }}
                    accept={this.changeTruckStatus}
                />
            </NavFooter>
        );
    }
}
