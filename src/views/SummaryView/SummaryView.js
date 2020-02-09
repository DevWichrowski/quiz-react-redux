import React from 'react';
import Summary from "../../components/Summary/Summary";
import {useDocumentTitle} from "../../core/helpers/hooks";


const SummaryView = () => {
    useDocumentTitle("Summary");
    return (
            <Summary/>
    );
};

export default SummaryView;
