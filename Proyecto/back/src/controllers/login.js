const usuarios = require("../utils/usuarios");

const login = (req, res) => {
  const { email, password } = req.query;

  // Buscar si existe un usuario con el email y la contraseña proporcionados
  const usuario = usuarios.find(
    (usuario) => usuario.email === email && usuario.password === password
  );

  if (usuario) {
    // Usuario válido
    res.status(200).json({ access: true });
  } else {
    // Usuario inválido
    res.status(200).json({ access: false });
  }
};

module.exports = login;