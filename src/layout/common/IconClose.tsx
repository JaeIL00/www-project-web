import React from 'react'

interface IconCloseProps {
  width: string
  color: string
}

export const IconClose = ({ width, color }: IconCloseProps) => {
  return (
    <svg width={width} height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.8065 13.0083L0.499756 1.68156L1.68066 0.499756L12.9868 11.8259L12.9869 11.8258L12.9907 11.8299L12.9911 11.8303L24.3028 0.499758L25.4837 1.68156L14.193 12.9922L25.4998 24.319L24.3189 25.5008L13.0072 14.1703L1.69673 25.5008L0.51582 24.319L11.8065 13.0083Z"
        fill={color}
      />
    </svg>
  )
}
