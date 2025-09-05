'use client';

import { useState } from 'react';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check - in production, use proper authentication
    if (password === 'picklepaddle2025') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password');
      setPassword('');
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '60vh',
        padding: '2rem'
      }}>
        <div style={{ 
          background: 'white', 
          padding: '2rem', 
          borderRadius: '8px', 
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)', 
          width: '100%', 
          maxWidth: '400px' 
        }}>
          <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#2d3748' }}>
            Admin Access
          </h1>
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '4px',
                  fontSize: '1rem'
                }}
                placeholder="Enter admin password"
                required
              />
            </div>
            {error && (
              <div style={{ color: '#dc2626', marginBottom: '1rem', fontSize: '0.9rem' }}>
                {error}
              </div>
            )}
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '0.75rem',
                background: '#2563eb',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 style={{ color: '#2d3748', margin: 0 }}>Get A Pickleball Paddle - Admin</h1>
        <button
          onClick={() => setIsAuthenticated(false)}
          style={{
            padding: '0.5rem 1rem',
            background: '#dc2626',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Logout
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {/* Site Analytics */}
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#2d3748', marginBottom: '1rem' }}>Site Overview</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ textAlign: 'center', padding: '1rem', background: '#f8f9fa', borderRadius: '4px' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#2563eb' }}>12</div>
              <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>Total Pages</div>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem', background: '#f8f9fa', borderRadius: '4px' }}>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#059669' }}>5</div>
              <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>Paddle Reviews</div>
            </div>
          </div>
        </div>

        {/* Content Management */}
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#2d3748', marginBottom: '1rem' }}>Content Management</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a href="/ultimate-guide" target="_blank" style={{ padding: '0.75rem', background: '#f3f4f6', borderRadius: '4px', textDecoration: 'none', color: '#374151' }}>
              📖 Edit Ultimate Guide
            </a>
            <a href="/beginner-guide" target="_blank" style={{ padding: '0.75rem', background: '#f3f4f6', borderRadius: '4px', textDecoration: 'none', color: '#374151' }}>
              🎯 Edit Beginner Guide
            </a>
            <a href="/premium-comparison" target="_blank" style={{ padding: '0.75rem', background: '#f3f4f6', borderRadius: '4px', textDecoration: 'none', color: '#374151' }}>
              ⭐ Edit Premium Comparison
            </a>
            <a href="/budget-paddles" target="_blank" style={{ padding: '0.75rem', background: '#f3f4f6', borderRadius: '4px', textDecoration: 'none', color: '#374151' }}>
              💰 Edit Budget Paddles
            </a>
          </div>
        </div>

        {/* SEO & Analytics */}
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#2d3748', marginBottom: '1rem' }}>SEO & Analytics</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a href="https://search.google.com/search-console" target="_blank" style={{ padding: '0.75rem', background: '#f3f4f6', borderRadius: '4px', textDecoration: 'none', color: '#374151' }}>
              📊 Google Search Console
            </a>
            <a href="https://analytics.google.com" target="_blank" style={{ padding: '0.75rem', background: '#f3f4f6', borderRadius: '4px', textDecoration: 'none', color: '#374151' }}>
              📈 Google Analytics
            </a>
            <a href="https://pagespeed.web.dev/" target="_blank" style={{ padding: '0.75rem', background: '#f3f4f6', borderRadius: '4px', textDecoration: 'none', color: '#374151' }}>
              ⚡ PageSpeed Insights
            </a>
          </div>
        </div>

        {/* Affiliate Management */}
        <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#2d3748', marginBottom: '1rem' }}>Affiliate Management</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ padding: '0.75rem', background: '#f0f9ff', borderRadius: '4px', borderLeft: '4px solid #2563eb' }}>
              <div style={{ fontWeight: '600', color: '#1e40af' }}>Amazon Associates</div>
              <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>Active - Commission tracking enabled</div>
            </div>
            <div style={{ padding: '0.75rem', background: '#f0fdf4', borderRadius: '4px', borderLeft: '4px solid #059669' }}>
              <div style={{ fontWeight: '600', color: '#047857' }}>Direct Affiliate Links</div>
              <div style={{ fontSize: '0.9rem', color: '#6b7280' }}>All manufacturer links active</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div style={{ background: 'white', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', marginTop: '2rem' }}>
        <h2 style={{ color: '#2d3748', marginBottom: '1rem' }}>Quick Actions</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          <button style={{
            padding: '0.75rem 1.5rem',
            background: '#2563eb',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: '600'
          }}>
            📝 Add New Paddle Review
          </button>
          <button style={{
            padding: '0.75rem 1.5rem',
            background: '#059669',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: '600'
          }}>
            📊 Update Rankings
          </button>
          <button style={{
            padding: '0.75rem 1.5rem',
            background: '#dc2626',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: '600'
          }}>
            🔄 Refresh Affiliate Links
          </button>
        </div>
      </div>
    </div>
  );
}