"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Plus,
  Home,
  BriefcaseBusiness,
  Pencil,
  Trash2,
  CheckCircle2,
  X,
  Star,
} from "lucide-react";

type Address = {
  id: number;
  name: string;
  phone: string;
  street: string;
  city: string;
  state: string;
  label: string;
  isDefault: boolean;
};

const initialAddresses: Address[] = [
  {
    id: 1,
    name: "Customer Name",
    phone: "08000000000",
    street: "Your delivery street address",
    city: "Ede",
    state: "Osun State",
    label: "Home",
    isDefault: true,
  },
  {
    id: 2,
    name: "Customer Name",
    phone: "08000000000",
    street: "Your alternative delivery address",
    city: "Osogbo",
    state: "Osun State",
    label: "Work",
    isDefault: false,
  },
];

export default function AddressesPage() {
  const [addresses, setAddresses] = useState(initialAddresses);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [notice, setNotice] = useState("");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    label: "Home",
  });

  function updateForm(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function openNewAddress() {
    setEditingId(null);
    setForm({
      name: "",
      phone: "",
      street: "",
      city: "",
      state: "",
      label: "Home",
    });
    setShowForm(true);
  }

  function openEditAddress(address: Address) {
    setEditingId(address.id);
    setForm({
      name: address.name,
      phone: address.phone,
      street: address.street,
      city: address.city,
      state: address.state,
      label: address.label,
    });
    setShowForm(true);
  }

  function saveAddress(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (editingId !== null) {
      setAddresses((previous) =>
        previous.map((address) =>
          address.id === editingId
            ? { ...address, ...form }
            : address
        )
      );
      setNotice("Address updated in this preview.");
    } else {
      setAddresses((previous) => [
        ...previous,
        {
          id: Date.now(),
          ...form,
          isDefault: previous.length === 0,
        },
      ]);
      setNotice("Address added in this preview.");
    }

    setShowForm(false);
  }

  function deleteAddress(id: number) {
    setAddresses((previous) =>
      previous.filter((address) => address.id !== id)
    );
    setNotice("Address removed from this preview.");
  }

  function makeDefault(id: number) {
    setAddresses((previous) =>
      previous.map((address) => ({
        ...address,
        isDefault: address.id === id,
      }))
    );
    setNotice("Default address changed in this preview.");
  }

  return (
    <main className="address-page">
      <div className="container">
        <Link href="/account" className="back-link">
          <ArrowLeft size={17} /> Back to My Account
        </Link>

        <div className="page-heading">
          <div>
            <span className="eyebrow">YOUR ACCOUNT</span>
            <h1>Delivery Addresses</h1>
            <p>Manage the addresses where you receive your orders.</p>
          </div>

          <button className="add-button" onClick={openNewAddress}>
            <Plus size={18} /> Add New Address
          </button>
        </div>

        {notice && (
          <div className="notice">
            <CheckCircle2 size={18} />
            <span>{notice}</span>
            <button onClick={() => setNotice("")}>
              <X size={17} />
            </button>
          </div>
        )}

        <div className="info-banner">
          <MapPin size={21} />
          <div>
            <strong>Your delivery locations</strong>
            <p>
              Save your preferred delivery addresses for easier checkout.
              Changes currently remain in this browser preview.
            </p>
          </div>
        </div>

        <div className="address-list">
          {addresses.map((address) => (
            <article className="address-card" key={address.id}>
              <div className="address-top">
                <div className="address-label">
                  <span className="label-icon">
                    {address.label === "Work" ? (
                      <BriefcaseBusiness size={20} />
                    ) : (
                      <Home size={20} />
                    )}
                  </span>
                  <div>
                    <h3>{address.label}</h3>
                    {address.isDefault && (
                      <span className="default-badge">
                        <Star size={12} fill="currentColor" />
                        Default address
                      </span>
                    )}
                  </div>
                </div>

                <div className="actions">
                  <button
                    onClick={() => openEditAddress(address)}
                    aria-label="Edit address"
                  >
                    <Pencil size={17} />
                  </button>
                  <button
                    onClick={() => deleteAddress(address.id)}
                    aria-label="Delete address"
                    className="delete-action"
                  >
                    <Trash2 size={17} />
                  </button>
                </div>
              </div>

              <div className="address-details">
                <strong>{address.name}</strong>
                <p>{address.street}</p>
                <p>
                  {address.city}, {address.state}
                </p>
                <p>{address.phone}</p>
              </div>

              {!address.isDefault && (
                <button
                  className="default-button"
                  onClick={() => makeDefault(address.id)}
                >
                  Set as default
                </button>
              )}
            </article>
          ))}
        </div>

        {addresses.length === 0 && (
          <div className="empty-state">
            <MapPin size={35} />
            <h2>No saved addresses yet</h2>
            <p>Add an address to make future deliveries easier.</p>
            <button className="add-button" onClick={openNewAddress}>
              <Plus size={18} /> Add Address
            </button>
          </div>
        )}

        <div className="bottom-links">
          <Link href="/orders">View My Orders</Link>
          <Link href="/support">Get Customer Support</Link>
        </div>
      </div>

      {showForm && (
        <div className="modal-overlay">
          <form className="address-form" onSubmit={saveAddress}>
            <div className="form-heading">
              <div>
                <span className="eyebrow">ADDRESS BOOK</span>
                <h2>
                  {editingId !== null ? "Edit Address" : "Add New Address"}
                </h2>
              </div>
              <button
                type="button"
                className="close-button"
                onClick={() => setShowForm(false)}
              >
                <X size={21} />
              </button>
            </div>

            <label>
              Full Name
              <input
                name="name"
                value={form.name}
                onChange={updateForm}
                placeholder="Enter recipient's name"
                required
              />
            </label>

            <label>
              Phone Number
              <input
                name="phone"
                value={form.phone}
                onChange={updateForm}
                placeholder="Enter phone number"
                type="tel"
                required
              />
            </label>

            <label>
              Street Address
              <input
                name="street"
                value={form.street}
                onChange={updateForm}
                placeholder="House number, street name"
                required
              />
            </label>

            <div className="form-row">
              <label>
                City
                <input
                  name="city"
                  value={form.city}
                  onChange={updateForm}
                  placeholder="City"
                  required
                />
              </label>

              <label>
                State
                <input
                  name="state"
                  value={form.state}
                  onChange={updateForm}
                  placeholder="State"
                  required
                />
              </label>
            </div>

            <label>
              Address Type
              <select
                name="label"
                value={form.label}
                onChange={updateForm}
              >
                <option value="Home">Home</option>
                <option value="Work">Work</option>
                <option value="Other">Other</option>
              </select>
            </label>

            <button type="submit" className="save-button">
              {editingId !== null ? "Save Changes" : "Save Address"}
            </button>

            <p className="form-note">
              This is a demonstration form. Addresses are not yet saved to an
              online account.
            </p>
          </form>
        </div>
      )}

      <style jsx>{`
        .address-page {
          min-height: 100vh;
          background: #f8f9fc;
          padding: 42px 18px 70px;
          color: #172033;
        }

        .container {
          max-width: 1050px;
          margin: auto;
        }

        .back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #6b7280;
          text-decoration: none;
          font-size: 14px;
          margin-bottom: 30px;
        }

        .page-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin-bottom: 28px;
        }

        .eyebrow {
          color: #7655e8;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        h1 {
          font-size: clamp(27px, 5vw, 38px);
          margin: 8px 0;
          letter-spacing: -1.2px;
        }

        .page-heading p {
          color: #737b8d;
          margin: 0;
          font-size: 14px;
        }

        .add-button,
        .save-button {
          border: 0;
          background: #7655e8;
          color: white;
          padding: 13px 18px;
          border-radius: 10px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
        }

        .notice {
          background: #eaf8ef;
          color: #187344;
          padding: 13px 15px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
          font-size: 13px;
        }

        .notice button {
          margin-left: auto;
          border: 0;
          background: transparent;
          color: inherit;
          cursor: pointer;
        }

        .info-banner {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          background: #f0edff;
          color: #6044c4;
          padding: 18px;
          border-radius: 12px;
          margin-bottom: 25px;
        }

        .info-banner strong {
          font-size: 14px;
        }

        .info-banner p {
          color: #70658f;
          font-size: 13px;
          margin: 5px 0 0;
          line-height: 1.6;
        }

        .address-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .address-card {
          background: white;
          border: 1px solid #e9ebf2;
          border-radius: 15px;
          padding: 22px;
        }

        .address-top,
        .address-label,
        .actions {
          display: flex;
          align-items: center;
        }

        .address-top {
          justify-content: space-between;
          gap: 10px;
        }

        .address-label {
          gap: 12px;
        }

        .label-icon {
          width: 43px;
          height: 43px;
          border-radius: 12px;
          background: #f0edff;
          color: #7655e8;
          display: grid;
          place-items: center;
        }

        .address-label h3 {
          margin: 0 0 5px;
          font-size: 16px;
        }

        .default-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: #188451;
          font-size: 11px;
          font-weight: 700;
        }

        .actions {
          gap: 7px;
        }

        .actions button,
        .close-button {
          width: 35px;
          height: 35px;
          border: 1px solid #e9ebf2;
          border-radius: 9px;
          background: white;
          color: #647084;
          display: grid;
          place-items: center;
          cursor: pointer;
        }

        .actions .delete-action {
          color: #dc5555;
        }

        .address-details {
          margin-top: 22px;
          line-height: 1.65;
          font-size: 13px;
          color: #747c8c;
        }

        .address-details strong {
          color: #202a3d;
          font-size: 14px;
        }

        .address-details p {
          margin: 3px 0;
        }

        .default-button {
          border: 0;
          background: #f0edff;
          color: #7655e8;
          border-radius: 8px;
          padding: 9px 12px;
          font-size: 12px;
          font-weight: 700;
          margin-top: 15px;
          cursor: pointer;
        }

        .empty-state {
          text-align: center;
          background: white;
          border: 1px dashed #d9dce8;
          border-radius: 15px;
          padding: 55px 20px;
          color: #7655e8;
        }

        .empty-state h2 {
          color: #172033;
          font-size: 20px;
        }

        .empty-state p {
          color: #737b8d;
          font-size: 14px;
          margin-bottom: 20px;
        }

        .bottom-links {
          display: flex;
          gap: 20px;
          margin-top: 28px;
          flex-wrap: wrap;
        }

        .bottom-links a {
          color: #7655e8;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 50;
          background: rgba(17, 24, 39, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 18px;
          overflow-y: auto;
        }

        .address-form {
          background: white;
          width: 100%;
          max-width: 500px;
          padding: 25px;
          border-radius: 17px;
          max-height: 92vh;
          overflow-y: auto;
        }

        .form-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 22px;
        }

        .form-heading h2 {
          margin: 6px 0 0;
          font-size: 23px;
        }

        .address-form label {
          display: block;
          color: #343d50;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 15px;
        }

        .address-form input,
        .address-form select {
          display: block;
          width: 100%;
          box-sizing: border-box;
          margin-top: 7px;
          padding: 13px;
          border: 1px solid #e1e4ed;
          border-radius: 9px;
          background: white;
          color: #172033;
          font-size: 14px;
          outline: none;
        }

        .address-form input:focus,
        .address-form select:focus {
          border-color: #7655e8;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .save-button {
          width: 100%;
          margin-top: 5px;
        }

        .form-note {
          text-align: center;
          color: #9299a7;
          font-size: 11px;
          line-height: 1.5;
          margin: 14px 0 0;
        }

        @media (max-width: 650px) {
          .page-heading {
            align-items: flex-start;
            flex-direction: column;
          }

          .address-list {
            grid-template-columns: 1fr;
          }

          .add-button {
            width: 100%;
          }

          .address-form {
            padding: 20px;
          }
        }

        @media (max-width: 380px) {
          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }
      `}</style>
    </main>
  );
      }
