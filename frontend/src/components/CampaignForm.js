import React, { useState } from 'react';
import { addCampaign } from '../api';
import '../App.css'; // Ensure styles are applied

export default function CampaignForm({ onAdded }) {
    const [form, setForm] = useState({ name: '', client: '', startDate: '', status: 'Active' });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const submit = async (e) => {
        e.preventDefault();
        // Assuming addCampaign handles API call
        await addCampaign(form); 
        setForm({ name: '', client: '', startDate: '', status: 'Active' });
        onAdded();
    };

    return (
        <section className="card"> {/* Use the reusable card style */}
            <h2 className="card-title-small">Add New Campaign</h2> {/* Standardized title */}
            
            {/* .campaign-form applies CSS Grid for alignment */}
            <form onSubmit={submit} className="campaign-form"> 
                
                <div className="form-group">
                    <label htmlFor="campaign-name">Campaign Name</label>
                    <input 
                        id="campaign-name"
                        name="name" 
                        placeholder="Enter Campaign Name" 
                        value={form.name} 
                        onChange={handleChange} 
                        required
                        className="form-control"
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="client-name">Client Name</label>
                    <input 
                        id="client-name"
                        name="client" 
                        placeholder="Enter Client Name" 
                        value={form.client} 
                        onChange={handleChange} 
                        required
                        className="form-control"
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="start-date">Start Date</label>
                    <input 
                        id="start-date"
                        name="startDate" 
                        type="date" 
                        value={form.startDate} 
                        onChange={handleChange} 
                        required
                        className="form-control"
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="status-new">Status</label>
                    <select 
                        id="status-new"
                        name="status" 
                        value={form.status} 
                        onChange={handleChange}
                        className="form-select form-control"
                    >
                        <option>Active</option>
                        <option>Paused</option>
                        <option>Completed</option>
                    </select>
                </div>
                
                {/* Button placed as a grid item, aligned via CSS Grid properties */}
                <button type="submit" className="btn btn-primary"> 
                    Add Campaign
                </button>
            </form>
        </section>
    );
}