const TilesetModel = require('../../models/mongo-tileset')
const {
    GraphQLList,
    GraphQLNonNull,
    GraphQLString,
} = require('graphql');

const TilesetType = require('../types/TilesetType')

module.exports = {
    type: TilesetType,
    args: {
        name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        id: {
            type: new GraphQLNonNull(GraphQLString)
        },
        owner: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve: (root, params) => {
        console.log(params.name)
        TilesetModel.findOne({ _id: params.id }).then(currentTileset => {
            if (!currentTileset) throw new Error('error')
            else {
                let { width, height, editors, imageId, tileWidth, tileHeight, owner } = currentTileset
                const index = editors.indexOf(params.owner)
                if (index !== -1) {
                    editors.splice(index, 1)
                }
                editors.push(owner)
                const newTileset = new TilesetModel({
                    name: params.name,
                    owner: params.owner,
                    width, height, imageId, tileWidth, tileHeight, editors
                }).save()
                if (!newTileset) throw new Error('Error')
                return newTileset
            }
        })
    }
}