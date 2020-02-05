module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true,
    // acho o camelCase mais atraente, sorry =)
    // underscored: true,
    // underscoredAll: true,
  },
};
