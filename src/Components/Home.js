import styles from '../Styles/home.module.css';
import API from '../Utils';
import { useState } from 'react';
import { useEffect } from 'react';
import Card from './Card';

const Home = () => {
  // Defining a variable to get input from the user to search for the recipe
  const [input, setInput] = useState('');
  const [recipies, setRecipies] = useState([]);
  useEffect(() => {
    const getRecipeies = async () => {
      // Get the input value
      const searchQuery = input;

      // construct headers object with content-type and Accept
      const headers = {
        'content-type': 'application/json',
        Accept: 'application/json',
      };

      // Fetch the recipies for this input value
      const search_response = await fetch(
        `${API.ROOT_URL}/api/recipes/v2?type=public&q=${searchQuery}&app_id=${API.APP_ID}&app_key=${API.APP_KEY}`,
        headers
      );

      const response = await search_response.json();

      // Set the recipies to the state
      setRecipies(response.hits);
    };

    getRecipeies();
  }, [input]);

  return (
    <div>
      <h1>Recipe Search</h1>
      <input
        className={styles.search}
        type="search"
        placeholder="Search a recipe"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className={styles.list}>
        {recipies.map((recipe) => (
          <Card recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;
