type estimateTask = {
    description: string,
    cost: number,
}

type estimate = {
    checklist: Array<estimateTask>,
    totalEstimate: number | string,
    dateCreated: Date,
    name: string,
}

export default estimate;