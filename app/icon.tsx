import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#2d3748',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          borderRadius: '50%',
        }}
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 32 32" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M16 6C19 6 21 8 21 11V19C21 22 19 24 16 24C13 24 11 22 11 19V11C11 8 13 6 16 6Z" 
            fill="white"
          />
          <rect 
            x="14.5" 
            y="24" 
            width="3" 
            height="2" 
            fill="white" 
            rx="1.5"
          />
          <circle cx="16" cy="15" r="2.5" fill="none" stroke="#2d3748" strokeWidth="0.5"/>
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}