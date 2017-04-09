import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  isCookingToday: DS.attr('boolean'),
  numStudents: DS.attr('number', {defaultValue: 0})
});
