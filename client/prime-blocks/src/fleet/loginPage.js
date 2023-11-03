import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { Checkbox } from "primereact/checkbox";
import { Divider } from "primereact/divider";
import { withRouter } from "react-router-dom";

const LoginPage = (props) => {
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState('user');
    // const navigate = useNavigate();

    return (
        <>
            <div
                style={{
                    background:
                        'url("assets/images/blocks/signin/signin-2.jpg") no-repeat',
                    backgroundSize: "cover",
                }}
                className="px-4 py-8 md:px-6 lg:px-8"
            >
                <div className="flex flex-wrap">
                    <div
                        className="w-full lg:w-6 p-4 lg:p-7"
                        style={{ backgroundColor: "rgba(255,255,255,.7)"}}
                    >

                                <img
                                    src="assets/images/blocks/logos/lynx-logo.svg"
                                    alt="Image"
                                    height="100"
                                    style={{marginTop: '180px', marginLeft: '100px'}}
                                />

                    </div>
                    <div className="w-full lg:w-6 p-4 lg:p-7 surface-card">
                        <div className="text-900 text-2xl font-medium mb-6">
                            Login {' '}
                            <RadioButton
                                className="ml-2"
                                name="menuMode"
                                value="user"
                                checked={checked4 == "user"}
                                inputId="mode1"
                                onChange={(e) => {
                                    setChecked4(e.value);
                                }}
                            ></RadioButton>
                            <label htmlFor="mode1">{' '}User</label>
                            <RadioButton
                                className="ml-2"
                                name="menuMode"
                                value="admin"
                                checked={checked4 == "admin"}
                                inputId="mode2"
                                onChange={(e) => {
                                    setChecked4(e.value);
                                }}
                            ></RadioButton>
                            <label htmlFor="mode2">{' '}Admin</label>
                        </div>
                        <label
                            htmlFor="email3"
                            className="block text-900 font-medium mb-2"
                        >
                            Email
                        </label>
                        <InputText
                            id="email3"
                            type="text"
                            placeholder="Email address"
                            className="w-full mb-4"
                        />

                        <label
                            htmlFor="password3"
                            className="block text-900 font-medium mb-2"
                        >
                            Password
                        </label>
                        <InputText
                            id="password3"
                            type="password"
                            placeholder="Password"
                            className="w-full mb-4"
                        />

                        <div className="flex align-items-center justify-content-between mb-6">
                            <div className="flex align-items-center">
                                <Checkbox
                                    id="rememberme3"
                                    className="mr-2"
                                    checked={checked3}
                                    onChange={(e) => setChecked3(e.checked)}
                                />
                                <label htmlFor="rememberme3">Remember me</label>
                            </div>
                            <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">
                                Forgot password?
                            </a>
                        </div>

                        <Button
                            label="Login"
                            icon="pi pi-user"
                            className="w-full"
                            onClick={() => {
                                if (checked4 == "user") {
                                    props.history.push("/user-panel");
                                } else {
                                    props.history.push("/admin-panel");
                                }
                            }}
                        />

                    </div>
                </div>
            </div>
        </>
    );
};

export default withRouter(LoginPage);
