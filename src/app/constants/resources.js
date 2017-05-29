/* eslint camelcase: 0 */
const API_URL = process.env.KOTT_API_URL;

export const resources = {
  golfer: {
    plural: 'golfers'
  },
  team: {
    plural: 'teams'
  },
  roster_slot: {
    plural: 'roster_slots'
  }
};

Object.keys(resources).forEach((key) => {
  let resource = resources[key];
  resource.url = `${API_URL}/${resource.plural}`;
});

export default resources;
