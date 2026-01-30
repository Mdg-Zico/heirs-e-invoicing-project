import "./ClientTable.css";

function ClientsTable({ clients, onView, onEdit, onDelete }) {
  return (
    <div className="table-responsive">
      <table className="clients-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Status</th>
            <th>Date Onboarded</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {clients.map(client => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.company}</td>
              <td className={`status ${client.status.toLowerCase()}`}>
                {client.status}
              </td>
              <td>{client.dateOnboarded}</td>
              <td className="actions">
                <button onClick={() => onView(client)}>View</button>
                <button onClick={() => onEdit(client)}>Edit</button>
                <button className="danger" onClick={() => onDelete(client.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientsTable;
