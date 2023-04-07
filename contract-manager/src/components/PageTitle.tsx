import pageTitle from "../models/pageTitle";

// REPLACE INLINE STYLES
const PageTitle = ({title}: pageTitle) => {
    return <h1 style={{margin: "3rem 0"}}>{title}</h1>
};

export default PageTitle;
