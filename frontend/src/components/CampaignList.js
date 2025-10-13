import React, { useEffect, useState } from 'react';
import { getCampaigns, updateCampaign, deleteCampaign } from '../api';
import '../App.css'; // Ensure styles are applied

export default function CampaignList({ refresh }) {
    const [list, setList] = useState([]);

    const fetchCampaigns = async () => {
        // Mock data for initial display if API fails
        const mockData = [
             { _id: '1', name: 'Campaign 1', client: 'Client 1', startDate: new Date(), status: 'Active' },
             { _id: '2', name: 'Test Campaign', client: 'Test Client', startDate: new Date(), status: 'Active' },
        ];
        
        try {
            const res = await getCampaigns();
            setList(res.data);
        } catch (error) {
            console.error("Error fetching campaigns, using mock data.", error);
            setList(mockData);
        }
    };

    useEffect(() => { fetchCampaigns(); }, [refresh]);

    const handleStatus = async (id, status) => {
        // Optimistically update UI first for better user experience
        setList(list.map(c => c._id === id ? { ...c, status } : c));
        await updateCampaign(id, { status });
        // Re-fetch or rely on the optimistic update
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to permanently delete this campaign?')) return;
        
        // Optimistic delete
        setList(list.filter(c => c._id !== id));
        await deleteCampaign(id);
        // If API returns an error, re-fetch: fetchCampaigns();
    };

    return (
        <section className="card"> {/* Use the reusable card style */}
            <h2 className="card-title-small">Existing Campaigns</h2> {/* Standardized title */}
            
            <div className="table-container"> 
                {/* Use the new, professional table class */}
                <table className="table"> 
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Client</th>
                            <th>Start Date</th>
                            <th>Status</th>
                            <th className="text-right">Action</th> {/* Right align header */}
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((c) => (
                            <tr key={c._id}>
                                <td>{c.name}</td>
                                <td>{c.client}</td>
                                <td>{new Date(c.startDate).toLocaleDateString()}</td>
                                <td>
                                    <select 
                                        value={c.status} 
                                        onChange={(e) => handleStatus(c._id, e.target.value)}
                                        className="form-select status-select" 
                                    >
                                        <option>Active</option>
                                        <option>Paused</option>
                                        <option>Completed</option>
                                    </select>
                                </td>
                                <td className="text-right"> {/* Right align cell content */}
                                    <button onClick={() => handleDelete(c._id)} className="btn btn-danger">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}