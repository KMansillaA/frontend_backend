'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  /*class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  /*static associate(models) {
    // define association here
  }
}*/


    const Cliente = sequelize.define("Cliente", {
      nombre: DataTypes.STRING,
      correo: DataTypes.STRING
    });

    


    /*Cliente.init({
      nombre: DataTypes.STRING,
      correo: DataTypes.STRING
    }, {
      sequelize,
      modelName: 'Cliente',
    });*/

    Cliente.associate = (models) => {
      Cliente.hasMany(models.Pedido, { foreignKey: "clienteId" });
      };



    return Cliente;
  };