import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './themeConfig';

import { store } from './redux/store/store';
import { MainRouter } from './routers/MainRouter';
import { ThemeProvider } from '@material-ui/core';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        <MainRouter/>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
