import React from 'react'
import './index.sass'

export default function({ message }) {
  return (
    <p className="feedback">{message}</p>
  )
}