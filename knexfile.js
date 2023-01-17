// Update with your config settings.

module.exports = {
  development: {
    client: "mysql",
    connection: {
      database: "miniblog_dev",
      user: "miniblog",
      password: "1mM-SNBHNBde7Q",
    },
    pool: {
      min: 2,
      max: 10,
    },
  },

  staging: {
    client: "mysql",
    connection: {
      database: "miniblog_staging",
      user: "miniblog",
      password: "1mM-SNBHNBde7Q",
    },
    pool: {
      min: 2,
      max: 10,
    },
  },

  production: {
    client: "mysql",
    connection: {
      database: "miniblog",
      user: "miniblog",
      password: "1mM-SNBHNBde7Q",
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
};
