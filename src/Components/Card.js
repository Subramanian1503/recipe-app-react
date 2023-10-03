import styles from '../Styles/card.module.css';

const Card = (props) => {
  return (
    <div className={styles.card}>
      <div>
        <img
          className={styles.img}
          src={props.recipe.recipe.image}
          alt={props.recipe.recipe.label}
        />
      </div>
      <div>
        <a href={props.recipe.recipe.uri}>
          <h2>{props.recipe.recipe.label}</h2>
        </a>
        <a href={props.recipe.recipe.shareAs}>
          <button className={styles.btn}>See More...</button>
        </a>
      </div>
    </div>
  );
};

export default Card;
