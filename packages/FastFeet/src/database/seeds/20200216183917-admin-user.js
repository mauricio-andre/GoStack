const bcrypt = require('bcryptjs');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Administrador',
          email: 'admin@fastfeet.com',
          passwordHash: bcrypt.hashSync('123456', 8),
          provider: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
