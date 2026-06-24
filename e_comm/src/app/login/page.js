"use client";
import { useState } from 'react';

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '', rememberMe: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in with: ${formData.email}`);
    // Redirect back to home page after successful authentication mock simulation
    window.location.href = '/';
  };

  return (
    <div style={{ backgroundColor: '#f7fafc', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', padding: '20px' }}>
      <div style={{ backgroundColor: '#ffffff', border: '1px solid #e3e8ee', borderRadius: '6px', padding: '40px', width: '100%', maxWidth: '400px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.03)' }}>
        
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1c1c1c', margin: '0 0 8px 0', textAlign: 'center' }}>Login</h2>
        <p style={{ color: '#8b96a5', fontSize: '14px', textAlign: 'center', margin: '0 0 24px 0' }}>Access your supplier marketplace platform</p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', color: '#505050', marginBottom: '6px', fontWeight: '500' }}>Email Address</label>
            <input 
              type="email" 
              name="email"
              required
              placeholder="name@example.com" 
              value={formData.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px 12px', border: '1px solid #e3e8ee', borderRadius: '5px', fontSize: '15px', boxSizing: 'border-box' }}
            />
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <label style={{ fontSize: '14px', color: '#505050', fontWeight: '500' }}>Password</label>
              <a href="#" style={{ fontSize: '13px', color: '#0d6efd', textDecoration: 'none' }}>Forgot password?</a>
            </div>
            <input 
              type="password" 
              name="password"
              required
              placeholder="••••••••" 
              value={formData.password}
              onChange={handleChange}
              style={{ width: '100%', padding: '10px 12px', border: '1px solid #e3e8ee', borderRadius: '5px', fontSize: '15px', boxSizing: 'border-box' }}
            />
          </div>

          <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#505050', cursor: 'pointer', margin: '4px 0' }}>
            <input 
              type="checkbox" 
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              style={{ width: '16px', height: '16px', accentColor: '#0d6efd' }} 
            />
            Keep me logged in
          </label>

          <button type="submit" style={{ width: '100%', backgroundColor: '#0d6efd', color: '#ffffff', border: 'none', padding: '12px', borderRadius: '5px', fontSize: '16px', fontWeight: '500', cursor: 'pointer', marginTop: '8px' }}>
            Log In
          </button>
        </form>

        <div style={{ borderTop: '1px solid #e3e8ee', marginTop: '24px', paddingTop: '20px', textAlign: 'center', fontSize: '14px', color: '#505050' }}>
          Don't have an account? <a href="/signup" style={{ color: '#0d6efd', textDecoration: 'none', fontWeight: '500' }}>Join now</a>
        </div>

      </div>
    </div>
  );
}