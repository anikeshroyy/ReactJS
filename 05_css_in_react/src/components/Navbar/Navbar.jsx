import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <h3>Anikesh Roy</h3>
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Sign Up</li>
        </ul>
      </div>
    </div>
  );
};
