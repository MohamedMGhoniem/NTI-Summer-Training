import { Routes } from '@angular/router';
import { PostsListComponent } from './postsManage/posts/postslist/postslist.component';
import { PostCreateComponent } from './postsManage/posts/postcreate/postcreate.component';
import { PostUpdateComponent } from './postsManage/posts/postupdate/postupdate.component';

export const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'posts', component: PostsListComponent },
  { path: 'create', component: PostCreateComponent },

  { path: 'update/:id', component: PostUpdateComponent },
];
