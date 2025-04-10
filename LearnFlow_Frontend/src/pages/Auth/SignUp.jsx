import InputGroup from "../../components/InputGroup";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [fieldErrors, setFieldErrors] = useState({
    name: { show: false, message: "Le nom est requis" },
    email: { show: false, message: "Veuillez entrer une adresse email valide" },
    password: {
      show: false,
      message: "Le mot de passe doit contenir au moins 8 caractères",
    },
    password_confirmation: {
      show: false,
      message: "Les mots de passe ne correspondent pas",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleRegister(e) {
    e.preventDefault();
    setIsSubmitting(true);

    setFieldErrors({
      name: { ...fieldErrors.name, show: false },
      email: { ...fieldErrors.email, show: false },
      password: { ...fieldErrors.password, show: false },
      password_confirmation: {
        ...fieldErrors.password_confirmation,
        show: false,
      },
    });

    let isValid = true;
    const newErrors = { ...fieldErrors };

    if (!formData.name.trim()) {
      newErrors.name.show = true;
      isValid = false;
    }

    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email.show = true;
      isValid = false;
    }

    if (!formData.password || formData.password.length < 8) {
      newErrors.password.show = true;
      isValid = false;
    }

    if (formData.password !== formData.password_confirmation) {
      newErrors.password_confirmation.show = true;
      isValid = false;
    }

    if (!isValid) {
      setFieldErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erreur lors de l'inscription");
      }

      console.log("Inscription réussie:", data);

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
      <form onSubmit={handleRegister} className="auth-form" id="registerForm">
        <h2>Inscription</h2>

        <InputGroup
          id="registerName"
          type="text"
          label="Nom complet"
          errorMessage={fieldErrors.name.message}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          showError={fieldErrors.name.show}
          required
        />

        <InputGroup
          id="registerEmail"
          type="email"
          label="Email"
          errorMessage={fieldErrors.email.message}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          showError={fieldErrors.email.show}
          required
        />

        <InputGroup
          id="registerPassword"
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

        <InputGroup
          id="registerPasswordConfirm"
          type="password"
          label="Confirmer le mot de passe"
          errorMessage={fieldErrors.password_confirmation.message}
          value={formData.password_confirmation}
          onChange={(e) =>
            setFormData({ ...formData, password_confirmation: e.target.value })
          }
          showError={fieldErrors.password_confirmation.show}
          required
        />

        <button type="submit" className="btn">
          S'inscrire
        </button>

        <div className="auth-switch">
          Déjà un compte ? <Link to="/login">Se connecter</Link>
        </div>
      </form>
    </div>
  );
}
