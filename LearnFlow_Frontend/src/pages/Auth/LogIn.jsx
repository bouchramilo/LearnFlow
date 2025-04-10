// Login.js
import InputGroup from "../../components/InputGroup";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [fieldErrors, setFieldErrors] = useState({
    email: { show: false, message: "Veuillez entrer une adresse email valide" },
    password: {
      show: false,
      message: "Le mot de passe doit contenir au moins 8 caractères",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setIsSubmitting(true);

    setFieldErrors({
      email: { ...fieldErrors.email, show: false },
      password: { ...fieldErrors.password, show: false },
    });

    let isValid = true;
    const newErrors = { ...fieldErrors };

    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email.show = true;
      isValid = false;
    }

    if (!formData.password || formData.password.length < 8) {
      newErrors.password.show = true;
      isValid = false;
    }

    if (!isValid) {
      setFieldErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erreur lors de la connexion");
      }

      console.log("Connexion réussie:", data);

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      console.error("Erreur:", error);
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <div className="auth-container">
      <form className="auth-form" id="loginForm" onSubmit={handleLogin}>
        <h2>Connexion</h2>

        <InputGroup
          id="loginEmail"
          type="email"
          label="Email"
          errorMessage={fieldErrors.email.message}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          showError={fieldErrors.email.show}
          required
        />

        <InputGroup
          id="loginPassword"
          type="password"
          label="Mot de passe"
          errorMessage={fieldErrors.password.message}
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          showError={fieldErrors.password.show}
          required
        />

        <button type="submit" className="btn">
          Se connecter
        </button>
        <div className="auth-switch">
          Pas encore de compte ?<Link to="/register">Se connecter</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
