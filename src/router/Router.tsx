import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/Main';
import Detail from '../pages/Detail';
import NotFound from '../pages/NotFound';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/todos/:todoId" element={<Detail />}>
          {/* <Route path=":todoId" element={<E />} /> */}
          {/* 다이나믹 파라미터 */}
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
