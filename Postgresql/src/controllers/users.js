const db = require('../models')
const User = db.User
const Mars = db.Mars

const getUserById = async (id) => {
    const user = await User.findByPK(id)
    delete user.password
    return user
}
const getUserByEmail = async (email) => {
    const user = await User.findOne({where: {email:email} })
    return user
}
const toggleTaskToFavorite = async ({userId, marsId}) => {
    let user = await User.findByPk(userId, {
        attributes: {exclude :  ['password', 'salt']},
        include : {
            model: db.Mars,
            as: 'favorites',
        }
    })

    let currentFavList = user.favorites.map(item => item.id) || [];
console.log(currentFavList)
    const existed = currentFavList.includes(marsId)
    // const marsDB = await Mars.findByPk(nasaId)
    let isAdded = false

    if (!existed) {
        const mars = await Mars.findByPk(marsId)
        if (!mars) {
            throw new Error('Mars not found');
        }
        user.addFavorites(mars)
        isAdded = true;
        console.log(isAdded)

        } else {
           const newList = currentFavList.filter(item => item !== marsId)
           user.setFavorites(newList)
        }
        return {user, isAdded}
    }


module.exports = {
    toggleTaskToFavorite,
    getUserByEmail,
    getUserById
}