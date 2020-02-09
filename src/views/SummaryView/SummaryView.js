import React from 'react';
import Layout from "../../components/shared/Layout/Layout";
import Summary from "../../components/Summary/Summary";
import {useDocumentTitle} from "../../core/helpers/hooks";


const SummaryView = () => {
    useDocumentTitle("Summary");
    return (
        <Layout>
            <Summary/>
        </Layout>
    );
};

export default SummaryView;
