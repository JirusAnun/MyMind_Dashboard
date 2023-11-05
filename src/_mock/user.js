import { sample } from 'lodash';
import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

export const users = [...Array(24)].map((_, index) => ({
  id: faker.string.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  phone: sample([
    '0905314664',
    '0973141436',
    '0214488643',
    '0123523423',
    '0234234634',
    '0927234233',
    '0992342234',
    '0972341312',
    '0831231232',
    '0342131233',
  ]),
  name: faker.person.fullName(),
  company: faker.company.name(),
  isVerified: sample([
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
  ]),
  status: sample(['Severe', 'Extreme Severe']),
  role: sample([
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
  ]),
}));
