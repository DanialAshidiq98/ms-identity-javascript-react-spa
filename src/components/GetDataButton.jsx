import React from "react";
import { useIsAuthenticated } from "@azure/msal-react";
import Button from "react-bootstrap/Button";

/**
 * Renders a drop down button with child buttons for getting data in with a popup or redirect
 */
export const GetDataButton = () => {
    const isAuthenticated = useIsAuthenticated();

    const getData = () => {
        if (isAuthenticated) {

        } else {

        }
    }
    return (
        <center>
        <Button type="button" onClick={getData}>Get Data Button</Button>

        </center>
    )
}