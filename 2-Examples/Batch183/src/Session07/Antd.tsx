import { ConfigProvider, Divider } from 'antd';
import ButtonExamples from './components/ButtonExamples';
import AutocompleteExamples from './components/AutocompleteExamples';
import ColorPickerExamples from './components/ColorPickerExamples';
import DatePickerExamples from './components/DatePickerExamples';
import FormExamples from './components/FormExamples';
import TableExamples from './components/TableExamples';
import Products from './OnlineShop/Products';

export default function Antd() {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#00b96b', borderRadius: 4 } }}>
      {/* <ButtonExamples /> */}
      {/* <Divider /> */}
      {/* <AutocompleteExamples /> */}
      {/* <Divider /> */}
      {/* <ColorPickerExamples /> */}
      {/* <Divider /> */}
      {/* <DatePickerExamples /> */}
      {/* <Divider /> */}
      {/* <FormExamples /> */}

      {/* <Divider /> */}

      {/* <TableExamples /> */}
      <Products />
    </ConfigProvider>
  );
}
