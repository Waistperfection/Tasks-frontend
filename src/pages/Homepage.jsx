import React from 'react'
import { Link } from 'react-router-dom'
import PageHeader from '../componenets/PageHeader/PageHeader'

function Homepage() {
  return (
    <>
    <div>
    <PageHeader>It is homepage</PageHeader>
    <PageHeader>of my project</PageHeader>
    <PageHeader>orimi task manager</PageHeader>
    </div>
    </>
  )
}

export default Homepage