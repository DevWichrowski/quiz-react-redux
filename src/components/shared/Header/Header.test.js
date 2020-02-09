import {testComponentRender} from "../../../core/helpers/tests/test-component-render";
import React from "react";
import Header from "./Header";

describe('Header', () => {
    testComponentRender(<Header/>)
});
