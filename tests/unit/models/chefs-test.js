import { moduleForModel, test } from 'ember-qunit';

moduleForModel('chefs', 'Unit | Model | chefs', {
  // Specify the other units that are required for this test.
  needs: []
});

test('should have attribute numChefs', function(assert) {
  let model = this.subject();
  let modelAttributes = Object.keys(model.toJSON());
  let hasAttr = modelAttributes.indexOf('numStudents') > -1;

  assert.ok(hasAttr);
});
