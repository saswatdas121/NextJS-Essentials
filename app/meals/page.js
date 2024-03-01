import MealsGrid from '@/components/meals-grid'
import classes from './page.module.css'
import Link from 'next/link'
import { getMeals } from '@/lib/meals'
import { Suspense } from 'react';


export const metadata = {
    title: 'Meals Page',
    description: 'Delicious meals, shared by a food-loving community.',
  };
//Static Metadata  

async function Meals()
{
    const meals=await getMeals();

    return <MealsGrid meals={meals}></MealsGrid>
}

export default async function MealsPage()
{
    
    return(
       <>
        <header className={classes.header}>
            <h1>
                Delicious Meals, created {''}
                <span className={classes.highlight}>by you</span>
            </h1>
            <p>
                Choose your favourite recipe and cook it yourself.It is easy and fun.
            </p>
            <p className={classes.cta}>
                <Link href="/meals/share">
                    Share your favourite meals
                </Link>
            </p>
        </header>
        <main className={classes.main}>
            <Suspense fallback={<p className={classes.loading}>Fetching Meals...</p>}>
                <Meals></Meals>
           </Suspense>
           {/* Suspense in React is used to have a loading screen till the time the data is loaded
           So Wrap Suspense with some code which will take time.
           Dont wrap suspense with Mealsgrid.The time is taken by getMeals() function ie 5 seconds
           So we have wrapped the code with Meals Component which has getMeals() function and MealsGrid Component  */}
        </main>
       
       </>
    )
}

