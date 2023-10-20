import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    fullname: yup.string().required('Họ và tên bắt buộc nhập.'),
    address: yup.string().required(),
    email: yup.string().email('Email không hợp lệ').required('Email bắt buộc nhập.'),
    phone: yup.string().required(),
    city: yup.string().required(),
    gender: yup.string().required(),
    agree: yup.boolean().required(),
  })
  .required();

interface IFormInput {
  fullname: string;
  address: string;
  email: string;
  phone: string;
  city: string;
  gender: string;
  agree: boolean;
}

export default function ReactFormHook() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  console.log('errors', errors);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    return console.log(data);
  };

  console.log(watch('fullname')); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 420, gap: 8 }}>
        {/* FULLNAME */}
        {/* register your input into the hook by invoking the "register" function */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor='fullname'>Fullname</label>
          {/* <span>Fullname</span> */}
          <input {...register('fullname')} id='fullname' />
          {/* errors will return when field validation fails  */}
          <span>{errors.fullname?.message}</span>
        </div>

        {/* ADDRESS */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor='address'>Address</label>
          {/* include validation with required or other standard HTML validation rules */}
          <input defaultValue='38 Yên Bái' {...register('address')} id='address' />
        </div>
        {/* PHONE */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor='address'>Phone</label>
          {/* include validation with required or other standard HTML validation rules */}
          <input {...register('phone')} id='phone' />
        </div>
        {/* EMAIl */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor='email'>Email</label>
          {/* include validation with required or other standard HTML validation rules */}
          <input {...register('email')} id='email' />
          {/* errors will return when field validation fails  */}
          <span>{errors.email?.message}</span>
        </div>

        {/* CITY */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor='city'>City</label>
          <select {...register('city')} id='city'>
            <option value='HCM'>TP. Hồ Chí Minh</option>
            <option value='HN'>TP. Hà Nội</option>
            <option value='DN'>TP. Đà Nẵng</option>
          </select>
        </div>

        {/* GENDER */}
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <label htmlFor='gender'>Gender</label>
          <input type='radio' radioGroup='gender' value='male' {...register('gender')} /> Nam
          <input type='radio' radioGroup='gender' value='female' {...register('gender')} /> Nữ
        </div>

        {/* AGREE */}
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <input type='checkbox' {...register('agree')} /> Tôi đồng ý các điều khoản
        </div>

        {/* SUBMIT */}
        <button type='submit' name='Submit'>
          Submit
        </button>
      </div>
    </form>
  );
}
