import Image from 'next/image';
import React, { useCallback } from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';

interface CustomFileInputProps {
  title: string;
  selectedFile: string;
  setSelectedFile: (file: any) => void;
}

function dropzoneStyles() {
  return {
    height: '100%',
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  };
}

function InputImage({
  title,
  selectedFile,
  setSelectedFile,
}: CustomFileInputProps) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        const reader = new FileReader();

        reader.onload = () => {
          const base64Data = reader.result;
          setSelectedFile(base64Data);
        };

        reader.readAsDataURL(file);
      }
    },
    [setSelectedFile],
  );

  const dropzoneOptions: DropzoneOptions = {
    onDrop,
    accept: {
      'image/png': ['.png'],
      'image/jpg': ['.jpg'],
      'image/jpeg': ['.jpeg'],
    },
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone(dropzoneOptions);

  return (
    <div className="md:w-[810px] w-full mx-auto md:mx-0 h-[344px] py-6 bg-white shadow px-6 block rounded">
      <div className="flex items-center justify-between py-1">
        <p data-testid="label-image" className="text-base font-semibold">{title}</p>
      </div>
      <div
        className={`w-full h-[248px] rounded ${
          !selectedFile && 'py-[14px] px-6 bg-secondary'
        }`}
      >
        <div
          className="custom-file-input"
          {...getRootProps()}
          style={dropzoneStyles()}
        >
          <input {...getInputProps()} />
          {/* eslint-disable-next-line no-nested-ternary */}
          {selectedFile ? (
            <div data-testid="image-file" className="relative w-full h-full">
              <Image
                src={selectedFile}
                alt="Selected file"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          ) : isDragActive ? (
            <p>Drop the file here</p>
          ) : (
            <>
              <Image
                src="/attachment.svg"
                alt="icon button"
                width={24}
                height={24}
              />
              <p data-testid="input-label" className="text-sm font-normal underline">
                Drag and drop image files or{' '}
                <span className="text-blue-600">Browse</span>
              </p>
              <p className="text-xs underline">
                Support formats: PNG, JPEG, etc.
              </p>
              <p className="text-xs underline">Max size: 500b</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default InputImage;
