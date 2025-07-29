import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { PostsService } from '../services/posts.services';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,HttpClientModule],
  templateUrl: './postcreate.component.html',
  styleUrls: ['./postcreate.component.scss'],
  providers:[PostsService]
})
export class PostCreateComponent {
  postForm: FormGroup;

  constructor(private postsService: PostsService) {
    this.postForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      this.postsService.createPost(this.postForm.value).subscribe(() => {
        alert('Post created successfully!');
        this.postForm.reset();
      });
    }
  }
}
