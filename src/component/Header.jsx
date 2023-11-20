import { Link } from "react-router-dom";

function Header({ pageTitle, isUserAuthenticated }) {
  return (
    <header>
      <img
        src="https://www.zarla.com/images/zarla-lectrodomus-1x1-2400x2400-20220705-x44pr4y4bq86kgcbw36t.png?crop=1:1,smart&width=250&dpr=2"
        alt="electro menager"
      />

      <p>{pageTitle}</p>

      <nav>
        <ul>
          <li>
            <Link to="/">{pageTitle === "HomePage" ? <strong>Home</strong> : <p>Home</p>}</Link>
          </li>
          <li>
            <Link to="/products">
              {pageTitle === "Page de liste de produits" ? <strong>Products</strong> : <p>Products</p>}
            </Link>
          </li>
        </ul>
      </nav>
      {isUserAuthenticated ? <p>Bonjour</p> : <p>Connectez-vous </p>}
    </header>
  );
}

export default Header;
