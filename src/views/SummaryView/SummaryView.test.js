import {testComponentRender} from "../../core/helpers/tests/test-component-render";
import Button from "../../components/shared/Button/Button";
import SummaryView from "./SummaryView";
import React from "react";

describe('Button', () => {
    testComponentRender(<SummaryView/>)
});
