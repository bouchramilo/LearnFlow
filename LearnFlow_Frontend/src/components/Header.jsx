export default function Header() {
  return (
    <nav>
      <div class="nav-container">
        <a href="index.html" class="logo">
          E-Learning
        </a>
        <button class="hamburger" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="nav-links">
          <a href="/home">Accueil</a>
          <a href="/login">Se connecter</a>
          <a href="/register">S'inscrire</a>
        </div>
      </div>
    </nav>
  );
}
