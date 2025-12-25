'use server'
import { redirect } from 'next/navigation'
 
export async function createPlant(formData: FormData) {
  console.log(formData)
  //redirect(`/plants/${formData.id}`)
}