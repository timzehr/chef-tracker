import { moduleFor, test } from 'ember-qunit';
// import Ember from 'ember';

moduleFor('controller:application', 'Unit | Controller | application', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('should increment number of students', function(assert) {

  let controller = this.subject();

  let chef = {
    numStudents: 5
    isSaved: false
    save() {
      isSaved = true;
    }
  }
  controller.send('incrementNumStudents', chef);
  assert.equal(chef.numStudents, 6);
});
