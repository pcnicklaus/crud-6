module.exports = function (sequelize, DataTypes) {
  var Dog = sequelize.define('Dog', {
    name: DataTypes.STRING,
    breed: DataTypes.STRING,
    age: DataTypes.STRING,
    crazy: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });
  return Dog;
};
