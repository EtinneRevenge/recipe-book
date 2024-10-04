export function RecipeItem({ recipe }) {
    return (
        <div>
            {/* <img src="" alt=""></img> */}
            <h2>{recipe.name}</h2>
            <button>Add to favorites</button>
        </div>
    )
}