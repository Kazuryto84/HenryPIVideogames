const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
      unique: true
  },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
      defaultValue: ['PC']
    },
    image: {
      type: DataTypes.STRING,
      
    },
    released: {
      type: DataTypes.DATE,
      
    },
    rating: {
      type: DataTypes.INTEGER,
     
        validate: {
          min: 1.0,
          max: 5,
        }
    }
  }, {
    timestamps: false
  });
};