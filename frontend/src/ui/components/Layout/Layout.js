import Header from "./components/Header";

import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.root}>
      <Header />
      <main className={styles.container}>{children}</main>
    </div>
  );
};

export default Layout;
