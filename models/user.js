import { DataTypes, Model } from "sequelize";
import sequelize from "./model.js";

// const User = sequelize.define(
//   "User",
//   {
//     // Model attributes are defined here
//     // firstName: {
//     //   type: DataTypes.STRING,
//     //   allowNull: false,
//     // },

//     /* Short Hand */
//     firstName: DataTypes.STRING,

//     lastName: {
//       type: DataTypes.STRING,
//       // allowNull defaults to true

//       defaultValue: "Rathod",
//     },
//   },
//   {
//     // Other model options go here

//     /*
//       You can simply tell Sequelize the name of the table directly as well

//         IF you not specify a table name then it will make table name like 'Users' in DB.
//         Ex: model name is 'employee' which right after `sequelize.define(` then table name is something like 'employees'
//     */

//     tableName: "users",

//     /*
//       If you don't want created_at and update_at by default then you can use below command.
//     */
//     timestamps: false,

//     // I don't want createdAt
//     createdAt: false,

//     // I want updatedAt to actually be called updateTimestamp
//     updatedAt: "updateTimestamp",
//   }
// );

/*
 CREATE MODAL USING CLASS 
 2 Second Method
*/

class User extends Model {}

User.init(
  {
    // Model attributes are defined here

    // Model attributes are defined here
    //     // firstName: {
    //     //   type: DataTypes.STRING,
    //     //   allowNull: false,
    //     // },

    //     /* Short Hand */
    firstName: DataTypes.STRING,

    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true

      defaultValue: "Rathod",
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "User", // We need to choose the model name
  }
);

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

export default User;
