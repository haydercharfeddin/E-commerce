module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define("Products", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    colours: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },   
    size: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    discount: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userid: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      references: { model: "Users", key : "id"}
    },
  });

  Products.associate = (models) => {
    Products.hasMany(models.Review, {
      onDelete: "cascade",
    });
    Products.belongsTo(models.User, {
      onDelete: "cascade",
    });
  };

  return Products;
};