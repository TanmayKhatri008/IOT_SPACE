import "./WorkingDays.css";
function WorkingDays({ user }) {

  const workingDays = user.WorkingDays ?? 0;
  const present = user.Present ?? 0;
  const absent = workingDays - present;

  return (
    <div className="Summary">   
      <table className="table-Working">
        <thead className="Working-head">
          <tr>
            <th>Total Working Days</th>
            <th>Present</th>
            <th>Absent</th>
          </tr>
        </thead>
        <tbody className="Working-body">
          <tr>
            <td>{workingDays} days</td>
            <td>{present} days</td>
            <td>{absent} days</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default WorkingDays;
