'use client';
import Image from 'next/image'

import { useState } from 'react'


function Header() {
  return (<div className='display-table mt-3 max-w-prose p-1'>
    <h1 className='mt-6 text-3xl font-medium text-black'>Task 1</h1>
    <table className="mt-3 regid w-full max-w-prose">
      <thead></thead>
      <tbody>
      <tr>
        <td>Registration number</td>
        <td>21BCE5841</td>
      </tr>
      <tr>
        <td>Name</td>
        <td>Srevin Saju</td>
      </tr>
      </tbody>
    </table>
    </div>)

}


function WordCounter() {
  let [counter, valueChanged] = useState(0);

  let handleChange = (e: any) => {
    if (e.target.value.trim() == "") {
      valueChanged(0)
    } else {
      valueChanged(  e.target.value.trim().split(" ").length )
    }
  }


  return (<div className='mx-auto mt-3 w-full max-w-prose p-1'>
    <textarea className='h-80 rounded box-border w-full p-3' onChange={handleChange}></textarea>
    <p className='prose mt-3'>Number of words: {counter}</p>
  </div>)
}



export default function Home() {

  return (
    <main className="w-full">
      <Header />

      <WordCounter />
    </main>
  )
}
