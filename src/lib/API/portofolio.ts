import { PortoState } from '../type';

export const Post = async (data: PortoState) => {
  let response;
  try {
    if (data.id) {
      response = await fetch(`${process.env.NEXT_PUBLIC_URL}/${data.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    } else {
      response = await fetch(`${process.env.NEXT_PUBLIC_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    }
    if (response.ok) {
      return true;
    }
    return false;
  } catch (error) {
    console.error('Fetch error:', error);
  }
};

export const Getter = async (): Promise<PortoState[] | null> => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_URL!, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    if (response.ok) {
      return data;
    }
    return null;
  } catch (error) {
    throw error;
  }
};
