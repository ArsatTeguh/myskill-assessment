export interface PortfolioItem {
  id: number;
  job_position: string;
  company: string;
  description: string;
  date_in: string;
  date_out: string;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface dataPorto {
  avatar: string;
  banner: string;
  user_name: string;
  title: string;
  desc_data: string;
}

export interface PortoState {
  id?: number | string;
  avatar: string;
  banner: string;
  user_name: string;
  title: string;
  desc_data: string;
  portfolio: PortfolioItem[];
}

export const initialState: PortoState = {
  avatar: '',
  banner: '',
  user_name: '',
  title: '',
  desc_data: '',
  portfolio: [
    {
      id: new Date().getTime(),
      job_position: '',
      company: '',
      description: '',
      date_in: '',
      date_out: '',
    },
  ],
};

export const intialPortofolio: PortfolioItem = {
  id: new Date().getTime(),
  job_position: '',
  company: '',
  description: '',
  date_in: '',
  date_out: '',
};
