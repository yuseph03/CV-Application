
export default function JobInput (props) {
    return (
    <div id="job-info">
        <button onClick={props.handleExpand}>click</button>
        {props.expanded 
        ? 
        <div>
            <p>Company</p>
            <input type='text' name="company" value={props.company} onChange={(e) => props.setCompany(e.target.value)}/>
            <p>Role</p>
            <input type='text' name="role" value={props.role} onChange={(e) => props.setRole(e.target.value)}/>
            <p>Start Date</p>
            <input type='number' name="job-start" value={props.jobStartDate} onChange={(e) => props.setJobStartDate(e.target.value)}/>
            <p>End Date</p>
            <input type='number' name="job-end" value={props.jobEndDate} onChange={(e) => props.setJobEndDate(e.target.value)}/>
            <p>Location</p>
            <input type="text" name="job-location" value={props.jobLocation} onChange={(e) => props.setJobLocation(e.target.value)} />
        </div> : null}
    </div>
    )
}