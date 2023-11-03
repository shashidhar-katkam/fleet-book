import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { RadioButton } from "primereact/radiobutton";
import { Checkbox } from "primereact/checkbox";
import { Divider } from "primereact/divider";
import { withRouter } from "react-router-dom";

const LoginPage = (props) => {
    const [checked3, setChecked3] = useState(false);
    const [checked4, setChecked4] = useState("user");
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
                        style={{ backgroundColor: "rgba(255,255,255,.7)" }}
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
                    <div className="w-full lg:w-6 p-4 lg:p-7 surface-card">
                        <div className="text-900 text-2xl font-medium mb-6">
                            Login{" "}
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
                            <label htmlFor="mode1"> User</label>
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
                            <label htmlFor="mode2"> Admin</label>
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
