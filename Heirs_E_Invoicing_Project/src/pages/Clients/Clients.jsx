import Sidebar from "../../components/Sidebar/Sidebar";
import ClientModal from "../../components/ClientModal/ClientModal";
import ClientsTable from "../../components/ClientTable/ClientTable";
import ClientStats from "../../components/ClientStats/ClientStats";
import SearchIcon from "../../components/SearchIcon/SearchIcon.svg";
import "./Clients.css";
import "../PageLayout/PageLayout.css";


import { clientsMock } from "../../services/clientMock";
import { useState, useEffect } from "react";

function Clients() {
  const savedClients = JSON.parse(localStorage.getItem("clients")) || clientsMock;
  const [clients, setClients] = useState(savedClients);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [modalMode, setModalMode] = useState("add");

  const [clientToDelete, setClientToDelete] = useState(null);

  const [editingClient, setEditingClient] = useState(null);

  useEffect(() => {
    localStorage.setItem("clients", JSON.stringify(clients));
  }, [clients]);

  const filteredClients = clients.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase()) ||
    c.company.toLowerCase().includes(search.toLowerCase())
  );

  const handleView = (client) => console.log("View:", client);

  const handleEdit = (client) => {
    setEditingClient(client);
    setShowModal(true);
  };

  const handleDelete = (id) => {
  setClientToDelete(id);
};


  return (
    <div className="page-container dashboard-layout">
      <Sidebar />

      <div className="clients-main main-content">
        <div className="clients-header">
          <div>
            <h2>Clients</h2>
            <p className="clients-subtitle">Manage onboarded clients</p>
          </div>

          <div className="clients-actions">
            <img src={SearchIcon} className="search-icon" />
            <input
              type="text"
              placeholder="Search clients"
              className="clients-search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <ClientStats clients={clients} />

        <div className="add-client-row">
          <button className="add-client-btn" onClick={() => setShowModal(true)}>
            Add Client
          </button>
        </div>

        <div className="clients-table-card">
          <ClientsTable
            clients={filteredClients}
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>

        <ClientModal
          isOpen={showModal}
          client={editingClient}
          onClose={() => {
            setShowModal(false);
            setEditingClient(null);
          }}
          onSave={(clientData) => {
            if (editingClient) {
              setClients(prev =>
                prev.map(c =>
                  c.id === editingClient.id ? { ...clientData, id: c.id } : c
                )
              );
            } else {
              setClients(prev => [
                ...prev,
                {
                  ...clientData,
                  id: Date.now(),
                  dateOnboarded: new Date().toISOString().split("T")[0]
                }
              ]);

            }
            setShowModal(false);
            setEditingClient(null);
          }}
        />
        {clientToDelete && (
        <div className="modal-overlay">
          <div className="client-modal">
            <h3>Delete Client</h3>
            <p>Are you sure you want to delete this client? This action cannot be undone.</p>

            <div className="modal-actions">
              <button
                className="cancel-btn"
                onClick={() => setClientToDelete(null)}
              >
                Cancel
              </button>
              <button
                className="danger-btn"
                onClick={() => {
                  setClients(prev => prev.filter(c => c.id !== clientToDelete));
                  setClientToDelete(null);
                }}
              >
                Delete
              </button>
            </div>
          </div>
  </div>
)}

      </div>
    </div>
  );
}

export default Clients;
