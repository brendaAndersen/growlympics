'use client'

import Form from 'next/form'
import { createPlant } from './../../plants/actions/actions'
import { Input } from '@/components/common/input/page'
import { Button } from "@/components/ui/button";
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type StateType = {
  id: number
  nome: string
  sigla: string
}

type CityType = {
  id: number
  nome: string
}

export default function CreatePage(){
    const [states, setStates] = useState<StateType[]>([])
    const [cities, setCities] = useState<CityType[]>([])
    const [selectedState, setSelectedState] = useState("")
    const [countries, setCountries] = useState<string[]>([])

    useEffect(() => {
        fetch("https://countriesnow.space/api/v0.1/countries")
        .then(res => res.json())
        .then(json => {
            setCountries(json.data.map((c: any) => c.country))
        })
    }, [])
    useEffect(() => {
        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
        .then(res => res.json())
        .then(setStates)
    }, [])

    useEffect(() => {
        if (!selectedState) return

        fetch(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedState}/municipios`
        )
        .then(res => res.json())
        .then(setCities)
    }, [selectedState])
        
    return (
        <>
            <div className="flex bg-background">
              <main className="mx-auto w-full max-w-3xl py-24 px-6">
       
                <header className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight text-center">
                        Register a Plant 🌱
                    </h2>
                    <p className="text-sm text-muted-foreground text-center pt-4 lg:pt-0 md:pt-0 lg:pb-0 md:pb-0 pb-4">
                        Add details about a newly planted tree here!
                    </p>
                </header>

                <Form action={createPlant} className="space-y-8">
                
                <section className="space-y-3">
                    <h3 className="text-sm font-semibold tracking-wide text-muted-foreground">
                    Where was it planted?
                    </h3>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    
                    <select  className={cn
                            (
                        "w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
                        "focus:outline-none focus:ring-2 focus:ring-ring"
                    )}>
                <option value="">Select country</option>
                {countries.map(c => (
                    <option key={c} value={c}>{c}</option>
                ))}
                </select>

                    <div className="relative">
                    <select
                        name="state"
                        required
                        onChange={(e) => setSelectedState(e.target.value)}
                        className={cn
                            (
                        "w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
                        "focus:outline-none focus:ring-2 focus:ring-ring"
                        )}
                    >
                        <option value="">Select a state</option>
                        {states.map((state) => (
                        <option key={state.id} value={state.sigla}>
                            {state.nome}
                        </option>
                        ))}
                    </select>
                    </div>

                    <div className="relative">
                    <select
                        name="city"
                        required
                        disabled={!selectedState}
                        className={cn(
                        "w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
                        "focus:outline-none focus:ring-2 focus:ring-ring",
                        "disabled:opacity-50"
                        )}
                    >
                        <option value="">
                        {selectedState ? "Select a city" : "Select a state first"}
                        </option>
                        {cities.map((city) => (
                        <option key={city.id} value={city.nome}>
                            {city.nome}
                        </option>
                        ))}
                    </select>
                    </div>

                    <Input
                    name="street"
                    placeholder="Street"
                    requiredField
                    className="sm:col-span-2"
                    />

                </div>
                </section>

                <section className="space-y-4">
                    <h3 className="text-sm font-semibold tracking-wide text-muted-foreground">
                    Plant identification
                    </h3>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Input name="scientificName" placeholder="Scientific name" requiredField />
                    <Input name="name" placeholder="Common name" requiredField />
                    <Input name="species" placeholder="Species" />
                    <Input name="kingdom" placeholder="Kingdom" />
                    <Input name="class" placeholder="Class" />
                    <Input name="order" placeholder="Order" />
                    <Input name="family" placeholder="Family" />
                    <Input name="genus" placeholder="Genus" />
                    <Input name="description" placeholder="Description" />
                    </div>
                </section>

                <div className="flex justify-center pt-4">
                    <Button
                    type="submit"
                    variant="secondary"
                    className="font-semibold hover:text-green-500"
                    >
                    Add to the Forest ✨
                    </Button>
                </div>

                </Form>
            </main>
           </div>
        </>
    )
}