import {useParams} from 'react-router-dom'

const Job = () => {
    const params = useParams();
    return (<>
        <h2>{params.jobId}</h2>
    </>)
}

export default Job;