import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';

import { store } from './redux/store/store';
import { MainRouter } from './routers/MainRouter';
import { CustomTheme } from './themeConfig';
const App = () => {
  return (
    <Provider store={store}>
      <CustomTheme>
      <CssBaseline />
        <MainRouter/>
      </CustomTheme>
    </Provider>
  );
}

export default App;
