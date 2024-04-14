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
            <h1>Matched data id : {matchData.id}</h1>
        </div>
    );
};

export default EstateDetails;