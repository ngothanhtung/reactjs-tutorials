import { Button, Divider, Form, Input, InputNumber, Modal, Select, Space, Table, Popconfirm, message } from 'antd';
import React from 'react';
import numeral from 'numeral';
import axiosClient from '../../Session06/configs/axiosClient';
import { QuestionCircleOutlined } from '@ant-design/icons';

type Props = {};

export default function Products({}: Props) {
  const [form] = Form.useForm();
  const [formUpdate] = Form.useForm();

  const [selectedId, setSelectedId] = React.useState(-1);

  const [open, setOpen] = React.useState(false);

  const [products, setProducts] = React.useState([]);

  const [categories, setCategories] = React.useState([]);

  const [suppliers, setSuppliers] = React.useState([]);

  const [refresh, setRefresh] = React.useState(false);
  // GET /online-shop/products
  React.useEffect(() => {
    const getProducts = async () => {
      const response = await axiosClient.get('/online-shop/products');
      setProducts(response.data);

      // console.log('response.data', response.data);
    };

    getProducts();
  }, [refresh]);

  // GET /online-shop/categories
  React.useEffect(() => {
    const getCategories = async () => {
      const response = await axiosClient.get('/online-shop/categories');
      setCategories(response.data);
    };

    getCategories();
  }, []);

  // GET /online-shop/suppliers
  React.useEffect(() => {
    const getSuppliers = async () => {
      const response = await axiosClient.get('/online-shop/suppliers');
      setSuppliers(response.data);
    };

    getSuppliers();
  }, []);

  const columns: any = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      align: 'right',
      className: 'text-red-500',
    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'name',
      key: 'name',
    },

    {
      title: 'Danh mục',
      dataIndex: 'category',
      key: 'category',
      render: (text: any, record: any, index: number) => {
        return <span>{record.category.name}</span>;
      },
    },

    {
      title: 'Nhà cung cấp',
      dataIndex: 'supplier',
      key: 'supplier',
      render: (text: any, record: any, index: number) => {
        return <span>{record.supplier.name}</span>;
      },
    },
    {
      title: 'Giá bán',
      dataIndex: 'price',
      key: 'price',
      align: 'right',
      render: (text: any, record: any, index: number) => {
        return <strong style={{ color: 'green' }}>{numeral(text).format('0,0')}</strong>;
      },
    },
    {
      title: 'Giảm giá',
      dataIndex: 'discount',
      key: 'discount',
      align: 'right',
      render: (text: any, record: any, index: number) => {
        return <span>{numeral(text).format('0.0')}%</span>;
      },
    },
    {
      title: () => {
        return <span style={{ color: 'violet' }}>Giá sau giảm giá</span>;
      },
      dataIndex: 'stock',
      key: 'stock',
      align: 'right',
      render: (text: any, record: any, index: number) => {
        return <span>{numeral(text).format('0,0')}</span>;
      },
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      key: 'description',
    },

    {
      title: 'Thao tác',
      dataIndex: 'actions',
      key: 'actions',
      width: '1%',
      render: (text: any, record: any, index: number) => {
        return (
          <Space>
            <Button
              type='primary'
              onClick={() => {
                setOpen(true);
                setSelectedId(record.id);
                formUpdate.setFieldsValue(record);
              }}
            >
              Sửa
            </Button>

            <Popconfirm
              title='Delete the product'
              description='Are you sure to delete this product?'
              icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
              onConfirm={() => {
                onDelete(record.id);
              }}
            >
              <Button type='primary' danger>
                Xóa
              </Button>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  const onFinish = async (values: any) => {
    console.log(values);

    try {
      const response = await axiosClient.post('/online-shop/products', values, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
        },
      });
      console.log(response);
      message.success('Thêm mới thành công', 2);
      setRefresh(!refresh);
      form.resetFields(['name', 'price', 'discount', 'stock', 'description']);
    } catch (err: any) {
      console.error(err);
    }
  };

  const onFinishUpdate = async (values: any) => {
    try {
      const response = await axiosClient.patch('/online-shop/products/' + selectedId, values, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
        },
      });
      console.log(response);

      setRefresh(!refresh);
      message.success('Cập nhật thành công', 2);
      formUpdate.resetFields();
      setOpen(false);
    } catch (err: any) {
      console.error(err);
    }
  };

  const onDelete = async (id: number) => {
    try {
      const response = await axiosClient.delete('/online-shop/products/' + id, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('access_token'),
        },
      });
      console.log(response);
      setRefresh(!refresh);
      message.success('Xóa thành công', 2);
    } catch (err: any) {
      console.error(err);
    }
  };
  return (
    <div>
      <Form
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 14 }}
        layout='horizontal'
        onFinish={onFinish}
        initialValues={{
          discount: 0,
          stock: 0,
        }}
      >
        <Form.Item
          label='Danh mục'
          name='categoryId'
          rules={[
            {
              required: true,
              message: 'Danh mục bắt buộc phải chọn',
            },
          ]}
        >
          <Select
            options={categories.map((item: any) => {
              return {
                value: item.id,
                label: item.name,
              };
            })}
          />
        </Form.Item>

        <Form.Item
          label='Nhà cung cấp'
          name='supplierId'
          rules={[
            {
              required: true,
              message: 'Nhà cung cấp bắt buộc phải chọn',
            },
          ]}
        >
          <Select
            options={suppliers.map((item: any) => {
              return {
                value: item.id,
                label: item.name,
              };
            })}
          />
        </Form.Item>
        <Form.Item
          label='Tên sản phẩm'
          name='name'
          rules={[
            {
              required: true,
              message: 'Tên sản phẩm bắt buộc phải nhập',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='Giá bán'
          name='price'
          rules={[
            {
              required: true,
              message: 'Giá bán bắt buộc phải nhập',
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label='Giảm giá (%)'
          name='discount'
          rules={[
            {
              required: true,
            },
            {
              type: 'number',
              min: 0,
              message: 'Giảm phải lớn hơn 0',
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          label='Tồn kho'
          name='stock'
          rules={[
            {
              required: true,
            },
            {
              type: 'number',
              min: 0,
              message: 'Tồn kho phải lớn hơn 0',
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item label='Mô tả' name='description'>
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 14 }}>
          <Button type='primary' htmlType='submit'>
            Create new product
          </Button>
        </Form.Item>
      </Form>
      <Table rowKey='id' dataSource={products} columns={columns} />

      <Modal
        title='Cập nhật thông tin sản phẩm'
        okText='Cập nhật'
        cancelText='Đóng'
        open={open}
        onOk={() => {}}
        onCancel={() => {
          setOpen(false);
        }}
        footer={
          <div>
            <Divider />
            <Space>
              <Button
                type='default'
                onClick={() => {
                  setOpen(false);
                }}
              >
                Đóng
              </Button>
              <Button
                type='primary'
                onClick={() => {
                  formUpdate.submit();
                }}
              >
                Cập nhật
              </Button>
            </Space>
          </div>
        }
      >
        <Divider />
        <Form
          form={formUpdate}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 14 }}
          layout='horizontal'
          onFinish={onFinishUpdate}
          initialValues={{
            discount: 0,
            stock: 0,
          }}
        >
          <Form.Item
            label='Danh mục'
            name='categoryId'
            rules={[
              {
                required: true,
                message: 'Danh mục bắt buộc phải chọn',
              },
            ]}
          >
            <Select
              options={categories.map((item: any) => {
                return {
                  value: item.id,
                  label: item.name,
                };
              })}
            />
          </Form.Item>

          <Form.Item
            label='Nhà cung cấp'
            name='supplierId'
            rules={[
              {
                required: true,
                message: 'Nhà cung cấp bắt buộc phải chọn',
              },
            ]}
          >
            <Select
              options={suppliers.map((item: any) => {
                return {
                  value: item.id,
                  label: item.name,
                };
              })}
            />
          </Form.Item>
          <Form.Item
            label='Tên sản phẩm'
            name='name'
            rules={[
              {
                required: true,
                message: 'Tên sản phẩm bắt buộc phải nhập',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Giá bán'
            name='price'
            rules={[
              {
                required: true,
                message: 'Giá bán bắt buộc phải nhập',
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            label='Giảm giá (%)'
            name='discount'
            rules={[
              {
                required: true,
              },
              {
                type: 'number',
                min: 0,
                message: 'Giảm phải lớn hơn 0',
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            label='Tồn kho'
            name='stock'
            rules={[
              {
                required: true,
              },
              {
                type: 'number',
                min: 0,
                message: 'Tồn kho phải lớn hơn 0',
              },
            ]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item label='Mô tả' name='description'>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
