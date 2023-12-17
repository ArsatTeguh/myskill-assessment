import { isDataEmpty } from '@/lib/checkEmpty';
import { formatMonthYear } from '@/lib/formatDate';
import { initialState } from '@/lib/type';

const data = {
  avatar: 'avatar.jpg',
  banner: '',
  user_name: '',
  title: '',
  desc_data: '',
  portfolio: [
    {
      id: 1,
      job_position: 'Developer',
      company: 'Tech Co',
      description: 'Worked on web development projects',
      date_in: '2023-01',
      date_out: '2023-12',
    },
  ],
};
const data2 = {
  avatar: 'avatar.jpg',
  banner: 'example',
  user_name: 'example',
  title: 'example',
  desc_data: 'example',
  portfolio: [
    {
      id: 1,
      job_position: 'Developer',
      company: 'Tech Co',
      description: 'Worked on web development projects',
      date_in: '2023-01',
      date_out: '2023-12',
    },
  ],
};

test('megembalikan true jika salah satu data ada yang kosong', () => {
  const result = isDataEmpty(data);

  expect(result).toBe(true);
});

test('megembalikan true jika semua data terisi', () => {
  const result = isDataEmpty(data2);

  expect(result).toBe(false);
});

test('returns true if all values are empty strings', () => {
  const result = isDataEmpty(initialState);

  expect(result).toBe(true);
});

test('formats bulan dan tanggal valid', () => {
  const result1 = formatMonthYear('2023-01');
  expect(result1).toEqual('January 2023');
});

test('formats bulan dan tanggal tidak valid', () => {
  const result1 = formatMonthYear('');
  expect(result1).toEqual('Invalid Date');
});
