import { Post } from '@/lib/API/portofolio';
import { PortfolioItem, intialPortofolio } from '@/lib/type';
import {
  addPortfolio,
  changePortofolio,
  fetchPortoData,
  removePortofolio,
  setData,
  setImage,
} from '@/state/portoSlice';
import { RootState } from '@/state/store';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isDataEmpty } from '@/lib/checkEmpty';
import { ThunkDispatch } from '@reduxjs/toolkit';
import ActionButton from './actionButton';
import InputImage from './inputImage';
import Portofolio from './portofolio';
import Preview from './preview';
import Profile from './profile';
import NotifyAlert from '../ui/notifyAlert';

function MainForm() {
  const [typeAlert, setTypeAlert] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const data = useSelector((state: RootState) => state.porto);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    dispatch(setData({ [name]: value }));
  };

  const onAvatar = (file: string) => dispatch(setImage({ name: 'avatar', file }));

  const onBanner = (file: string) => dispatch(setImage({ name: 'banner', file }));

  const onAddPortofolio = () => dispatch(addPortfolio(intialPortofolio));

  const handleChange = (
    id: number,
    key: keyof PortfolioItem,
    value: string | Date,
  ) => {
    dispatch(changePortofolio({ id, key, value }));
  };

  const onDeletePortofolio = (id: number) => dispatch(removePortofolio({ id }));

  const onEmpty = isDataEmpty(data);

  const handleSubmit = async () => {
    setLoading(true);
    const response = await Post(data);
    if (response) {
      setTypeAlert('success');
    } else {
      setTypeAlert('error');
    }
    setLoading(false);
    setTimeout(() => setTypeAlert(''), 3000);
  };

  useEffect(() => {
    dispatch(fetchPortoData());
  }, [dispatch]);

  return (
    <div className="relative px-4 w-full">
      {typeAlert.trim() !== '' ? <NotifyAlert type={typeAlert} /> : null}
      <div className="flex flex-col gap-4 py-8">
        <ActionButton
          submit={handleSubmit}
          add={onAddPortofolio}
          load={loading}
          check={onEmpty}
        />
        <InputImage
          selectedFile={data.banner}
          setSelectedFile={onBanner}
          title="Background Image"
        />
        <InputImage
          selectedFile={data.avatar}
          setSelectedFile={onAvatar}
          title="Background Profile"
        />
        <Profile handler={handleInputChange} formData={data} />
        <div className="flex flex-col gap-3">
          {data.portfolio?.map((item, index) => (
            <Portofolio
              index={index + 1}
              data={item}
              key={item.id}
              handler={handleChange}
              remove={onDeletePortofolio}
            />
          ))}
        </div>
      </div>
      <div className="absolute hidden lg:block right-2 top-[6rem] w-[500px]  ">
        <Preview />
      </div>
    </div>
  );
}

export default MainForm;
