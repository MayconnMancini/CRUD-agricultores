"use client";
import { api } from "@/services/axios";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation'

import * as yup from 'yup';
import { validateCpf } from "@/utils/validateCpf";
import { validateCnpj } from "@/utils/validateCnpj";

export const agricultorSchema = yup.object({
  razaoSocial: yup.string().required('Informe a razão social'),
  nomeFantasia: yup.string().required('Informe o nome fantasia'),
  tipo: yup.string().required('Informe o tipo'),
  cnpjCpf: yup.string().required('Informe o CPF/CNPJ').test('valida-cnpj-cpf', 'CPF/CNPJ inválido', function (value) {
    return isValidCpfCnpj(value);
  }),
  cidade: yup.string().required('Informe a cidade'),
  estado: yup.string().required('Informe o estado'),
});

function isValidCpfCnpj(value: any) {
  if (value.length === 11) {
    return validateCpf(value);
  }
  if (value.length === 14) {
    return validateCnpj(value);
  }
  return false;
}

export default function AgricultorCreate() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(agricultorSchema),
  });

  async function handleSignIn(data: any) {
    try {
      const response = await api.post(`agricultores/`, data);
      if (response) {
        alert("Cadastro realizado com sucesso")
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Cadastrar Agricultor
          </h1>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div>
          <form onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900 border-b border-gray-900/10">Dados Agricultor</h2>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="razaoSocial" className="block text-sm font-medium leading-6 text-gray-900">
                      Razão social
                    </label>
                    <div className="mt-2">
                      <input
                        {...register('razaoSocial')}
                        type="text"
                        name="razaoSocial"
                        id="razaoSocial"
                        required
                        className={`p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.razaoSocial ? 'border-red-500' : ''
                          }`}
                      />
                      {errors.razaoSocial && (
                        <p className="mt-2 text-sm text-red-500">{errors.razaoSocial.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="nomeFantasia" className="block text-sm font-medium leading-6 text-gray-900">
                      Nome Fantasia
                    </label>
                    <div className="mt-2">
                      <input
                        {...register('nomeFantasia')}
                        type="text"
                        name="nomeFantasia"
                        id="nomeFantasia"
                        required
                        className={`p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.nomeFantasia ? 'border-red-500' : ''
                          }`}
                      />
                      {errors.nomeFantasia && (
                        <p className="mt-2 text-sm text-red-500">{errors.nomeFantasia.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="tipo" className="block text-sm font-medium leading-6 text-gray-900">
                      Tipo
                    </label>
                    <div className="mt-2">
                      <select
                        {...register('tipo')}
                        id="tipo"
                        name="tipo"
                        className={`p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.tipo ? 'border-red-500' : ''
                          }`}
                      >
                        <option>PJ</option>
                        <option>PF</option>
                      </select>
                      {errors.tipo && (
                        <p className="mt-2 text-sm text-red-500">{errors.tipo.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="cnpjCpf" className="block text-sm font-medium leading-6 text-gray-900">
                      CPF/CNPJ
                    </label>
                    <div className="mt-2">
                      <input
                        {...register('cnpjCpf')}
                        id="cnpjCpf"
                        name="cnpjCpf"
                        type="text"
                        required
                        className={`p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.cnpjCpf ? 'border-red-500' : ''
                          }`}
                      />
                      {errors.cnpjCpf && (
                        <p className="mt-2 text-sm text-red-500">{errors.cnpjCpf.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="celular" className="block text-sm font-medium leading-6 text-gray-900">
                      Celular
                    </label>
                    <div className="mt-2">
                      <input
                        //{...register('celular')}
                        id="celular"
                        name="celular"
                        type="number"
                        className={`p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6}`}
                      />

                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="cidade" className="block text-sm font-medium leading-6 text-gray-900">
                      Cidade
                    </label>
                    <div className="mt-2">
                      <input
                        {...register('cidade')}
                        type="text"
                        name="cidade"
                        id="cidade"
                        required
                        className={`p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.cidade ? 'border-red-500' : ''
                          }`}
                      />
                      {errors.cidade && (
                        <p className="mt-2 text-sm text-red-500">{errors.cidade.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label htmlFor="estado" className="block text-sm font-medium leading-6 text-gray-900">
                      Estado
                    </label>
                    <div className="mt-2">
                      <input
                        {...register('estado')}
                        type="text"
                        name="estado"
                        id="estado"
                        required
                        className={`p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${errors.razaoSocial ? 'border-red-500' : ''
                          }`}
                      />
                      {errors.estado && (
                        <p className="mt-2 text-sm text-red-500">{errors.estado.message}</p>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button onClick={() => router.back()} type="button" className="text-sm font-semibold leading-6 text-gray-900">
                Voltar
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Salvar
              </button>
            </div>
          </form>


        </div>
      </main>
    </div>

  );
}
