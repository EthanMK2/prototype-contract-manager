import PageTitle from '../components/PageTitle';
import {useParams} from 'react-router-dom'

const Job = () => {
    const params = useParams();
    return (<>
        <PageTitle title='Manage Jobs'/>
        <h2>{params.jobId}</h2>
    </>)
}

export default Job;