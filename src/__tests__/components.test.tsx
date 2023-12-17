import React from 'react';
import InputImage from '@/components/form/inputImage';
import { render, screen } from '@testing-library/react';

describe('component', () => {
  it('component image jika data file kosong ', async () => {
    render(
      <InputImage title="image" selectedFile="" setSelectedFile={() => {}} />,
    );
    const title = screen.getByTestId('label-image');
    const imageLabel = screen.getByTestId('input-label');
    // label harus sama dengan props title
    expect(title).toHaveTextContent('image');
    // description image harus terlihat
    expect(imageLabel).toBeInTheDocument();
    expect(imageLabel).toHaveTextContent('Drag and drop image files or');
  });

  it('component image jika data file ada ', async () => {
    render(
      <InputImage
        title="image"
        selectedFile="/banner.png"
        setSelectedFile={() => {}}
      />,
    );
    const title = screen.getByTestId('label-image');
    const input = screen.getByTestId('image-file');
    // label harus sama dengan props title
    expect(title).toHaveTextContent('image');
    // description image harus terlihat
    expect(input).toBeInTheDocument();
  });
});
