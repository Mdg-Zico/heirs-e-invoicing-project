import { useState, useEffect } from "react";
import "./ClientModal.css";

function ClientModal({ isOpen, onClose, onSave, client, mode }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    status: "Active"
  });

  useEffect(() => {
    if (client) {
      setForm(client);
    } else {
      setForm({ name: "", email: "", company: "", status: "Active" });
    }
  }, [client]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="client-modal">
        <h3>
          {mode === "view" && "View Client"}
          {mode === "edit" && "Edit Client"}
          {mode === "add" && "Add New Client"}
        </h3>

        <form onSubmit={(e) => {
          e.preventDefault();
          if (mode !== "view") onSave(form);
        }}>
          <input
            disabled={mode === "view"}
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />

          <input
            disabled={mode === "view"}
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />

          <input
            disabled={mode === "view"}
            type="text"
            placeholder="Company"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            required
          />

          <select
            disabled={mode === "view"}
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
          >
            <option>Active</option>
            <option>Pending</option>
            <option>Suspended</option>
          </select>

          <div className="modal-actions">
            <button type="button" className="cancel-btn" onClick={onClose}>
              Close
            </button>

            {mode !== "view" && (
              <button type="submit">
                {mode === "edit" ? "Update" : "Save"}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default ClientModal;
