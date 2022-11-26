import { useState } from "react"
// import { AddCategory } from "./components/AddCategory";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Rayados' ]);

    const onAddCategory = ( newCategory ) => {
        // console.log(newCategory);
        if ( categories.includes(newCategory) ) return;
        setCategories( [ newCategory, ...categories ] );
    }

    return(
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>
            
            {/* Input */}
            <AddCategory 
                // setCategories={ setCategories }
                onNewCategory={ onAddCategory }
            />

            {/* Listado de Gif */}
            { categories.map( ( category ) => ( 
                <GifGrid key={ category } category={ category } /> 
            ) ) }
                
                {/* Gif Item */}
        </>
    )
}