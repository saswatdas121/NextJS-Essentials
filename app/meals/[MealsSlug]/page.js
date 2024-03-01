import { getSingleMeal } from '@/lib/meals'
import classes from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation';

export async function generateMetadata({params})
{
    const meal=await getSingleMeal(params.MealsSlug);

    if(!meal)
    {
        notFound();
    }
    
    return {
        title:meal.title,
        description:meal.summary
    }
}
//Dynamic Metadata

export default async function MealDetailPage({params})
{
    const meal=await getSingleMeal(params.MealsSlug);

    if(!meal)
    {
        notFound();
    }

    meal.instructions=meal.instructions.replace(/\n/g,'<br/>')//Regular expression which replaces all line breaks with br tag

    return(
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={meal.image}fill></Image>
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>
                        by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                    </p>
                    <p className={classes.summary}>{meal.summary}</p>
                </div>
            </header>
            <main>
                <p className={classes.instructions} dangerouslySetInnerHTML={{
                     __html:meal.instructions,
                }}></p>
            </main>
        </>
    )
}
