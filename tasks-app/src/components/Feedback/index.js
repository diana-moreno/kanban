import React from 'react'
import './index.sass'

export default function({ message }) {
  return (
    <p className="feedback__message feedback__inDetail">{message}</p>
  )
}