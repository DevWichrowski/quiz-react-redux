import {testComponentRender} from "../../../core/helpers/tests/test-component-render";
import Button from "./Button";
import React from "react";


describe('Button', () => {
    testComponentRender(<Button/>)
});
