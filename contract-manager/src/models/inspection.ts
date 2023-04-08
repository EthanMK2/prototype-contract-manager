type inspectionTask = {
    description: string,
    status: string,  // passed, failed, incomplete
}

type inspection = {
    checklist: Array<inspectionTask>,
    status: string,  // passed, failed, incomplete
}