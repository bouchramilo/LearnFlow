export default function Header() {
  return (
    <nav>
      <div className="nav-container">
        <a href="index.html" className="logo">
          E-Learning
        </a>
        <button className="hamburger" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="nav-links">
          <a href="/home">Accueil</a>
          <a href="/login">Se connecter</a>
          <a href="/register">S'inscrire</a>
        </div>
      </div>
    </nav>
  );
}
