import {Helmet} from "react-helmet";

const DynamicTitle = ({title}) => {
    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    );
};

export default DynamicTitle;