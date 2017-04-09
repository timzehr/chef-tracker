import Ember from 'ember';

export default Ember.Controller.extend({
  numChefsCooking: Ember.computed.filterBy('model', 'isCookingToday', true),
  numberOfStudentsPerChef: Ember.computed.mapBy('model', 'numStudents'),
  totalNumberStudents: Ember.computed.sum('numberOfStudentsPerChef'),
  actions: {
    makeUnavailable(chef) {
      Ember.set(chef, 'isCookingToday', false);
      chef.save();
    },
    makeAvailable(chef) {
      Ember.set(chef, 'isCookingToday', true);
      chef.save();
    },
    saveNewChef() {
      this.get('store').createRecord('chefs', {
        isCookingToday: false,
        name: this.get('newChef')
      }).save()
      this.set('newChef', '');
    },
    fireChef(chef) {
      chef.destroyRecord();
    },
    incrementNumStudents(chef) {
      chef.incrementProperty('numStudents');
      chef.save();
    },
    decrementNumStudents(chef) {
      if (chef.get('numStudents') > 0) {
        chef.decrementProperty('numStudents');
        chef.save();
      }

    }
  }
});
