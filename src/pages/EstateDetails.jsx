import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
    const data = useLoaderData();
    // console.log(data);
    const {id} = useParams();
    // console.log(id);
    const matchData = data.find(item => item.id == id);
    console.log(matchData);
    return (
        <div>
            <Helmet>
                <title>Estate Details Page</title>
            </Helmet>
            <h1>Matched data id : {matchData.id}</h1>
        </div>
    );
};

export default EstateDetails;