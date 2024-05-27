import React from 'react'
import Header from './_components/header'

const layout = ({children}) => {
  return (
    <div>
        <Header />
        {children}
    </div>
  )
}

export default layout