import {testComponentRender} from "../../core/helpers/tests/test-component-render";
import Button from "../../components/shared/Button/Button";
import React from "react";
import WelcomeView from "./WelcomeView";

describe('Button', () => {
    testComponentRender(<WelcomeView/>)
});
