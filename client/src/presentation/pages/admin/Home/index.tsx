
import './Home.css';

const AdminPage = () => {
  return (
    <div>
      <h2 className='admin-title'>Admin Dashboard</h2>
      <div className="dashboard-content">
        <div className="widget">
          <h3>Statistics</h3>
          <p>Total Users: 1</p>
          <p>Total Appointments: 2</p>
        </div>
        <div className="widget">
          <h3>Recent Activity</h3>
          <ul>
            <li>User John Doe scheduled an appointment.</li>
            <li>User Jane Doe canceled an appointment.</li>
          </ul>
        </div>
        <div className="widget">
          <h3>Settings</h3>
          <p>Manage Users</p>
          <p>Manage Appointments</p>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;