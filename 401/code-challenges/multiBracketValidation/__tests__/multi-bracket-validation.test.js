'use strict';

const validator = require('../multi-bracket-validation');

describe('Validates all cases', () => {

  test('Validates empty string to false', () => {

    let test = '';

    expect(validator(test)).toEqual(false);

  });

  test('Validates to false if no valid openers or closers', () => {

    let test = 'asdfjwe.$%$;s.1`34-=zfr?';

    expect(validator(test)).toEqual(false);

  });

  test('Validates to false if only openers or closers', () => {

    let test = '{[asdfj;jadfkl;([{';

    expect(validator(test)).toEqual(false);

  });

  test('Validates to true with good mixed input', () => {

    let test = 'asgdsa{asdf[asd(asdf)asdf]asdf}asga';

    expect(validator(test)).toEqual(true);

  });

  test('Validates to false with bad mixed input', () => {

    let test1 = 'asfa}asdf{erg(agr)A[]'; //closer before opener
    let test2 = 'asdf{asdf(asd[])}}}'; //extra closers
    let test3 = 'jgggar{{{{(arg[arg]arg)arga'; //extra openers

    expect(validator(test1)).toEqual(false);
    expect(validator(test2)).toEqual(false);
    expect(validator(test3)).toEqual(false);

  });

  test('Validates to false with technically good input, but still bad', () => {

    let test = 'asdf{[(]asdf)asdf}';

    expect(validator(test)).toEqual(false);

  });

});
