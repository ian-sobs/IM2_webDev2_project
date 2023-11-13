'use client'

import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export default function MyComponent() {
  const [rating, setRating] = useState(0)

  // Catch Rating value
  const handleRating = (number) => {
    setRating(number)

    // other logic
  }

  return (
    <>
        <Rating onClick={handleRating} ></Rating>
    </>
  )
}