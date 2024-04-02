import React from "react";
import Details from "./Details";
import Navbar from "../Dashboard/Navbar";
import Footer from "../Dashboard/Footer";

function Profile() {
    return (
        <>
            <title>Edit Profile - Speedo Car Rental</title>
            <Navbar />
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                <div className="col-6 col-12">
                    <Details />
                </div>
            </div >
            <Footer />
        </>
    );
}

export default Profile;
