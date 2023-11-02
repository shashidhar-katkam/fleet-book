import React, { Component } from "react";

export default class FleetFooter extends Component {
    render() {
        return (
            <div className="bg-gray-900 px-4 py-8 md:px-6 lg:px-8">
                <div className="bg-gray-900">
                    <div className="grid">
                        <div className="col-12 md:col-3 flex flex-wrap justify-content-start md:mb-0 mb-3">
                            <img
                                src="assets/images/blocks/footer/footer-2.png"
                                alt="footer sections"
                                width={50}
                                height={50}
                                className="mr-3"
                            />
                            <div className="text-gray-300 font-bold text-5xl">
                                Bastion
                            </div>
                        </div>
                        <div className="col-12 md:col-3">
                            <div
                                className="text-white text-lg mb-4 flex flex-wrap"
                                style={{ maxWidth: " 290px" }}
                            >
                                Jacob Obrechtstraat 5, 1071 KC Amsterdam The
                                Netherlands
                            </div>
                            <div className="text-white mb-3">
                                <i className="pi pi-phone border-round p-1 mr-2"></i>
                                (31) 20 779 8986
                            </div>
                            <div className="text-white mb-3">
                                <i className="pi pi-inbox border-round p-1 mr-2"></i>
                                hello@bastion.co
                            </div>
                        </div>
                        <div className="col-12 md:col-3 text-gray-200">
                            <div className="text-white font-bold line-height-3 mb-3">
                                Company
                            </div>
                            <a className="text-white line-height-3 block cursor-pointer mb-2">
                                About Us
                            </a>
                            <a className="text-white line-height-3 block cursor-pointer mb-2">
                                News
                            </a>
                            <a className="text-white line-height-3 block cursor-pointer mb-2">
                                Investor Relations
                            </a>
                            <a className="text-white line-height-3 block cursor-pointer mb-2">
                                Careers
                            </a>
                            <a className="text-white line-height-3 block cursor-pointer">
                                Media Kit
                            </a>
                        </div>
                        <div className="col-12 md:col-3 text-gray-200">
                            <div className="text-white font-bold line-height-3 mb-3">
                                Resourses
                            </div>
                            <a className="text-white line-height-3 block cursor-pointer mb-2">
                                Get Started
                            </a>
                            <a className="text-white line-height-3 block cursor-pointer mb-2">
                                Learn
                            </a>
                            <a className="text-white line-height-3 block cursor-pointer">
                                Case Studies
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
