import Sidebar from "../../components/Sidebar/Sidebar";
import ClientModal from "../../components/ClientModal/ClientModal";
import ClientsTable from "../../components/ClientTable/ClientTable";
import ClientStats from "../../components/ClientStats/ClientStats";
import SearchIcon from "../../assets/icons/SearchIcon.svg";
import "./Clients.css";
import "../PageLayout/PageLayout.css";

import { clientsMock } from "../../services/clientMock";
import { useState, useEffect } from "react";

function Clients() {
  const savedClients = JSON.parse(localStorage.getItem("clients")) || clientsMock;

  const [clients, setClients] = useState(savedClients);
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [editingClient, setEditingClient] = useState(null);
  const [mode, setMode] = useState("add"); // add | edit | view
  const [clientToDelete, setClientToDelete] = useState(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const clientsPerPage = 2;

  // Sorting
  // Sorting (default: newest first)
  const [sortField, setSortField] = useState("dateOnboarded");
  const [sortOrder, setSortOrder] = useState("desc");


  useEffect(() => {
    localStorage.setItem("clients", JSON.stringify(clients));
  }, [clients]);

  // Search
  const filteredClients = clients.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase()) ||
    c.company.toLowerCase().includes(search.toLowerCase())
  );

  // Sort
    const sortedClients = [...filteredClients].sort((a, b) => {
    const valA = sortField === "dateOnboarded" ? new Date(a[sortField]) : a[sortField];
    const valB = sortField === "dateOnboarded" ? new Date(b[sortField]) : b[sortField];

    if (sortOrder === "asc") return valA > valB ? 1 : -1;
    return valA < valB ? 1 : -1;
  });



  // Pagination logic
  const indexOfLast = currentPage * clientsPerPage;
  const indexOfFirst = indexOfLast - clientsPerPage;
  const currentClients = sortedClients.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(sortedClients.length / clientsPerPage);

  const handleView = (client) => {
    setEditingClient(client);
    setMode("view");
    setShowModal(true);
  };

  const handleEdit = (client) => {
    setEditingClient(client);
    setMode("edit");
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

        <div className="table-controls">
          <div className="sort-group">
            <select value={sortField} onChange={(e) => setSortField(e.target.value)}>
              <option value="name">Sort by Name</option>
              <option value="dateOnboarded">Sort by Date</option>
              <option value="status">Sort by Status</option>
            </select>

            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>

          <button className="add-client-btn" onClick={() => {
            setEditingClient(null);
            setMode("add");
            setShowModal(true);
          }}>
            Add Client
          </button>
        </div>

        <div className="clients-table-card">
            <ClientsTable
            clients={currentClients}
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />

        </div>

        {/* Pagination */}
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={currentPage === i + 1 ? "active-page" : ""}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {/* Add / Edit / View Modal */}
        <ClientModal
          mode={mode}
          isOpen={showModal}
          client={editingClient}
          onClose={() => {
            setShowModal(false);
            setEditingClient(null);
          }}
          onSave={(clientData) => {
            if (mode === "edit") {
              setClients(prev =>
                prev.map(c =>
                  c.id === editingClient.id ? { ...clientData, id: c.id } : c
                )
              );
            } else if (mode === "add") {
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

        {/* Delete Confirmation */}
        {clientToDelete && (
          <div className="modal-overlay">
            <div className="client-modal">
              <h3>Delete Client</h3>
              <p>This action cannot be undone.</p>

              <div className="modal-actions">
                <button className="cancel-btn" onClick={() => setClientToDelete(null)}>
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
