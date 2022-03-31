import { formatDistance } from 'date-fns';
import vi from 'date-fns/locale/vi';

export const formatDate = (date: Date) => {
  return formatDistance(new Date(date), new Date(Date.now()), {
    addSuffix: true,
    locale: vi,
  });
};
