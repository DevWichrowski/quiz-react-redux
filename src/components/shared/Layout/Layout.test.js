import {testComponentRender} from "../../../core/helpers/tests/test-component-render";
import React from "react";
import Layout from "./Layout";


describe('Layout', () => {
    testComponentRender(<Layout>Test</Layout>)
});
