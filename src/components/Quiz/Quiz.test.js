import Quiz from "./Quiz";
import React from "react";
import {testConnectedComponentRender} from "../../core/helpers/tests/test-connected-component-render";

describe('Quiz', () => {
    testConnectedComponentRender(Quiz)
});
