const { User, Article } = require("./db");

const resolvers = {
  Query: {
    users: () => {
      return User.find().exec();
    },
    articles: () => {
      return Article.find().exec();
    },
    getUserById: async (parent, args) => {
      const { id } = args;
      try {
        const user = await User.findById(id);
        if (!user) {
          throw new Error("Pengguna tidak ditemukan");
        }
        return user;
      } catch (error) {
        console.error("Gagal mendapatkan pengguna:", error);
        throw new Error("Gagal mendapatkan pengguna");
      }
    },
    getUserByEmail: async (parent, args) => {
      const { email } = args;
      try {
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error("Pengguna tidak ditemukan");
        }
      } catch (error) {
        console.error("Gagal mendapatkan pengguna:", error);
        throw new Error("Gagal mendapatkan pengguna");
      }
    },
  },

  Mutation: {
    addUser: (parent, args) => {
      const user = new User(args);
      return user.save();
    },
    updateUser: async (parent, args) => {
      const { id, name, email } = args;
      try {
        const updatedUser = await User.findByIdAndUpdate(
          id,
          { name, email },
          { new: true }
        );
        return updatedUser;
      } catch (error) {
        console.error("Gagal update pengguna:", error);
        throw new Error("Gagal update pengguna");
      }
    },
    deleteUser: async (parent, args) => {
      const { id } = args;
      try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
          throw new Error("Data tidak ditemukan");
        }
        return deletedUser;
      } catch (error) {
        console.error("Gagal menghapus pengguna:", error);
        throw new Error("Gagal menghapus pengguna");
      }
    },
  },
};

module.exports = { resolvers };
