const Model = require('objection').Model;

class Itinerary extends Model {
  static get tableName() {
    return 'itineraries'
  }

//comment line
  static get jsonSchema () {
    return {
      type: 'object',
      required: [ 'ownerID', 'itinName', 'isActive', 'isPublic' ],

      properties: {
        id:        { type: 'integer'},
        ownerID:   { type: 'string', minLength: 1, maxLength: 255 },
        itinName:  { type: 'string', minLength: 1, maxLength: 255 },
        isActive:  { type: 'integer' },
        isPublic:  { type: 'integer' }
      }
    };
  }
}

module.exports = Itinerary;