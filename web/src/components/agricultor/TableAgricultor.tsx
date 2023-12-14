'use_client'
import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from '@/services/axios';

export interface AgricultorProps {
  id: string;
  razaoSocial: string;
  nomeFantasia: string;
  tipo: string;
  cnpjCpf: string;
  celular: string;
  cidade: string;
  estado: string;
}

interface TableAgricultorProps {
  data: AgricultorProps[];
  refresh: () => {};
}

export default function TableAgricultor({ data, refresh }: TableAgricultorProps) {
  const router = useRouter();
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [open, setOpen] = useState(false)
  const cancelButtonRef = useRef(null)

  const handleDeleteClick = (id: string) => {
    setSelectedItemId(id);
    setOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      const response = await api.delete(`agricultores/${selectedItemId}`);

      if (response) {
        alert('Agricultor excluido com sucesso!')
      }
      refresh();
    } catch (error) {
      console.log(error);
    } finally {

      setOpen(false);
      setSelectedItemId(null);
    }
  };

  return (

    <div className="w-full max-w-7xl m-auto relative">
      <div className="mb-4">
        <button
          onClick={() => router.push(`/agricultor/create/`)}
          className="p-2 bg-blue-500 rounded-md text-white hover:bg-blue-400"
        >
          Cadastrar
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto bg-white shadow-md rounded-md overflow-hidden">
          <thead className="text-white bg-indigo-500">
            <tr>
              <th className="py-2">ID</th>
              <th className="py-2">Razão Social</th>
              <th className="py-2">Nome Fantasia</th>
              <th className="py-2">Tipo</th>
              <th className="py-2">CPF/CNPJ</th>
              <th className="py-2">Celular</th>
              <th className="py-2">Cidade</th>
              <th className="py-2">Estado</th>
              <th className="py-2">Ações</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item: AgricultorProps) => (
                <tr key={item.id} className="border-b border-slate-200">
                  <td className="py-3">{item.id}</td>
                  <td className="py-3">{item.razaoSocial}</td>
                  <td className="py-3">{item.nomeFantasia}</td>
                  <td className="py-3">{item.tipo}</td>
                  <td className="py-3">{item.cnpjCpf}</td>
                  <td className="py-3">{item.celular}</td>
                  <td className="py-3">{item.cidade}</td>
                  <td className="py-3">{item.estado}</td>
                  <td className="py-3">
                    <span
                      onClick={() => handleDeleteClick(item.id)}
                      className="cursor-pointer text-red-500 hover:underline"
                    >
                      Excluir
                    </span>{" "}
                    |{" "}
                    <Link href={`/agricultor/${item.id}/edit/`} passHref>
                      <span className="text-yellow-500 hover:underline">Editar</span>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Modal de confirmação para exclusão */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true" />
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                          Excluir Agricultor
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Tem certeza que deseja excluir o Agricultor?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      onClick={() => handleDeleteConfirm()}
                    >
                      Excluir
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => { setSelectedItemId(null); setOpen(false) }}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
