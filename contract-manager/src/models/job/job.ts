import task from "./task";
import contact from './contact';
import notes from "./notes";

type job = {
    checklist: Array<task>,
    contacts: Array<contact>,
    notes: notes,
    title: string,
    shortDescription: string,
    address: string,
    completionStatus: string,  // completed, failed, in-progress
    createdDate: Date,
    finishDate: Date,
    inspectionSuccessful: boolean,
    priority: string,
    timeLeft: string,
    expectedPay: number | string
}

export default job;