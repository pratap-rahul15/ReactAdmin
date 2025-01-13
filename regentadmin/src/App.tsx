import {
  Admin,
  Resource,
} from "react-admin";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import PostList from "./posts/post-list";
import UserList from "./pages/user/user-list";
import PostShow from "./posts/post-show";
import UserShow from "./pages/user/user-show";
import PostEdit from "./posts/post-edit";
import PostCreate from "./posts/post-create";
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import { authProvider } from "./authProvider";

export const App = () => (
  <Admin layout={Layout} dataProvider={dataProvider} authProvider={authProvider}>
    <Resource icon={ArticleIcon} name="posts" list={PostList} show={PostShow} edit={PostEdit} create={PostCreate} />
    <Resource icon={PersonIcon} name="users" list={UserList} show={UserShow} />
  </Admin>
);
