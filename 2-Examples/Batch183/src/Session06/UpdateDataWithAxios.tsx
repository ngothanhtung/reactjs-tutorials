import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import axiosClient from './configs/axiosClient';

interface IFormInput {
  name: string;
  description?: string;
}

const schema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string(),
});

export default function UpdateDataWithAxios() {
  const refButton = React.useRef<any>(null);
  // Refresh state
  const [refresh, setRefresh] = React.useState(false);

  // Loading state
  const [loading, setLoading] = React.useState(false);
  const [categories, setCategories] = React.useState([]);
  const [selectedId, setSelectedId] = React.useState<number>(-1);

  // Chạy 1 lần duy nhất khi component được render lần đầu tiên
  React.useEffect(() => {
    // Async / Await

    const getData = async () => {
      try {
        setLoading(true);
        const response: any = await axiosClient.get('/online-shop/categories');
        setCategories(response.data);
      } catch (error) {
        console.log('Failed to fetch data: ', error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [refresh]);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await axiosClient.patch('/online-shop/categories/' + selectedId, data, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
        },
      });
      console.log(response);

      setRefresh(!refresh);
      refButton.current?.click();
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Update data with Axios</h2>
      <table className='table table-striped '>
        <thead>
          <tr>
            <th>STT</th>
            <th>Id</th>
            <th>Tên danh mục</th>
            <th>Mô tả</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category: any, index: number) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{category.id}</td>
                <td>{category.name}</td>
                {/* Truncate 100 characters */}
                <td>{category.description?.slice(0, 100)} ...</td>
                <td>
                  <button
                    type='button'
                    className='btn btn-primary'
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal'
                    onClick={() => {
                      console.log(category);
                      setSelectedId(category.id);
                      setValue('name', category.name);
                      setValue('description', category.description);
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className='modal fade' id='exampleModal' tabIndex={-1} aria-labelledby='exampleModalLabel' aria-hidden='true'>
        <div className='modal-dialog'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title'>Modal title</h5>
                <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close' ref={refButton}></button>
              </div>
              <div className='modal-body'>
                <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 320, gap: 12 }}>
                  {/* USERNAME */}
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor='name'>Name</label>
                    <input {...register('name')} id='name' />
                    <span>{errors.name?.message}</span>
                  </div>

                  {/* DESCRIPTION */}
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor='description'>Description</label>
                    <input {...register('description')} id='description' />
                    <span>{errors.description?.message}</span>
                  </div>
                </div>
              </div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-secondary' data-bs-dismiss='modal'>
                  Close
                </button>
                <button type='submit' className='btn btn-primary'>
                  Save changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
