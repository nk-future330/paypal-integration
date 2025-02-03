import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// Renders errors or successfull transactions on the screen.
function Message({ content }) {
    return <p>{content}</p>;
}

function App() {
    const initialOptions = {
        "client-id": "test",
        "enable-funding": "venmo",
        "disable-funding": "",
        "buyer-country": "US",
        currency: "USD",
        "data-page-type": "product-details",
        components: "buttons",
        "data-sdk-integration-source": "developer-studio",
    };

    const displayOnly = ["vaultable"];

    return (
        <div className="App">
            <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons
                    style={{
                        shape: "pill",
                        layout: "vertical",
                        color: "blue",
                        label: "paypal",
                    }}
                    displayOnly={displayOnly}
                    fundingSource="paypal"
                />
            </PayPalScriptProvider>
        </div>
    );
}

export default App; 
