'use server'

import { redirect } from "next/navigation";
import { saveMeal } from "./meals"
import { revalidatePath } from "next/cache";

function isInvalidText()
{
    return !meal.title || meal.title.trim()=='';
}

export async function submitMeal(prevState,formData)
{
    console.log(formData)
    const meal={
        title:formData.get('title'),
        summary:formData.get('summary'),
        instructions:formData.get('instructions'),
        image:formData.get('image'),
        creator:formData.get('name'),
        creator_email:formData.get('email')
    }

    if(isInvalidText(meal.title) || isInvalidText(meal.instructions) || isInvalidText(meal.summary) || isInvalidText(meal.creator) || isInvalidText(meal.creator_email) || !meal.creator_email.includes('@') || !meal.image || meal.image.size==0)   
    {
          return {message:'Invalid Input'}
    }

    await saveMeal(meal);
    revalidatePath('/meals')
    redirect('/meals')
}