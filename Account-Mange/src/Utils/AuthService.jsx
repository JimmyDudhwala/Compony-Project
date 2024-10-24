let users = [];

const AuthService = {
  login: (email, password) => {
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      return true;
    }
    return false;
  },

  register: (name, email, password) => {
    users.push({ name, email, password });
    console.log(users);
  },

  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem('user'));
  },

  updateUser: updatedUser => {
    const index = users.findIndex(u => u.email === updatedUser.email);
    if (index !== -1) {
      users[index] = updatedUser;
      localStorage.setItem('user', JSON.stringify(updatedUser));
    }
  },

  logout: () => {
    localStorage.removeItem('user');
    users = [];
    console.log(users);
  },
};

export default AuthService;
