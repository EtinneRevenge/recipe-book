import Header from './header/Header'
import { RecipeItem } from './recipe-item/RecipItem'
import { User } from './user/user'




function App() {


  return (
    <section>
      <Header />
      <User></User>
      <div>
        <RecipeItem recipe={{
          id: 1,
          name: 'Суп'
        }} />
        <RecipeItem recipe={{
          id: 2,
          name: 'Макароны по флотски'
        }} />
        <RecipeItem recipe={{
          id: 3,
          name: 'Каша'
        }} />

      </div>
    </section>
  )
}

export default App
