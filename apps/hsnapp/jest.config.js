module.exports = {
  name: 'hsnapp',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/hsnapp',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
