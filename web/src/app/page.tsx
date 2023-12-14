'use client'
import TableAgricultor, { AgricultorProps } from '@/components/agricultor/TableAgricultor'
import { api } from '@/services/axios';
import { useEffect, useState } from 'react';

export default function Home() {
  const [agricultores, setAgricultores] = useState<AgricultorProps[]>([]);

  async function fechData() {
    try {
      const response = await api.get(`agricultores/`);
      setAgricultores(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fechData();
  }, []);

  return (
    <div>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">CRUD Agricultores</h1>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

        <TableAgricultor data={agricultores} refresh={async () => fechData()} />
      </main>
    </div>
  )
}
